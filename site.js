// Points the "GitHub" links at this repository. On GitHub Pages the repo follows from the address
// (user.github.io/repo → github.com/user/repo). With a custom domain, set it once here:
const REPO = 'cloudxlab/folio';

(function () {
  let repo = REPO;
  const host = location.hostname;
  if (!repo && host.endsWith('.github.io')) {
    const user = host.split('.')[0];
    const first = location.pathname.split('/').filter(Boolean)[0];
    repo = user + '/' + (first && !first.includes('.') ? first : host);
  }
  document.querySelectorAll('[data-gh]').forEach(a => {
    if (repo) a.href = 'https://github.com/' + repo + a.dataset.gh;
    else a.href = 'https://github.com/';
  });

  const top = document.querySelector('.top');
  if (top) {
    const onScroll = () => top.classList.toggle('scrolled', scrollY > 8);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
})();
