<template>
  <div>
    <img class="moon" src="~assets/FullMoon2010.png" />
    <Navigation />
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '~components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style>
.moon {
  position: absolute;
  right: 0;
  top: 183px;
  width: 150px;
  z-index: 10;
}

@media screen and (max-width: 700px) {
  .moon {
    z-index: 0;
  }
}
</style>