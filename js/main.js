(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!isOpen));
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.querySelector("[data-web3forms]");
  if (form) {
    var statusEl = form.querySelector(".form-status");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      var formData = new FormData(form);

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      if (statusEl) {
        statusEl.textContent = "";
        statusEl.removeAttribute("data-state");
      }

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      })
        .then(function (response) {
          return response.json().then(function (data) {
            return { ok: response.ok, data: data };
          });
        })
        .then(function (result) {
          if (result.ok) {
            form.reset();
            if (statusEl) {
              statusEl.setAttribute("data-state", "success");
              statusEl.textContent =
                "Thank you — your message has been sent. We aim to respond within 24 hours.";
            }
          } else {
            throw new Error(result.data && result.data.message);
          }
        })
        .catch(function () {
          if (statusEl) {
            statusEl.setAttribute("data-state", "error");
            statusEl.textContent =
              "Something went wrong sending your message. Please try WhatsApp instead, or email us directly.";
          }
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send enquiry";
          }
        });
    });
  }
})();
