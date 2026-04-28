(function () {
  const config = window.SIS_CONFIG || {};
  if (!config.enabled) return;

  const QUEUE_KEY = "sis_event_queue_v1";

  function getQueue() {
    try {
      return JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
    } catch {
      return [];
    }
  }

  function saveQueue(queue) {
    try {
      localStorage.setItem(QUEUE_KEY, JSON.stringify(queue.slice(-100)));
    } catch {}
  }

  function track(eventName, payload) {
    const event = {
      eventName,
      siteId: config.siteId || "unknown-site",
      clientId: config.clientId || "unknown-client",
      url: window.location.href,
      path: window.location.pathname,
      referrer: document.referrer || "",
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      payload: payload || {},
    };

    if (config.debug) console.log("[SIS]", event);

    if (!config.endpoint) {
      const queue = getQueue();
      queue.push(event);
      saveQueue(queue);
      return;
    }

    fetch(config.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify(event),
    }).catch(() => {
      const queue = getQueue();
      queue.push(event);
      saveQueue(queue);
    });
  }

  window.SIS = { track };

  track("page_view", {
    title: document.title,
  });

  document.addEventListener("click", function (event) {
    const link = event.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const label = (link.innerText || link.getAttribute("aria-label") || "").trim();

    if (href.startsWith("tel:")) {
      track("phone_click", { href, label });
      return;
    }

    if (href.startsWith("mailto:")) {
      track("email_click", { href, label });
      return;
    }

    if (
      label.toLowerCase().includes("consultation") ||
      label.toLowerCase().includes("begin your project") ||
      label.toLowerCase().includes("schedule") ||
      href.includes("contact")
    ) {
      track("cta_click", { href, label });
      return;
    }

    track("link_click", { href, label });
  });

  document.addEventListener("submit", function (event) {
    const form = event.target;
    if (!form || form.tagName !== "FORM") return;

    track("form_submit_attempt", {
      formId: form.id || "",
      formName: form.getAttribute("name") || "",
      action: form.getAttribute("action") || "",
    });
  });
})();