<template>
  <div class="demo--button">
    <h1>Button</h1>
    <hr>
    <section>
      <div class="text text--primary"></div>

      <h1>Size</h1>
      <div class="wrap-base grid">
        <z-button size="xs">xsxs</z-button>
        <z-button size="sm">smsm</z-button>
        <z-button size="md">mdmd</z-button>
        <z-button size="lg">lglg</z-button>
      </div>

      <h1>Type</h1>
      <div class="wrap-base grid">
        <z-button size="xs" type="default">default</z-button>
        <z-button size="xs" type="primary">primary</z-button>
        <z-button size="xs" type="info">info</z-button>
        <z-button size="xs" type="warring">warring</z-button>
        <z-button size="xs" type="danger">danger</z-button>
      </div>
      <div class="wrap-base grid">
        <z-button type="default">default</z-button>
        <z-button type="primary">primary</z-button>
        <z-button type="info">info</z-button>
        <z-button type="warring">warring</z-button>
        <z-button type="danger">danger</z-button>
      </div>
      <div class="wrap-base grid">
        <z-button size="lg" type="default">default</z-button>
        <z-button size="lg" type="primary">primary</z-button>
        <z-button size="lg" type="info">info</z-button>
        <z-button size="lg" type="warring">warring</z-button>
        <z-button size="lg" type="danger">danger</z-button>
      </div>

      <h1>Radius</h1>
      <div class="wrap-base grid">
        <z-button size="xs" type="primary">default</z-button>
        <z-button size="sm" type="primary">default</z-button>
        <z-button size="md" type="primary">default</z-button>
        <z-button size="lg" type="primary">default</z-button>
      </div>
      <div class="wrap-base grid">
        <z-button size="xs" type="primary" radius="round">round</z-button>
        <z-button size="sm" type="primary" radius="round">round</z-button>
        <z-button size="md" type="primary" radius="round">round</z-button>
        <z-button size="lg" type="primary" radius="round">round</z-button>
      </div>
      <div class="wrap-base grid">
        <z-button size="xs" type="primary" radius="pill">pillpillpill</z-button>
        <z-button size="sm" type="primary" radius="pill">pillpillpill</z-button>
        <z-button size="md" type="primary" radius="pill">pillpillpill</z-button>
        <z-button size="lg" type="primary" radius="pill">pillpillpill</z-button>
      </div>

      <h1>Shape</h1>
      <div class="wrap-base grid">
        <z-button size="xs" type="primary">default</z-button>
        <z-button size="sm" type="primary">default</z-button>
        <z-button size="md" type="primary">default</z-button>
        <z-button size="lg" type="primary">default</z-button>
      </div>
      <div class="wrap-base grid">
        <z-button size="xs" type="primary" shape="square">S</z-button>
        <z-button size="sm" type="primary" shape="square">S</z-button>
        <z-button size="md" type="primary" shape="square">S</z-button>
        <z-button size="lg" type="primary" shape="square">S</z-button>
      </div>
      <div class="wrap-base grid">
        <z-button size="xs" type="primary" shape="box">S</z-button>
        <z-button size="sm" type="primary" shape="box">S</z-button>
        <z-button size="md" type="primary" shape="box">S</z-button>
        <z-button size="lg" type="primary" shape="box">S</z-button>
      </div>
      <div class="wrap-base grid">
        <z-button size="xs" type="primary" shape="circle">S</z-button>
        <z-button size="sm" type="primary" shape="circle">S</z-button>
        <z-button size="md" type="primary" shape="circle">S</z-button>
        <z-button size="lg" type="primary" shape="circle">S</z-button>
      </div>

      <h1>Loading</h1>
      <div class="wrap-base grid">
        <z-button size="lg" type="primary" :loading="true">Loading</z-button>
      </div>

      <h1>Disabled</h1>
      <div class="wrap-base grid">
        <z-button size="lg" type="primary" :disabled="true">Disabled</z-button>
      </div>

    </section>
  </div>
</template>

<script>
import ZButton from '../../components/ZButton/0001/index'
export default {
  name: 'demo-button',
  data () {
    return {
      // info: {

      // }
    }
  },
  components: {
    ZButton
  }
}
</script>

<style lang="less">
@import 'index.less';

</style>
