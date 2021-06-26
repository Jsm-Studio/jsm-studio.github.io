class ScrollAnimator {
  /** @type {HTMLElement[]} */ #source
  #activeClassName
  constructor() {
    this.#source = []
    this.#activeClassName = "active"
    this.isScrolling = false
  }
  static animate(self) {
    if (self.isScrolling === false)
      requestAnimationFrame(() => {
        ScrollAnimator.animate(self); self.isScrolling = false
      });
    for (const target of self.source)
      if (isPartiallyVisible(target)) target.classList.add(self.activeClassName)
      else target.classList.remove(self.activeClassName);
    self.isScrolling = true
  }
  set activeClassName(name) { if ("string" === typeof name) this.#activeClassName = name }
  get activeClassName() { return this.#activeClassName }
  set source(source) { if (Array.isArray(source) || source instanceof NodeList) this.#source = [...source] }
  get source() { return this.#source.slice() }
}

function isPartiallyVisible(target) {
  let { top, bottom, height } = target.getBoundingClientRect()
  return (top + height >= 0) && (height + window.innerHeight >= bottom)
}
function isFullyVisible(target) {
  let { top, bottom } = target.getBoundingClientRect()
  return (top >= 0) && (bottom <= window.innerHeight)
}

/**
 * @param {Object} [config]
 * @param {HTMLElement} [config.scrollParent]
 * @param {HTMLElement[]} [config.sourceElements]
 * @param {string} [config.activeClassName]
 * @param {Function} [config.aftercallback]
 */
export default function scrollAnimation(config) {
  let scrollParent = window, scrollAnimator = new ScrollAnimator(), aftercallback = () => void 0;
  if ("object" === typeof config && config !== null) {
    if (config.scrollParent instanceof HTMLElement) scrollParent = config.scrollParent
    scrollAnimator.source = config.sourceElements
    scrollAnimator.activeClassName = config.activeClassName;
    if ("function" === typeof config.aftercallback) aftercallback = config.aftercallback
  }
  scrollParent.addEventListener(
    "scroll",
    e => { ScrollAnimator.animate(scrollAnimator); aftercallback(e) },
    false
  )
  ScrollAnimator.animate(scrollAnimator)
  aftercallback({ type: "scroll" })
}