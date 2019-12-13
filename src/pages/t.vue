<template>
  <div class="t">
    <section class="wrap-base col">
      <div>
        <input type="text" v-model="title">
        <div>{{ i18nTitle }}</div>
        <div>{{ title }}</div>
      </div>
    </section>
    <h1>Layout</h1>
    <section class="wrap-base grid">
      <z-button size="xs">xs</z-button>
      <z-button size="sm">sm</z-button>
      <z-button size="md">md</z-button>
      <z-button size="lg">lg</z-button>
    </section>
    <section class="wrap-base col">
      <z-button size="xs">xs</z-button>
      <z-button size="sm">sm</z-button>
      <z-button size="md">md</z-button>
      <z-button size="lg">lg</z-button>
    </section>
    <section class="wrap-base row">
      <z-button size="xs">xs</z-button>
      <z-button size="sm">sm</z-button>
      <z-button size="md">md</z-button>
      <z-button size="lg">lg</z-button>
    </section>
  </div>
</template>

<script>
import ZButton from '@/components/ZButton/0001/index'
export default {
  name: 't',
  components: {
    ZButton
  },
  data () {
    return {
      title: '欢迎'
    }
  },
  computed: {
    i18nTitle: () => 'Welcome'
  },
  methods: {
    alert: function () {
      alert(this.title)
    }
  }
}
</script>

<style lang="less">
@import '../components/style/zzj.less';
</style>
