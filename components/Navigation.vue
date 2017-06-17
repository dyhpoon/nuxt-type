<template>
  <div>
    <nuxt-link exact to="/" class="logo">sup</nuxt-link>
    <nav>
      <h3 class="title">
        <nuxt-link exact to="/">home</nuxt-link>
        <nuxt-link to="/product">product</nuxt-link>
        <nuxt-link to="/contact">contact</nuxt-link>
        <span class="mid">____</span></h3>
      </nav>

      <svg class="dot-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.2 128.4" aria-labelledby="title">
        <title id="title">side navigation</title>
        <g id="one">
          <rect x="10.7" y="28.9" width="25.5" height="18.59" transform="translate(-9.7 -2.8) rotate(-0.4)" fill="rgba(255, 255, 255, 0)"/>
          <circle cx="13.6" cy="36.5" r="2.8" fill="rgba(255, 255, 255, 0)" stroke="#d1d3d4" stroke-miterlimit="10" stroke-width="0.75"/>
        </g>
        <g id="two">
          <rect x="2.2" y="45.6" width="24.5" height="12.76" fill="rgba(255, 255, 255, 0)"/>
          <circle cx="13.6" cy="52.8" r="2.8" fill="rgba(255, 255, 255, 0)" stroke="#d1d3d4" stroke-miterlimit="10" stroke-width="0.75"/>
        </g>
        <g id="three">
          <rect x="2.3" y="62.8" width="24.7" height="11.93" fill="rgba(255, 255, 255, 0)"/>
          <circle cx="13.6" cy="69" r="2.8" fill="rgba(255, 255, 255, 0)" stroke="#d1d3d4" stroke-miterlimit="10" stroke-width="0.75"/>
        </g>
        <g id="four">
          <rect x="9.9" y="82.5" width="24.7" height="11.93" transform="translate(35 174) rotate(180)" fill="rgba(255, 255, 255, 0)"/>
          <circle cx="13.6" cy="85.2" r="2.8" fill="rgba(255, 255, 255, 0)" stroke="#d1d3d4" stroke-miterlimit="10" stroke-width="0.75"/>
        </g>
        <!-- <g id="five">
          <rect x="9.9" y="98.9" width="24.5" height="12.76" transform="translate(34.9 207.5) rotate(180)" fill="rgba(255, 255, 255, 0)"/>
          <circle cx="13.6" cy="101.4" r="2.8" fill="rgba(255, 255, 255, 0)" stroke="#d1d3d4" stroke-miterlimit="10" stroke-width="0.75" opacity="0.48"/>
        </g>
        <g id="six">
          <rect x="9.5" y="112.7" width="25.5" height="18.59" transform="translate(36 240.8) rotate(179.6)" fill="rgba(255, 255, 255, 0)"/>
          <circle cx="13.6" cy="117.7" r="2.8" fill="rgba(255, 255, 255, 0)" stroke="#d1d3d4" stroke-miterlimit="10" stroke-width="0.75" opacity="0.48"/>
        </g> -->
    </svg>
    <div class="bottom-side-anchor"><span class="mid">__________</span></div>
  </div>
</template>

<style scoped>
  nav {
    width: 60px;
    background: black;
    height: 100vh;
    position: fixed;
    left: 0;
    z-index: 3000;
  }

  .title a {
    display: none;
  }

  .title a.nuxt-link-active {
    display: inline-block;
    color: white;
  }

  .logo {
    font-family: "montserrat", sans-serif;
    position: fixed;
    top: 10px; 
    right: 30px;
    font-size: 30px; 
    color: white;
    text-decoration: none;
    transition: 0.2s opacity ease;
    z-index: 5000;
    cursor: pointer;
  }

  .logo:hover {
    opacity: 0.8;
    transition: 0.25s opacity ease;
  }

  .title {
    font-family: "Montserrat", sans-serif;
    position: fixed;
    transform: rotate(-90deg);
    left: -32px;
    font-size: 20px;
    color: white;
    z-index: 6000;
    top: 60px;
  }

  .dot-nav {
    width: 40px;
    position: absolute;
    left: 10px;
    bottom: 0;
    z-index: 5000;
  }

  .bottom-side-anchor {
    position: absolute;
    right: -20px;
    bottom: 60px;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    z-index: 5000;
    color: black;
    font-weight: bold;
    font-family: 'montserrat', sans-serif;
  }
</style>
