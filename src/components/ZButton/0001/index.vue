<template>
  <div class="button-wrap">
    <button :class="[buttonClass]">
      <div class="icon">
        <img src="" alt="">
      </div>
      <div class="text">
        <div class="title">
          <slot name="default"></slot>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'z-button',
  props: {
    title: {
      type: String,
      default: () => 'TestButton'
    },
    type: {
      type: String,
      default: 'defalut'
    },
    size: {
      type: String,
      default: () => 'md'
    },
    shape: {
      type: String,
      default: () => 'square'
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {

    }
  },
  computed: {
    // iconClass textClass
    buttonClass: function () {
      let size = this.size.length > 0 ? this.size : 'md'
      let type = this.type.length > 0 ? this.type : 'defalut'
      let shape = this.shape.length > 0 ? this.shape : 'square'
      let buttonSize = `button--${size}`
      let buttonType = `button--${type}`
      let buttonShape = `button--${shape}`
      let buttonLoading = this.loading ? 'button--loading' : ''
      let buttonDisabled = this.disabled ? 'button--disabled' : ''
      return ['button', buttonSize, buttonType, buttonShape, buttonLoading, buttonDisabled]
    }
    // titleClass: function () {

    // }
  }
}
</script>

<style lang="less">
@import 'index.less';
</style>
