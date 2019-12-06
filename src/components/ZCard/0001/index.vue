<template>
  <div class="z-card--0001"
    ref="zcard0001"
  >
    <div class="card" ref="card">
      <div class="background" ref="background">
        <transition name="background-img">
          <img ref="backgroundimg"
            :src=surveyInfo.avatar
            :alt=surveyInfo.title
            v-if="show"
          />
        </transition>
      </div>
      <div class="thumb" ref="thumb">
        <transition name="thumb-img">
          <img ref="thumbimg"
            :src=surveyInfo.avatar
            :alt=surveyInfo.title
            v-if="show"
          />
        </transition>
      </div>
      <div class="header" ref="header">
        <transition name="title-drop">
          <div class="title" v-if="show" ref="title">{{ surveyInfo.title }}</div>
        </transition>
        <transition name="title-drop">
          <div class="subtitle" v-if="show" ref="subtitle">{{ surveyInfo.subtitle }}</div>
        </transition>
        <button style="display: none" @click="checkDetail()">checkDetail</button>
        <button style="display: none" @click="checkList()">checkList</button>
      </div>
    </div>
    <div class="flag" ref="flag"></div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: 'z-card--0001',
  // model: {

  // },
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
    checkDetail: function () {
      let velocityOpt0 = {duration: 0}
      let velocityOpt4 = {duration: 400}
      // let velocityOpt8 = {duration: 800}

      // Animation
      // 1. zcard0001
      // 2. card
      // 3. thumb
      // 4. title

      // 1. zcard0001
      Velocity(this.$refs.zcard0001, {
        justifyContent: 'center'
      }, velocityOpt4)

      // 2.card
      Velocity(this.$refs.card, {
        flexFlow: 'column nowrap',
        width: '100%'
      }, velocityOpt4)
      // [IMPORTANT] CARD'width is calc(100%), 100% -> 0% -> 80%, but not 100% -> 80%
      Velocity(this.$refs.card, {
        paddingRight: 0,
        width: '100%'
      }, velocityOpt0)
      Velocity(this.$refs.card, {
        marginTop: 100,
        width: '80%'
      }, velocityOpt4)

      // 3.thumb
      Velocity(this.$refs.thumb, {
        width: 0,
        height: 0,
        // Go right
        left: 100,
        opacity: 0
      }, velocityOpt4)
      // Ready
      Velocity(this.$refs.thumb, {
        // Center
        marginRight: 0,
        left: 0
      }, velocityOpt0)
      Velocity(this.$refs.thumb, {
        width: '270px',
        height: '270px',
        top: -130,
        marginBottom: -130,
        // [IMPORTANT] If marginRight is 0, there will not be marginRight is style
        marginRight: 0.1,
        opacity: 1
      }, velocityOpt4)

      // 4. title
      Velocity(this.$refs.title, {
        fontSize: 30,
        marginBottom: 10
      }, {
        duration: 400
      })
      Velocity(this.$refs.title, {
        fontSize: 24
      }, {
        duration: 400
      })
    },
    checkList: function () {
      let velocityOpt0 = {duration: 0}
      let velocityOpt4 = {duration: 400}
      // let velocityOpt8 = {duration: 800}

      // Animation
      // 1. zcard0001
      // 2. card
      // 3. thumb
      // 4. title

      // 1. zcard0001
      Velocity(this.$refs.zcard0001, {
        justifyContent: 'flex-start'
      }, velocityOpt4)

      // 2.card
      Velocity(this.$refs.card, {
        marginTop: 0,
        flexFlow: 'row nowrap',
        width: '100%',
        paddingRight: 8
      }, velocityOpt4)
      // [IMPORTANT] CARD'width is calc(100%), 100% -> 0% -> 80%, but not 100% -> 80%
      // When reserve we can ignore.
      // Velocity(this.$refs.card, {
      //   width: '100%'
      // }, velocityOpt0)
      Velocity(this.$refs.card, {
        width: '80%'
      }, velocityOpt4)

      // 3.thumb
      Velocity(this.$refs.thumb, {
        width: 0,
        height: 0,
        // Go Bottom
        top: 0,
        marginBottom: 0,
        opacity: 0
      }, velocityOpt4)
      // Ready
      Velocity(this.$refs.thumb, {
        marginBottom: 0,
        marginRight: 0,
        left: 100
      }, velocityOpt0)
      Velocity(this.$refs.thumb, {
        width: '100px',
        height: '100px',
        left: -66,
        marginRight: -80,
        opacity: 1
      }, velocityOpt4)

      // 4. title
      Velocity(this.$refs.title, {
        fontSize: 18,
        marginBottom: 0
      }, {
        duration: 800
      })
    }
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
@import 'index.less';
</style>
