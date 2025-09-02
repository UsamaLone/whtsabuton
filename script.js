const WHATSAPP_NUMBER = "923184830933";
const DEFAULT_MESSAGE = "Assalamualaikum! Direct message bhej raha/rahi hoon.";

// Detect mobile user
const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);

// Button reference
const btn = document.getElementById("whatsappBtn");

// Agar mobile nahi hai to button hide kar do
if (!isMobile) {
  btn.style.display = "none";
}

// Agar mobile hai to click par direct WhatsApp app open
btn.addEventListener("click", () => {
  const encodedMsg = encodeURIComponent(DEFAULT_MESSAGE);
  window.location.href = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodedMsg}`;
});
