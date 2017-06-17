<template>
  <div>
    <div class="container product">
      <h1 ref="h1">This is the product page</h1>
      <p><nuxt-link to="/">Home page</nuxt-link></p>
    </div>
  </div>
</template>

<script>
import { TweenMax, Sine, Circ } from 'gsap'

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      console.log('enter from product')
      TweenMax.from(el, 1, {
        x: -300,
        opacity: 0,
        ease: Sine.easeOut
      })
      done()
    },
    leave (el, done) {
      console.log(el)
      TweenMax.to(el, 1, {
        x: 300,
        opacity: 0,
        ease: Circ.easeIn
      })
      TweenMax.staggerTo('.clipmove rect', 0.8, {
        opacity: 0,
        x: '200%',
        ease: Circ.easeIn
      }, 0.1)
      console.log('leave from product')
      done()
    }
  }
}
</script>
