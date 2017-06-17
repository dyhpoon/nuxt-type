<template>
  <div>
    <div class="container index">
      <div class="hero-img-contain">
        <!-- <img src="~assets/logo.png"> -->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 871 615" aria-labelledby="title" role="presentation">
          <defs>
            <clipPath id="clip-path" class="clipmove">
              <rect x="218" y="61" width="400" height="219" fill="none"/>
            </clipPath>
            <clipPath id="clip-path-2" class="clipmove">
              <rect x="425" y="167" width="331" height="422" fill="none"/>
            </clipPath>
            <clipPath id="clip-path-3" class="clipmove">
              <rect x="259" y="7" width="338" height="612" fill="none"/>
            </clipPath>
            <clipPath id="clip-path-4" class="clipmove">
              <rect x="34" y="58" width="423" height="482.98" fill="none"/>
            </clipPath>
          </defs>
          <title id="title" lang="en">Hero image with a girl and some blobs</title>
          <g id="blob3">
            <g clip-path="url(#clip-path)">
              <path class="blob" d="M238,116s32-79,187-37S594,186,594,186s28,57-85,77-217-33-217-33S204,182,238,116Z" transform="translate(-1 -1)" fill="#385aa9"/>
            </g>
          </g>
          <g id="blob2">
            <g clip-path="url(#clip-path-2)">
              <path class="blob" d="M656,198s113,35,87,175S657,567,608,580s-135,9-161-41-13-113,17-161,14-111,14-111-1-40,48-52S626,180,656,198Z" transform="translate(-1 -1)" fill="#ffcc05"/>
            </g>
          </g>
          <g id="imgclip">
            <g clip-path="url(#clip-path-3)">
              <image width="350" height="692" transform="translate(273 10) scale(0.87)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="~assets/hero-img-smaller.png"></image>
            </g>
          </g>
          <g id="blob1">
            <g clip-path="url(#clip-path-4)">
              <path class="blob" d="M207,166s49-17,95-67c24-27,76-56,114-1s62,233-13,346S158,554,94,470,16,316,93,226C93,226,126,190,207,166Z" transform="translate(-1 -1)" fill="#0185b2" opacity="0.7"/>
            </g>
          </g>
        </svg>
      </div>
      <div class="hero-text">
        <div>
          <h1>Lorem Ipsum Dolor</h1>
          <h2>Secondary title goes here yep</h2>
        </div>
      </div>

      <nuxt-link to="/product"><ArrowRight /></nuxt-link>
    </div>
    <About />
  </div>
</template>

<script>
import { TweenMax, Sine, Circ } from 'gsap'
import ArrowRight from '~components/ArrowRight.vue'
import About from '~components/About.vue'

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      console.log('enter from index')
      TweenMax.from(el, 0.7, {
        x: -400,
        opacity: 0,
        ease: Circ.easeOut
      })
      TweenMax.staggerFrom('.clipmove rect', 0.8, {
        opacity: 0,
        x: '-100%',
        ease: Circ.easeOut
      }, 0.1)
      done()
    },
    leave (el, done) {
      let tl = new TimelineMax({ onComplete: done }),
          spt = new SplitText('h1', {type: 'chars' }), 
          chars = spt.chars;

      TweenMax.set(chars, {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      })

      tl.add('start')
      tl.staggerTo(chars, 0.8, {
        z: -1000,
        rotationY: 360,
        opacity: 0.5,
        ease: Sine.easeOut
      }, 0.03, 'start')
      tl.to(el, 0.8, {
        x: 300,
        opacity: 0,
        ease: Sine.easeIn
      }, 'start+=0.4')
      tl.staggerTo('.clipmove rect', 0.8, {
        opacity: 0,
        x: '200%',
        ease: Sine.easeIn
      }, 0.1, 'start+=0.4')
      console.log('leave from index')
      console.log(el)
    }
  },
  components: {
    ArrowRight,
    About
  }
}
</script>

<style scoped>
  .hero-img-contain {
    width: 90vw;
    height: 90vh;
    margin-left: 2vw;
    position: absolute;
    top: 0;
  }

  .container {
    background: #fd5e1c;
    position: relative;
  }

  .hero-text {
    position: relative;
    z-index: 3000;
    text-align: center;
    top: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -120px;
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    color: black;
    font-size: 20px;
    text-transform: uppercase;
  }
</style>
