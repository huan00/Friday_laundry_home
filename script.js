const cursor_trail = document.getElementById('cursor-trail')
const container = document.getElementById('hero')

window.addEventListener('mouseover', (e) => {
  const x = e.clientX + 'px'
  const y = e.clientY + 'px'
  cursor_trail.style.left = x
  cursor_trail.style.top = y
})
