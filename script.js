// FAQ: one item open at a time; clicking the open one closes it.
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.querySelector('button').addEventListener('click', () => {
    const wasOpen = faq.classList.contains('open');
    faqs.forEach(f => setFaq(f, false));
    if (!wasOpen) setFaq(faq, true);
  });
});

function setFaq(faq, open) {
  faq.classList.toggle('open', open);
  faq.querySelector('button').setAttribute('aria-expanded', open);
  faq.querySelector('.icon').textContent = open ? '−' : '+';
  faq.querySelector('.answer').hidden = !open;
}

// Contact form: service chips toggle; submit swaps to the confirmation card.
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    chip.setAttribute('aria-pressed', chip.getAttribute('aria-pressed') !== 'true');
  });
});

const form = document.getElementById('form');
const sent = document.getElementById('sent');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.hidden = true;
  sent.hidden = false;
});

document.getElementById('reset').addEventListener('click', () => {
  sent.hidden = true;
  form.hidden = false;
});
