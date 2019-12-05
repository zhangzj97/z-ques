<template>
  <div class="z-card--0001" ref="zcard0001" @click="test1($event)">
    <div class="card">
      <div class="background">
        <transition name="background-img">
          <img
            :src=surveyInfo.avatar
            :alt=surveyInfo.title
            v-if="show"
          />
        </transition>
      </div>
      <div class="thumb">
        <transition name="thumb-img">
          <img
            :src=surveyInfo.avatar
            :alt=surveyInfo.title
            v-if="show"
          />
        </transition>
      </div>
      <div class="header">
        <transition name="title-drop">
          <div class="title" v-if="show">{{ surveyInfo.title }}</div>
        </transition>
        <transition name="title-drop">
          <div class="subtitle" v-if="show">{{ surveyInfo.subtitle }}</div>
        </transition>
        <button @click="test1()">Test1</button>

        <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
        >
          <p v-if="show">
            Demo
          </p>
        </transition>

      </div>
    </div>
    <div class="flag"></div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: 'z-card--0001',
  props: {
    'surveyInfo': {
      type: Object,
      default () {
        return {
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575465346242&di=f895ff04f6ad33324f81bb209b2b71be&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F2j%2Feh%2FQJ9114545083.jpg%3Fx-oss-process%3Dstyle%2Fshow',
          title: '虎狼之词题库',
          subtitle: '难道这就是你分手的借口，如果给你重新来过，你会不会爱我。'
        }
      }
    },
    'surveyCount': {
      type: Object,
      default () {
        return {
          rate: 4.5,
          ques: 100,
          sale: 323
        }
      }
    }
  },
  data () {
    return {
      show: 0
    }
  },
  methods: {
    test1: function (a) {
      console.log(this.$refs.zcard0001, arguments, Velocity)
      Velocity(this.$refs.zcard0001, {
        opacity: 0.1
      }, {
        duration: 600
      })
    },

  },
  computed: {
    backgroundImage: function () {
      return {
        background: 'linear-gradient(to right, rgba(255,255,255,.9) 100px, rgba(255,255,255,.5)), url(' + this.surveyInfo.avatar + ') no-repeat'
      }
    }
  },
  mounted () {
    this.show = !this.show
  }
}
</script>

<style lang="less">
@import '../../style/zzj.less';

.z-card--0001{
  // [IMPORTANT] Why row-reverse?
  // [IMPORTANT] Card's width is 80%. If to be row, the 20% will be wrong.
  display: flex;
  flex-flow: row-reverse nowrap;
  .mian-css();

  // Card contain the Title Text, Thumb-Img, Backgroud-Img.
  .card{
    // [IMPORTANT] Why is 80% but not 100%?
    // [IMPORTANT] Avatar Img put OUTSIDE but not contained by card in sign.
    width: 80%;
    // Make Title NOT TOO CLOSE to Card border
    padding: 8px 8px 8px 0;
    // flex
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    // [IMPORTANT] Make BACKGROUD-IMG to be absolute.
    position: relative;
    // add Card style.
    .card();

    .background{
      // [IMPORTANT] img instead of backgroud-image
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      // Card border-radius
      border-radius: 8px;
      // Backgroud Img
      z-index: -1;
      overflow: hidden;

      img{
        // Backgroud image postion, size, and filter
        width: 400%;
        position: absolute;
        top: -100px;
        right: -200px;
        filter: blur(2px);
        // [IMPORTANT] Vue animation opacity has some wrong.
        opacity: .6;
      }
    }

    .thumb{
      // [IMPORTANT] Thumb is a div outside card.
      margin-right: -50px;
      position: relative;
      left: -50px;
      width: 88px;
      height: 88px;
      overflow: hidden;
      .flex-center();

      img{
        width: 80%;
        height: 80%;
      }
    }

    .header{
      width: 200px;
      min-height: 88px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;

      .title{
        color: @title-color;
        font-size: @font-size-lg;
      }
      .subtitle{
        color: @subtitle-color;
        font-size: @font-size-md;
      }
    }
  }
  .flag{
    width: 15px;
    position: relative;
    top: 0;
  }
}

.thumb-img{
  &-enter, &-leave-to{
    opacity: 0;
    transform: translateX(50px);
  }
  &-enter-active, &-leave-active{
    transition: all .8s ease-in-out;
  }
  &-enter-to, &-leave{
    opacity: 1;
  }
}
.background-img{
  &-enter{
    opacity: 0;
    transform: translate(500px, 100px);
  }
  &-leave-to{
    opacity: 0;
    transform: translate(900px);
  }
  &-enter-active, &-leave-active{
    transition: all  .8s ease-in-out;
  }
  &-enter-to, &-leave{
    opacity: .6;
  }
}
.title-drop{
  &-enter{
    opacity: 0;
    transform: translateY(-10px);
  }
  &-leave-to{
    opacity: 0;
    transform: translateY(10px);
  }
  &-enter-active, &-leave-active{
    transition: all  .8s ease-in-out;
  }
  &-enter-to, &-leave{
    opacity: 1;
  }
}

</style>
