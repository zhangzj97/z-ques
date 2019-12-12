<template>
  <div class="page">
    <div class="action-wrap">
      <z-button-0001>下一题</z-button-0001>
      <z-button-0001>收藏</z-button-0001>
    </div>
    <div class="ques-wrap">
      <z-card-0005
        v-for="(v1) of quesInfo.ques"
        :key=v1.id
        :info=v1
      ></z-card-0005>
    </div>
    <button @click="showSurveyInfoList()">showSurveyInfoList</button>
    <div class="survey-wrap">
      <z-card-0001
        ref="surveyCard0001"
        v-show="v1.id === showSurveyInfoId || showSurveyInfoId === 0"
        v-for="(v1, i1) of surveyInfoList"
        :key=v1.id
        :surveyInfo=v1
        @click.native="showSurveyInfo(v1.id, i1)"
      ></z-card-0001>
    </div>
    <div class="chapter-wrap">
      <z-card-0003
        ref="surveyCard0003"
        v-show="showSurveyInfoId !== 0"
        v-for="(v1) of chapterList"
        :key=v1.id
        :info=v1
      >
        <z-card-0004
          ref="surveyCard0004"
          v-for="(v2) of v1.children"
          :key=v2.id
          :info=v2
        ></z-card-0004>
      </z-card-0003>
    </div>
    <div class="comment-wrap">
      <z-card-0002
        ref="surveyCard0002"
        v-show="showSurveyInfoId !== 0"
        v-for="(v1) of commentList"
        :key=v1.id
        :commentInfo=v1
      ></z-card-0002>
    </div>
  </div>
</template>

<script>
import ZCard0001 from '@/components/ZCard/0001/index'
import ZCard0002 from '@/components/ZCard/0002/index'
import ZCard0003 from '@/components/ZCard/0003/index'
import ZCard0004 from '@/components/ZCard/0004/index'
import ZCard0005 from '@/components/ZCard/0005/index'
import ZButton0001 from '@/components/ZButton/0001/index'

export default {
  data () {
    return {
      surveyInfoList: [],
      commentList: [],
      chapterList: [],
      quesInfo: [],
      showSurveyInfoId: 0,
      showSurveyInfoIndex: 0
    }
  },
  components: {
    ZCard0001,
    ZCard0002,
    ZCard0003,
    ZCard0004,
    ZCard0005,
    ZButton0001
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
        this.getComment(id)
        this.getChildren(id)
      }
    },
    // Show Survey List
    showSurveyInfoList: function () {
      this.$refs.surveyCard0001[this.showSurveyInfoIndex].checkList()
      this.showSurveyInfoId = 0
    },
    // Axios
    async getSurveyInfoList () {
      let {data: res} = await this.$http.get('/api/getSurveyInfoList')
      this.surveyInfoList = res.data
    },
    async getComment (id) {
      let {data: res} = await this.$http.post('/api/getComment', {
        id: id
      })
      this.commentList = res.data
    },
    async getChildren (id) {
      let {data: res} = await this.$http.post('/api/getChildren', {
        id: id
      })
      this.chapterList = res.data
    },
    async getQues (id) {
      let {data: res} = await this.$http.post('/api/getQues', {
        id: id
      })
      this.quesInfo = res.data
    }
  },
  mounted () {
    this.getQues(1)
    this.getSurveyInfoList()
  }
}
</script>

<style lang="less">
.survey-wrap{
  >div{
    margin-top: 20px;
  }
}

.comment-wrap{
  >div{
    margin-top: 0px;
  }
  >div:first-child{
    margin-top: 20px;
  }
}

.chapter-wrap{
  >div{
    margin-top: 10px;
  }
  >div:first-child{
    margin-top: 20px;
  }
}
.action-wrap{
  display: flex;
}
</style>
