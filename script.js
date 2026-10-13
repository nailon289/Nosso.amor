const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', () => document.getElementById('carta').scrollIntoView({behavior:'smooth'}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
document.querySelectorAll('.gallery figure img, .hero-photo img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.closest('figure')?.querySelector('figcaption')?.textContent || 'uma lembrança nossa ♡';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  });
});
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src='';}
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {if(e.target === lightbox) closeLightbox();});
document.addEventListener('keydown', e => {if(e.key === 'Escape') closeLightbox();});

document.getElementById('heartBtn').addEventListener('click', () => {
  const heart = document.getElementById('heartPop');
  heart.classList.remove('pop');
  void heart.offsetWidth;
  heart.classList.add('pop');
});
