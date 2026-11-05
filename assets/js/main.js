'use strict';

document.documentElement.classList.add('js');

// The menu remains visible on small screens if JavaScript is unavailable.
const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
if (menuButton && menu) {
  const setMenu = (open, restoreFocus = false) => {
    menu.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    if (restoreFocus) menuButton.focus();
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav')) setMenu(false);
  });
  window.matchMedia('(min-width: 951px)').addEventListener('change', () => setMenu(false));
}

document.querySelectorAll('[data-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });

// This static site prepares a mailto draft. It does not send or store inquiries.
const inquiry = document.querySelector('#project-brief');
if (inquiry) {
  const requestedService = new URLSearchParams(window.location.search).get('service');
  const service = inquiry.elements.namedItem('service');
  if (requestedService && Array.from(service.options).some(option => option.value === requestedService)) {
    service.value = requestedService;
  }
  const draftPanel = document.querySelector('#draft-panel');
  const draftField = document.querySelector('#email-draft');
  const draftLink = document.querySelector('#open-email-draft');
  const copyButton = document.querySelector('#copy-draft');
  const copyStatus = document.querySelector('#copy-status');

  inquiry.addEventListener('submit', event => {
    event.preventDefault();
    if (!inquiry.reportValidity()) return;
    const field = name => String(inquiry.elements.namedItem(name)?.value || '').trim();
    const serviceLabel = service.options[service.selectedIndex].textContent;
    const subject = `Project inquiry: ${serviceLabel}`;
    const body = [
      'Hello Providelabs,', '',
      `My name is ${field('name')}${field('company') ? ` from ${field('company')}` : ''}.`,
      `Email: ${field('email')}`,
      `I am interested in: ${serviceLabel}`,
      field('timeline') ? `Preferred timing: ${field('timeline')}` : '',
      '', 'About the project:', field('message'), '', 'Thank you,', field('name')
    ].filter(line => line !== null).join('\n');
    const mailto = `mailto:contact@providelabscorp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    draftField.value = `To: contact@providelabscorp.com\nSubject: ${subject}\n\n${body}`;
    draftLink.href = mailto;
    draftPanel.hidden = false;
    copyStatus.textContent = '';
    // Preserve a visible copyable draft even if no mail application is configured.
    draftPanel.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
    draftPanel.focus({ preventScroll: true });
    window.location.href = mailto;
  });

  copyButton.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(draftField.value);
      copyStatus.textContent = 'Copied. Paste this into an email to contact@providelabscorp.com.';
    } catch {
      draftField.focus();
      draftField.select();
      copyStatus.textContent = 'Your draft is selected. Use Copy on your device, then paste it into your email.';
    }
  });
}
