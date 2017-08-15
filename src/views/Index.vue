<template>
  <div class="page-main">
    <image-box></image-box>
  </div>
</template>

<script>
import ImageBox from '../components/ImageBox/Index.vue'
export default {
  data () {
    return {
      
    }
  },
  components: {
    ImageBox
  }
}
</script>

<style lang="scss">
.page {
  width: 100%;
  color: $color-default;
  // @include flex();
}
</style>


