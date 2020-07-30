/**
 * For each element having class `targetClass`, removes classes beginning with
 * "font-" and adds the given `fontClassName`.
 *
 */
function updateFonts(targetClass, fontClassName) {
  const els = Array.from(document.getElementsByClassName(targetClass))
  els.forEach(el => {
    el.classList.forEach(c => {
      if (c.startsWith("font-"))
        el.classList.remove(c)
    })
    el.classList.add(fontClassName)
  })
}

document.getElementById("select-heading-font").onchange = event => {
  updateFonts("has-heading-font", event.target.value)
}

document.getElementById("select-body-font").onchange = event => {
  updateFonts("has-body-font", event.target.value)
}

//# initialize
updateFonts("has-heading-font", "font-barlow")
updateFonts("has-body-font", "font-barlow")
