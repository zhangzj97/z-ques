<template>
  <div class="button-wrap">
    <button :class="[buttonClass]" :disabled=" disabled === true ? true : false">
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
    radius: {
      type: String,
      default: () => ''
    },
    shape: {
      type: String,
      default: () => ''
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
      let buttonSize = this.size.length > 0 ? `button--${this.size}` : 'button--md'
      let buttonType = this.type.length > 0 ? `button--${this.type}` : 'button--default'
      let buttonRadius = this.radius.length > 0 ? `button--${this.radius}` : ''
      let buttonShape = this.shape.length > 0 ? `button--${this.shape}` : ''
      let buttonLoading = this.loading === true ? `button--loading` : ''
      let buttonDisabled = this.disabled === true ? `button--disabled` : ''
      return ['button', buttonSize, buttonType, buttonRadius, buttonShape, buttonLoading, buttonDisabled]
    }
    // titleClass: function () {

    // }
  }
}
</script>

<style lang="less">
@import 'index.less';
</style>
