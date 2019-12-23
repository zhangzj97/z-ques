<template>
  <div class="z-card--0003" ref="zcard0003">
    <div class="card">
      <div class="header" @click="switchBox()">
        <div
          class="process"
          :style="perFinished"
        >
          <img
          >
        </div>
        <div class="thumb">
          <img
            :src="info.avatar"
            :alt="info.title"
          >
        </div>
        <div class="text">
          <div class="title">{{ info.title }}</div>
        </div>
        <div class="action">
          <div class="subtext">{{ info.user_count.finished }} / {{ info.count }}</div>
          <div class="switch" ref="switch"><span class="iconfont icon-next"></span></div>
        </div>
      </div>
      <div class="box"
        ref="box"
        v-show=show
      >
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: 'z-card--0003',
  props: {
    info: {
      type: Object,
      default () {
        return {
          id: '22',
          pid: '2',
          title: 'AAA',
          count: '10',
          avatar: '/',
          children: [
            {
              id: '222',
              title: 'BBB',
              count: '10',
              user_count: {
                finished: '8'
              }
            }
          ],
          user_count: {
            finished: '8'
          }
        }
      }
    }
  },
  data () {
    return {
      show: true,
      boxHeight: 0
    }
  },
  computed: {
    perFinished: function () {
      let perFinished = this.info.user_count.finished / this.info.count
      return {
        width: perFinished * 100 + '%'
      }
    }
  },
  methods: {
    switchBox: function () {
      let maxHeight = !this.show
        ? this.boxHeight
        : 0
      let paddingTop = !this.show ? 20 : 0
      let opacity = !this.show ? 1 : 0
      Velocity(this.$refs.box, {
        maxHeight,
        paddingTop,
        opacity
      }, {
        duration: 400,
        begin: () => {
          if (maxHeight > 0) {
            this.show = !this.show
          }
        },
        complete: () => {
          if (maxHeight === 0) {
            this.show = !this.show
          }
        }
      })
      console.log(this.show, maxHeight)
    }
  },
  mounted () {
    this.boxHeight = this.$refs.box.offsetHeight
    Velocity(this.$refs.box, {
      maxHeight: 0
    }, {
      duration: 0
    })
    this.show = false
  }
}
</script>

<style lang="less">
@import '../../style/var.less';
@import '../../style/zzj.less';

.z-card--0003{
  display: flex;
  flex-flow: column nowrap;
  .mian-css();

  >.card{
    // [IMPORTANT]
    padding: 8px 8px 8px 8px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    // [IMPORTANT]
    // position: relative;
    .card();

    >.header{
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      position: relative;

      >.process{
        display: block;
        height: 46px;
        position: absolute;
        top: -8px;
        left: -8px;
        border-radius: 8px;
        z-index: -1;
        overflow: hidden;
        background-color: aquamarine;

        >img{
          opacity: .6;
        }
      }

      >.thumb{
        width: 30px;
        min-width: 30px;
        height: 30px;
        overflow: hidden;
        .flex-center();
        .circle();

        img{
          width: 100%;
          height: 100%;
        }
      }

      >.text{
        margin-left: 20px;

        >.title{
          color: @title-color;
          font-size: @font-size-md;
        }
      }

      >.action{
        display: flex;
        position: absolute;
        right: 10px;
        top: 40%;

        >.subtext{
          color: @subtitle-color;
          font-size: @font-size-md;
          color: @gray-6;
        }
        // .switch{

        // }
      }
    }
    >.box{
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding-top: 20px;
      overflow: hidden;

      >div{
        margin-top: 20px;
      }
    }
  }
}
</style>
