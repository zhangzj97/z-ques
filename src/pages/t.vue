<template>
  <div class="page">
    <section class="warp-base col">
      <div>
        <input type="text" v-model="title">
        <div>{{ i18nTitle }}</div>
        <div>{{ title }}</div>
      </div>
    </section>
    <section class="warp-base grid">
    </section>
  </div>
</template>

<script>
export default {
  name: 't',
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

<style>

</style>
