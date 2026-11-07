// Revived Songs: before its release time a card with data-release is shown in grayscale with no link,
// a "coming soon" badge and the release date and time (in the viewer's language and time zone).
// At the release time it turns to color and links to the video.
{
  const cards = [...document.querySelectorAll('.demo[data-release]')];
  let timer;

  for (const card of cards) {
    card.dataset.href = card.querySelector('.demo-link').getAttribute('href');
    const badge = document.createElement('span');
    badge.className = 'demo-soon';
    card.querySelector('.demo-thumb').appendChild(badge);
    const when = document.createElement('p');
    when.className = 'demo-when';
    card.querySelector('.demo-meta').before(when);
  }

  function render() {
    const now = Date.now();
    const lang = document.documentElement.lang;
    const soonText = (STRINGS[lang] || STRINGS[DEFAULT_LANG])['demo.soon'];
    // Viewer's own time; name the zone unless they are on Korean time, which the release times are set in.
    const inSeoul = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Seoul';
    const fmt = new Intl.DateTimeFormat(lang, { month: 'long', day: 'numeric', weekday: 'short', hour: 'numeric', minute: '2-digit', timeZoneName: inSeoul ? undefined : 'short' });
    const times = cards.map((card) => Date.parse(card.dataset.release));
    const next = Math.min(...times.filter((at) => at > now));
    cards.forEach((card, i) => {
      const at = times[i];
      const link = card.querySelector('.demo-link');
      card.classList.toggle('is-upcoming', at > now);
      if (at > now) {
        link.removeAttribute('href');
        card.querySelector('.demo-soon').textContent = soonText;
        card.querySelector('.demo-when').textContent = `${soonText} · ${fmt.format(at)}`;
      } else {
        link.setAttribute('href', card.dataset.href);
      }
    });
    // Flip the next card while the page stays open.
    clearTimeout(timer);
    if (next !== Infinity) timer = setTimeout(render, Math.min(next - now + 1000, 2 ** 31 - 1));
  }

  render();
  document.addEventListener('langchange', render);
}
