const cursor_trail = document.getElementById('cursor-trail')
const container = document.getElementById('hero')
const spin_labs = document.getElementById('spin-labs')
const inner_orbit = document.querySelector('.inner-orbit')
const outer_orbit = document.querySelector('.outer-orbit')
const spin_line = document.querySelector('.spin-labs-line')

window.addEventListener('mouseover', (e) => {
  const x = e.clientX + 'px'
  const y = e.clientY + 'px'
  cursor_trail.style.left = x
  cursor_trail.style.top = y
})

let animation_pause = false
spin_labs.addEventListener('click', () => {
  if (!animation_pause) {
    inner_orbit.style.animationPlayState = 'paused'
    outer_orbit.style.animationPlayState = 'paused'
    spin_line.style.animationPlayState = 'paused'

    animation_pause = true
  } else {
    inner_orbit.style.animationPlayState = 'running'
    outer_orbit.style.animationPlayState = 'running'
    spin_line.style.animationPlayState = 'running'
    animation_pause = false
  }
})
