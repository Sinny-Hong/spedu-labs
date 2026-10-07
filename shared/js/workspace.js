(() => {
  const cards = [...document.querySelectorAll('.resource-card')];
  const buttons = [...document.querySelectorAll('.category-btn')];
  const search = document.querySelector('#resourceSearch');
  const count = document.querySelector('#resultCount');
  const empty = document.querySelector('#emptyState');
  const sidebar = document.querySelector('#sidebar');
  const toggle = document.querySelector('#mobileToggle');
  let category = 'all';

  function isFavorite(card) {
    return card.querySelector('.favorite')?.classList.contains('active') || false;
  }

  function updateFavoriteCount() {
    const favoriteCount = cards.filter(isFavorite).length;
    document.querySelectorAll('[data-favorite-count]').forEach((item) => {
      item.textContent = favoriteCount;
    });
  }

  function filterCards() {
    const query = (search?.value || '').trim().toLocaleLowerCase('zh-Hant');
    let visible = 0;
    cards.forEach((card) => {
      const categoryMatch = category === 'all'
        || (category === 'favorites' && isFavorite(card))
        || (card.dataset.category || '').split(/\s+/).includes(category);
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
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const active = button.classList.toggle('active');
      button.setAttribute('aria-pressed', active);
      localStorage.setItem(key, active ? '1' : '0');
      updateFavoriteCount();
      if (category === 'favorites') filterCards();
    });
  });

  cards.forEach((card) => {
    const link = card.querySelector('.card-link[href]');
    if (link && !card.dataset.href) {
      card.dataset.href = link.getAttribute('href');
      if (link.target === '_blank') card.dataset.target = '_blank';
      link.remove();
    }
    if (!card.dataset.href || card.classList.contains('is-placeholder')) return;

    const title = card.querySelector('h2')?.textContent.trim() || '教材';
    card.tabIndex = 0;
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', `開啟${title}`);

    const openResource = () => {
      if (card.dataset.target === '_blank') window.open(card.dataset.href, '_blank', 'noopener');
      else window.location.href = card.dataset.href;
    };
    card.addEventListener('click', (event) => {
      if (!event.target.closest('button, a, input, select, textarea')) openResource();
    });
    card.addEventListener('keydown', (event) => {
      if (event.target !== card || (event.key !== 'Enter' && event.key !== ' ')) return;
      event.preventDefault();
      openResource();
    });
  });

  updateFavoriteCount();
  filterCards();
})();
