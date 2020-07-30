function updateHeadingFont(className) {
  const els = Array.from(document.getElementsByTagName("h1"))
  els.forEach(el => {
    el.className = className
  })
}

function updateBodyFont(className) {
  const els = Array.from(document.getElementsByTagName("p"))
  els.forEach(el => {
    el.className = className
  })
}

document.getElementById("select-heading-font").onchange = event => {
  updateHeadingFont(event.target.value)
}

document.getElementById("select-body-font").onchange = event => {
  updateBodyFont(event.target.value)
}

updateBodyFont("font-barlow")
updateHeadingFont("font-barlow")
