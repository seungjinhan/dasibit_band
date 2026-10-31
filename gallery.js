// Story photos: a thumbnail opens the lightbox; step through with buttons, arrow keys or a swipe.
{
  const thumbs = [...document.querySelectorAll('.photo-thumb')];
  const box = document.getElementById('lightbox');
  const boxImg = document.getElementById('lightbox-img');
  const boxCaption = document.getElementById('lightbox-caption');
  const boxCount = document.getElementById('lightbox-count');
  let current = 0;

  function show(i) {
    current = (i + thumbs.length) % thumbs.length;
    const img = thumbs[current].querySelector('img');
    boxImg.src = img.dataset.full;
    boxImg.alt = img.alt;
    boxCaption.textContent = img.alt;
    boxCount.textContent = `${current + 1} / ${thumbs.length}`;
  }

  thumbs.forEach((btn, i) => btn.addEventListener('click', () => { show(i); box.showModal(); }));
  box.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
  box.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
  box.querySelector('.lb-close').addEventListener('click', () => box.close());
  // A click on the dark area around the photo closes it.
  box.addEventListener('click', (e) => { if (e.target === box || e.target.tagName === 'FIGURE') box.close(); });
  box.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  let startX = null;
  box.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
  });
}
