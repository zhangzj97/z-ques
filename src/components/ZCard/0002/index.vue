<template>
  <div class="z-card--0002 animated bounceInRight"
    ref="zcard0002"
  >
    <div class="card" ref="card">
      <div class="backgroud" ref="backgroud">
        <img
          ref="backgroundimg"
        >
      </div>
      <div class="thumb animated rotateIn" ref="thumb">
        <img
          :src="commentInfo.author.avatar"
          :alt="commentInfo.author.nickname"
          ref="thumbimg"
        >
      </div>
      <div class="box" ref="box">
        <div class="nickname" ref="nickname">{{ commentInfo.author.nickname }}</div>
        <div class="text" ref="text">{{ commentInfo.content }}</div>
        <div class="footer" ref="footer">
          <div class="time" ref="time">{{ commentInfo.publish_time }}</div>
        </div>
      </div>
    </div>
    <div class="flag" ref="flag"></div>
  </div>
</template>

<script>
import Animate from 'animate.css'

export default {
  name: 'z-card--0002',
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {
          id: 1,
          content: 'ABC',
          publish_time: '2020-09-08 16:09:08',
          author: {
            id: 2,
            nickname: 'AAA',
            avatar: '/'
          }
        }
      }
    }
  },
  data () {
    return {
      show: 1
    }
  },
  component: {
    Animate
  }
}
</script>

<style lang="less">
@import 'index.less';
</style>
