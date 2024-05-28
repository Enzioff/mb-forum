document.addEventListener('DOMContentLoaded', () => {
  initScroll()
})

const initScroll = () => {
  const notification = document.querySelector('[data-notification]')

  if (!notification) return;

  let isScrolling;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  window.addEventListener('scroll', function() {
    const topPosition = window.pageYOffset;

    window.clearTimeout(isScrolling);
    notification.classList.remove('active');

    if (topPosition >= 200 && topPosition + windowHeight < documentHeight - 200) {
      isScrolling = setTimeout(function() {
        notification.classList.add('active');
      }, 400);
    }
  });
}