type NoticeState = "pending" | "success" | "error";

const MIN_FILL_TIME_MS = 1800;
const SUBMIT_COOLDOWN_MS = 300000;
const COOLDOWN_KEY = "portfolio:contact:last-submit-at";

function getMessageFromPayload(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") return null;

  const payloadRecord = payload as Record<string, unknown>;

  const maybeError = payloadRecord.error;
  if (maybeError && typeof maybeError === "object") {
    const errorRecord = maybeError as Record<string, unknown>;

    if (typeof errorRecord.message === "string") return errorRecord.message;

    const issues = errorRecord.issues;
    if (Array.isArray(issues)) {
      const firstIssue = issues[0];
      if (
        firstIssue &&
        typeof firstIssue === "object" &&
        typeof (firstIssue as Record<string, unknown>).message === "string"
      ) {
        return (firstIssue as Record<string, unknown>).message as string;
      }
    }
  }

  const maybeErrors = payloadRecord.errors;
  if (Array.isArray(maybeErrors)) {
    const firstError = maybeErrors[0];
    if (
      firstError &&
      typeof firstError === "object" &&
      typeof (firstError as Record<string, unknown>).message === "string"
    ) {
      return (firstError as Record<string, unknown>).message as string;
    }
  }

  if (typeof payloadRecord.message === "string") return payloadRecord.message;
  return null;
}

function setNotice(
  notice: Element | null,
  state: NoticeState,
  message: string,
) {
  if (!(notice instanceof HTMLElement)) return;

  const title = notice.querySelector("[data-contact-notice-title]");
  const body = notice.querySelector("[data-contact-notice-message]");
  const dot = notice.querySelector("[data-contact-notice-dot]");

  if (!(title instanceof HTMLElement) || !(body instanceof HTMLElement)) return;

  notice.classList.remove("hidden");
  notice.setAttribute("data-state", state);
  body.textContent = message;

  if (dot instanceof HTMLElement) {
    dot.className = "mt-1 inline-block h-2.5 w-2.5 rounded-full";
  }

  if (state === "pending") {
    title.textContent = "Enviando";
    notice.className = "border border-border bg-background p-3 sm:p-4 animate-pulse";
    if (dot instanceof HTMLElement) dot.classList.add("bg-primary");
    return;
  }

  if (state === "success") {
    title.textContent = "Mensaje enviado";
    notice.className = "border border-accent/40 bg-accent/10 p-3 sm:p-4";
    if (dot instanceof HTMLElement) dot.classList.add("bg-accent");
    return;
  }

  title.textContent = "No se pudo enviar";
  notice.className = "border border-destructive/40 bg-destructive/10 p-3 sm:p-4";
  if (dot instanceof HTMLElement) dot.classList.add("bg-destructive");
}

function getRemainingCooldownMs() {
  const raw = localStorage.getItem(COOLDOWN_KEY);
  if (!raw) return 0;

  const lastSentAt = Number(raw);
  if (!Number.isFinite(lastSentAt)) return 0;

  return Math.max(0, lastSentAt + SUBMIT_COOLDOWN_MS - Date.now());
}

export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!(form instanceof HTMLFormElement)) return;

  // Evita listeners duplicados si el componente se rehidrata o reinicializa.
  if (form.dataset.contactInitialized === "true") return;
  form.dataset.contactInitialized = "true";

  const submitButton = form.querySelector("[data-submit-button]");
  const notice = document.querySelector("[data-contact-notice]");
  const loadedAtInput = form.querySelector("[data-form-loaded-at]");
  let startedAt = Date.now();

  if (loadedAtInput instanceof HTMLInputElement) {
    loadedAtInput.value = String(startedAt);
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const honeypotValue = (new FormData(form).get("_gotcha") ?? "")
      .toString()
      .trim();

    if (honeypotValue.length > 0) {
      setNotice(notice, "error", "No se pudo validar el envio. Recarga la pagina.");
      return;
    }

    const timeToFill = Date.now() - startedAt;
    if (timeToFill < MIN_FILL_TIME_MS) {
      setNotice(notice, "error", "Espera un momento antes de enviar el formulario.");
      return;
    }

    const cooldownLeftMs = getRemainingCooldownMs();
    if (cooldownLeftMs > 0) {
      const secondsLeft = Math.ceil(cooldownLeftMs / 1000);
      setNotice(notice, "error", `Espera ${secondsLeft}s antes de enviar otro mensaje.`);
      return;
    }

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.classList.add("opacity-70", "cursor-not-allowed");
    }

    setNotice(notice, "pending", "Enviando tu mensaje...");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      let payload: unknown = null;

      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok) {
        const errorMessage =
          getMessageFromPayload(payload) ??
          "No se pudo enviar el mensaje. Intentalo de nuevo.";
        setNotice(notice, "error", errorMessage);
        return;
      }

      setNotice(notice, "success", "Gracias. Te respondere lo antes posible.");
      localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
      form.reset();

      startedAt = Date.now();
      if (loadedAtInput instanceof HTMLInputElement) {
        loadedAtInput.value = String(startedAt);
      }
    } catch {
      setNotice(
        notice,
        "error",
        "Error de red. Revisa tu conexion e intentalo otra vez.",
      );
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.classList.remove("opacity-70", "cursor-not-allowed");
      }
    }
  });
}
