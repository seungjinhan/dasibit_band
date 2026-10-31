// Footer visitor count from GoatCounter; stays hidden if the count can't be loaded.
fetch('https://jimmy.goatcounter.com/counter/TOTAL.json')
  .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
  .then(({ count }) => {
    document.getElementById('visitor-count').textContent = count;
    document.getElementById('visitors').hidden = false;
  })
  .catch(() => { /* counter unavailable */ });
