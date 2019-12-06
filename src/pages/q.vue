<template>
  <div class="page">
    <button @click="showSurveyInfoList()">showSurveyInfoList</button>
    <div class="wrap">
      <z-card-0001
        ref="surveyCard0001"
        v-show="v1.id === showSurveyInfoId || showSurveyInfoId == 0"
        v-for="(v1, i1) of surveyInfoList"
        :key=v1.id
        :surveyInfo=v1
        @click.native="showSurveyInfo(v1.id, i1)"
      ></z-card-0001>
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
          avatar: '/static/T思修.png'
        }, {
          id: 2,
          title: '毛概选题库',
          subtitle: '高亮关键词语，引导选项，快速过完题库。',
          avatar: '/static/T毛概.png'
        }, {
          id: 3,
          title: '马原',
          subtitle: '高亮关思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库键词语，引导选项，快速过完题库。',
          avatar: '/static/T马原.png'
        }, {
          id: 4,
          title: '史纲史纲史纲史纲史纲史纲史纲',
          subtitle: '高亮关思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库思修精选题库键词语，引导选项，快速过完题库。',
          avatar: '/static/T史纲.png'
        }
      ],
      showSurveyInfoId: 0,
      showSurveyInfoIndex: 0
    }
  },
  components: {
    ZCard0001
  },
  methods: {
    // Show Survey Page Info
    showSurveyInfo: function (id, index) {
      if (this.showSurveyInfoId !== 0) {
        return false
      } else {
        this.showSurveyInfoId = id
        this.showSurveyInfoIndex = index
        this.$refs.surveyCard0001[this.showSurveyInfoIndex].checkDetail()
      }
    },
    // Show Survey List
    showSurveyInfoList: function () {
      this.$refs.surveyCard0001[this.showSurveyInfoIndex].checkList()
      this.showSurveyInfoId = 0
    }
  }
}
</script>

<style lang="less">

.wrap{
  >div{
    margin-top: 20px;
  }
}

</style>
