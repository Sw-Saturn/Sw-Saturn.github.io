// Typing carousel disabled: show summary items as static text
document.addEventListener('DOMContentLoaded', () => {
  const $ul = document.getElementById('typing-carousel-data')?.children
  if ($ul == null || $ul.length === 0) return

  const strings = Array.from($ul).map($el => $el.textContent)
  const $typed = document.getElementById('typed')
  if ($typed) {
    $typed.textContent = strings.join(' — ')
  }

  const $cursor = document.querySelector('.ityped-cursor')
  if ($cursor) $cursor.style.display = 'none'
})
