var bgEnd = document.querySelector('.bgEnd')
var space = document.querySelector('.space')
var astronaut = document.querySelector('.astronaut')
var offset = 0
var prev, scrolling, clock, scroll

const vw = document.body.clientWidth
const vh = document.body.clientHeight

function Layer(dom, opacity, nb, size, z) {
  this.dom = dom
  this.ctx = dom.getContext('2d')

  this.setSize = function() {
    this.dom.setAttribute('width', vw)
    this.dom.setAttribute('height', vh*5)
  }
  this.setColor = function() {
    this.ctx.fillStyle = `rgba(255,255,255,${opacity})`
  }
  this.translateZ = function() {
    this.dom.style.transform = `translateZ(${z}px)`
  }
  this.fillStars = function() {
    for (var i = 0; i < nb*5; i++) {
      var x = ((Math.floor(Math.random() * 1000) + 0) / 1000) * vw
      var y = ((Math.floor(Math.random() * 1000) + 0) / 1000) * vh*5
      this.ctx.fillRect(x, y, size, size)
    }
  }
  this.render = function() {
    this.setSize()
    this.setColor()
    this.translateZ()
    this.fillStars()
  }
}

const canvasBg = document.querySelector('#canvasBg')
cBg = new Layer(canvasBg, 0, 1, 0, 0)
cBg.setSize()
const bg = cBg.ctx.createLinearGradient(0, vh, vw/2, 0);
bg.addColorStop(0, '#00050A');
bg.addColorStop(1, '#001026');
cBg.ctx.fillStyle = bg
cBg.ctx.fillRect(0, 0, vw, vh)

// const canvasL1 = document.querySelector('#canvasL1')
// const c1 = new Layer(canvasL1, .8, 5, 4, 400)
// c1.render()
const canvasL2 = document.querySelector('#canvasL2')
const c2 = new Layer(canvasL2, .8, 10, 3, 300)
c2.render()

const canvasL3 = document.querySelector('#canvasL3')
const c3 = new Layer(canvasL3, 1, 25, 2, 200)
c3.render()

const canvasL4 = document.querySelector('#canvasL4')
const c4 = new Layer(canvasL4, .5, 50, 2, 100)
c4.render()

const canvasL5 = document.querySelector('#canvasL5')
const c5 = new Layer(canvasL5, .1, 100, 1.5, 0)
c5.render()

const canvasL6 = document.querySelector('#canvasL6')
const c6 = new Layer(canvasL6, .75, 100, 1.5, -100)
c6.render()

const canvasL7 = document.querySelector('#canvasL7')
const c7 = new Layer(canvasL7, .75, 150, 1, -200)
c7.render()

const canvasL8 = document.querySelector('#canvasL8')
const c8 = new Layer(canvasL8, .5, 150, 1, -300)
c8.render()

const canvasL9 = document.querySelector('#canvasL9')
const c9 = new Layer(canvasL9, .5, 1000, .5, -400)
c9.render()
// const canvasL10 = document.querySelector('#canvasL10')
// const c10 = new Layer(canvasL10, .25, 1000, .5, -500)
// c10.render()

window.addEventListener('scroll', () => {
  scrolling = true
  scroll = window.scrollY + offset
  space.style.perspectiveOrigin = `50vw ${scroll}px`
  checkEnd()
  window.clearTimeout(clock)
  clock = window.setTimeout(() => { scrolling = false }, 100)
})

var motionIV = window.setInterval(motion, 100)

function motion() {
  if (!scrolling) {
    offset += 1
    scroll = window.scrollY + offset
    space.style.perspectiveOrigin = `50vw ${scroll}px`
    checkEnd()
  }
}

const favicon = document.querySelector('link[rel="icon"]')

function checkEnd() {
  if (c9.dom.getBoundingClientRect().bottom < window.innerHeight) {
    bgEnd.classList.add('visible')
    favicon.setAttribute('href', 'assets/favicon2.png')
  } else {
    bgEnd.classList.remove('visible')
    favicon.setAttribute('href', 'assets/favicon.png')
  }
}
