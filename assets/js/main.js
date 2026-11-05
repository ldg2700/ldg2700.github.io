'use strict';
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    const close = () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
    nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('is-open')) { close(); toggle.focus(); } });
    const desktop = window.matchMedia('(min-width: 941px)');
    desktop.addEventListener('change', () => { if (desktop.matches) close(); });
  }
  const form = document.getElementById('inquiry-form');
  if (!form) return;
  const select = document.getElementById('service-select');
  const routeSearch = typeof window.__previewSearch === 'string' ? window.__previewSearch : window.location.search;
  const requested = new URLSearchParams(routeSearch).get('service');
  if (requested && Array.from(select.options).some(option => option.value === requested)) select.value = requested;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const clean = key => String(data.get(key) || '').trim();
    if (!clean('name') || !clean('message')) { alert('Please enter your name and a short project description.'); return; }
    const service = select.options[select.selectedIndex].text;
    const subject = 'Providelabs inquiry - ' + service;
    const body = 'Hello Providelabs,\n\nI would like to discuss ' + service.replace(/^[A-Z]/, c => c.toLowerCase()).replace(/^i\.T\./, 'I.T.') + '.\n\nName: ' + clean('name') + '\nEmail: ' + clean('email') + '\nCompany: ' + (clean('company') || 'Not specified') + '\n\nProject details:\n' + clean('message') + '\n\nThank you.';
    const field = document.getElementById('draft-text');
    field.value = 'To: contact@providelabscorp.com\nSubject: ' + subject + '\n\n' + body;
    document.getElementById('draft-link').href = 'mailto:contact@providelabscorp.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    const result = document.getElementById('draft-result');
    result.hidden = false;
    result.focus();
    result.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'center'});
  });
  document.getElementById('copy-draft').addEventListener('click', async () => {
    const field = document.getElementById('draft-text');
    const status = document.getElementById('copy-status');
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard not available');
      await navigator.clipboard.writeText(field.value);
      status.textContent = 'Draft copied. Paste it into your email app, review it and press Send there.';
    } catch (error) {
      field.focus(); field.select();
      status.textContent = 'The draft is selected. Use Copy on your device, then paste it into your email app.';
    }
  });
})();
