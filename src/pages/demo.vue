<template>
  <div class="page">
    <section class="wrap-base grid">
      <z-button size="lg">Button</z-button>
      <z-button size="lg">Card</z-button>
      <z-button size="lg">Bar</z-button>
      <router-link to="/d/layout"><z-button size="lg">Layout</z-button></router-link>
    </section>
    <router-view/>
  </div>
</template>

<script>
import ZButton from '@/components/ZButton/0001/index'
export default {
  components: {
    ZButton
  }
}
</script>

<style lang="less">
@import '../components/style/zzj.less';
</style>
