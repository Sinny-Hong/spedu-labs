(() => {
  const cards = [...document.querySelectorAll('.resource-card')];
  const buttons = [...document.querySelectorAll('.category-btn')];
  const search = document.querySelector('#resourceSearch');
  const count = document.querySelector('#resultCount');
  const empty = document.querySelector('#emptyState');
  const sidebar = document.querySelector('#sidebar');
  const toggle = document.querySelector('#mobileToggle');
  let category = 'all';

  function filterCards() {
    const query = (search?.value || '').trim().toLocaleLowerCase('zh-Hant');
    let visible = 0;
    cards.forEach((card) => {
      const categoryMatch = category === 'all' || card.dataset.category === category;
      const textMatch = !query || card.textContent.toLocaleLowerCase('zh-Hant').includes(query);
      card.hidden = !(categoryMatch && textMatch);
      if (!card.hidden) visible += 1;
    });
    if (count) count.textContent = `${visible} 項資源`;
    empty?.classList.toggle('show', visible === 0);
  }

  buttons.forEach((button) => button.addEventListener('click', () => {
    category = button.dataset.filter;
    buttons.forEach((item) => item.classList.toggle('active', item === button));
    filterCards();
    if (window.innerWidth <= 720) sidebar?.classList.remove('open');
  }));
  search?.addEventListener('input', filterCards);
  toggle?.addEventListener('click', () => sidebar?.classList.toggle('open'));

  document.querySelectorAll('.favorite').forEach((button) => {
    const key = `spedu-favorite:${location.pathname}:${button.dataset.id}`;
    button.classList.toggle('active', localStorage.getItem(key) === '1');
    button.setAttribute('aria-pressed', button.classList.contains('active'));
    button.addEventListener('click', () => {
      const active = button.classList.toggle('active');
      button.setAttribute('aria-pressed', active);
      localStorage.setItem(key, active ? '1' : '0');
    });
  });

  filterCards();
})();
