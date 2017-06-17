<template>
  <svg class="arrow-right" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
    <title id="title">
      Arrow Right
    </title>
    <g>
      <path class="arrow-stroke" fill="none" stroke="#202020" stroke-width="3" d="M1.5 1.5H40.5V40.5H1.5z"/>
      <path class="arrow-cover" fill="#202020" d="M1.5 1.5H40.5V40.5H1.5z" />
      <path class="arrow" fill="#000" fill-rule="nonzero" transform="matrix(-1 0 0 1 44 0)" d="M18.96 20.47L18 21.5 18.96 22.53 24.07 28 26 25.93 21.85 21.5 26 17.07 24.07 15z"/>
    </g>
  </svg>
</template>

<style scoped>
  .arrow-right {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 75vh;
    right: 35vw;
    z-index: 5000;
  }
  .arrow-cover {
    transform: translateX(-100%);
  }
</style>
