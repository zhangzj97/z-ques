<template>
  <div class="page">
    <div class="wrap">
      <div v-for="v1 of surveyInfoList" :key=v1.id>
        <z-card-0001
          :surveyInfo=v1
        ></z-card-0001>
      </div>
    </div>
  </div>
</template>

<script>
import ZCard0001 from '@/components/ZCard/0001/index'

export default {
  data () {
    return {
      surveyInfoList: [
        {
          id: 1,
          title: '思修题库',
          subtitle: '原版题库',
          avatar: '@/assets/logo.png'
        }, {
          id: 2,
          title: '思修精选题库',
          subtitle: '高亮关键词语，引导选项，快速过完题库。',
          avatar: '/static/思修_avtar.png'
        }, {
          id: 3,
          title: '思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库',
          subtitle: '高亮关思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库键词语，引导选项，快速过完题库。',
          avatar: '/static/思修_avtar.png'
        }
      ]
    }
  },
  components: {
    ZCard0001
  }

}
</script>

<style>

</style>
