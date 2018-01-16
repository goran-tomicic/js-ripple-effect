(() => {
  document.addEventListener('click', e => {

    // Currently supports getting elements by css class or data-ripple attribute
    if (!e.target.hasAttribute('data-ripple') && !e.target.classList.contains('ripple')) {
      return
    }

    const ripple = e.target
    let ink = ripple.querySelector('.ripple__ink')
    let diameter

    if (!ink) {

      // Create new element if clicked for the first time
      ink = document.createElement('span')
      ink.classList.add('ripple__ink')

      diameter = Math.max(ripple.clientWidth, ripple.clientHeight)
      ink.style.width = `${diameter}px`
      ink.style.height = `${diameter}px`

      // On animation end, remove css class, include all vendor prefixes
      const animationVendorPrefixes = ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd']

      animationVendorPrefixes.forEach(eventName => {
        ink.addEventListener(eventName, () => {
          ink.classList.remove('ripple__ink--animated')
        })
      })

      ripple.insertBefore(ink, ripple.firstChild)

    } else {
      diameter = ink.clientWidth
    }

    // Calculate the center of where the click came from
    ink.style.left = `${(e.offsetX - diameter/2)}px`
    ink.style.top = `${(e.offsetY - diameter/2)}px`

    ink.classList.remove('ripple__ink--animated')

    ink.width = `${ink.clientHeight}px`

    ink.classList.add('ripple__ink--animated')

  })
})()