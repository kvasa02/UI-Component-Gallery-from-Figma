// Theme toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  const hc = document.documentElement.classList.toggle('high-contrast');
  themeBtn.setAttribute('aria-pressed', hc ? 'true' : 'false');
  themeBtn.textContent = 'High Contrast: ' + (hc ? 'On' : 'Off');
});

// Font size switcher
const fontSizeSelect = document.getElementById('font-size-select');
fontSizeSelect.addEventListener('change', (e) => {
  document.body.style.fontSize = `${e.target.value}px`;
});

// Switch ARIA
const demoSwitch = document.getElementById('demoSwitch');
if (demoSwitch) {
  demoSwitch.addEventListener('change', function() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
  });
}

// Toast
const showToastBtn = document.getElementById('showToastBtn');
const demoToast = document.getElementById('demoToast');
if (showToastBtn && demoToast) {
  showToastBtn.addEventListener('click', () => {
    const toast = new bootstrap.Toast(demoToast);
    toast.show();
  });
}

// Accessibility: Focus skip link
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
  skipLink.addEventListener('keydown', e => {
    if (e.key === "Enter" || e.key === " ") {
      document.getElementById('main-content').focus();
    }
  });
}
