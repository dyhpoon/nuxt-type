<template>
  <div class="container index">
    <section>
      <Mount1 />

      <div class="letter-contain">
        <LetterT />
      </div>

      <div class="font-text">
        <h1>Playfair Serif</h1>
        <p>Edison bulb wolf humblebrag, chambray skateboard tbh shoreditch four loko unicorn semiotics. Hammock banh mi chillwave, brunch before they sold out roof party fixie prism ramps blog. Ramps yr four dollar toast hammock street art swag lyft, meggings schlitz chicharrones offal vegan selvage normcore. Hot chicken distillery keytar, ennui adaptogen heirloom ramps viral kombucha. Cardigan 8-bit.</p>
        <nuxt-link to="/prata"><button class="next slide">Next up: Prata</button></nuxt-link>
      </div>
    </section>

    <PhotoArea>
      <img class="photo" src="~assets/photo-boat.jpg" width="100%"/>
    </PhotoArea>

  </div><!--container-->
</template>

<script>
import { TimelineMax, Sine, Circ } from 'gsap'
import LetterT from '~components/letters/LetterT.vue'
import Mount1 from '~components/mountains/Mount1.vue'
import PhotoArea from '~components/PhotoArea.vue'

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      console.log('enter from index')
      let tl = new TimelineMax({ onComplete: done }),
          spt = new SplitText('h1', {type: 'chars' }), 
          chars = spt.chars,
          isChrome = !!window.chrome && !!window.chrome.webstore;

      TweenMax.set(chars, {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      })

      tl.add('start')
      tl.from(el, 0.8, {
        scale: 0.9,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut
      }, 'start')
      if (isChrome) {
        tl.staggerFrom('.maplines g path', 0.8, {
          rotation: 45,
          opacity: 0.2,
          scale: 0.5,
          transformOrigin: '50% 50%',
          ease: Sine.easeOut
        }, -0.003, 'start')
      } else {
        tl.from('.mount', 0.8, {
          rotation: 45,
          opacity: 0.2,
          scale: 0.5,
          transformOrigin: '50% 50%',
          ease: Sine.easeOut
        }, 'start')
      }
      tl.staggerFrom('#lines g line, #lines g path, #circles circle', 0.8, {
        scale: 0,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut
      }, 0.01, 'start')
      tl.from('#t', 1, {
        opacity: 0,
        ease: Sine.easeInOut
      }, 'start+=0.5')
      tl.staggerFrom(chars, 0.8, {
        z: -100,
        rotationY: 180,
        opacity: 0.5,
        ease: Sine.easeOut
      }, 0.03, 'start')
      tl.staggerFrom('section.photo-area div', 1, {
        opacity: 0,
        ease: Sine.easeOut
      }, 0.25, 'start+=0.25')
    },
    leave (el, done) {
      console.log('leave from index')
      let tl = new TimelineMax({ onComplete: done }),
      isChrome = !!window.chrome && !!window.chrome.webstore;

      TweenMax.set('h1', {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      })

      tl.add('leave')
      tl.to(el, 0.8, {
        scale: 0.9,
        opacity: 0,
        transformOrigin: '50% 50%',
        ease: Sine.easeIn
      }, 'leave')
      if (isChrome) {
        tl.staggerTo('.maplines g path', 0.8, {
          rotation: -45,
          opacity: 0.2,
          scale: 0.5,
          transformOrigin: '50% 50%',
          ease: Sine.easeIn
        }, 0.003, 'leave')
      } else {
        tl.to('.mount', 0.8, {
          rotation: -45,
          opacity: 0.2,
          scale: 0.5,
          transformOrigin: '50% 50%',
          ease: Sine.easeIn
        }, 'leave')
      }
      tl.staggerFrom('#lines g line, #lines g path, #circles circle', 0.8, {
        scale: 0,
        transformOrigin: '50% 50%',
        ease: Sine.easeIn
      }, 0.01, 'leave')
      tl.from('#t', 1, {
        opacity: 0,
        ease: Sine.easeInOut
      }, 'leave+=0.5')
      tl.to('h1', 0.75, {
        opacity: 0,
        z: -100,
        rotationY: 180,
        scale: 0.5,
        transformOrigin: '50% 50%',
        ease: Sine.easeIn
      }, 'leave')
      tl.timeScale(1.5)
    }
  },
  components: {
    Mount1,
    PhotoArea,
    LetterT
  }
}
</script>

<style scoped>
  @media screen and (min-width: 801px) {
    h1 {
      font-family: 'Playfair', serif;
      font-size: 50px;
    }
  } 
  @media screen and (max-width: 800px) {
    h1 {
      font-family: 'Playfair', serif;
      font-size: 45px;
    }
  }
</style>
