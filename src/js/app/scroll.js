document.addEventListener('DOMContentLoaded', () => {
  initScroll()
})

const initScroll = () => {
  const notification = document.querySelector('[data-notification]')

  if (!notification) return;

  let isScrolling;

  window.addEventListener('scroll', function() {
    window.clearTimeout(isScrolling);

    notification.classList.remove('active');

    isScrolling = setTimeout(function() {
      notification.classList.add('active');
    }, 200);
  });
}