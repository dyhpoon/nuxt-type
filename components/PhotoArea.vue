<template>
  <section class="photo-area">
    <div class="photo-contain">
      <slot></slot>
    </div>
    <div class="photo-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil hic, earum quae fugit, blanditiis nulla ad dolorem dolor explicabo fuga unde ullam rerum voluptatem facilis, inventore ducimus dignissimos dolores fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    </div>
  </section>
</template>


<script>
  export default {

  }
</script>

<style scoped>
  .photo-contain {
    margin-right: 100px;
    width: 35%;
  }

  .photo-text {
    width: 25%;
  }

  .photo {
    border: 1px solid #333;
  }

  section.photo-area {
    margin: 100px 0;
  }
</style>