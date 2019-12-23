<template>
  <div class="page">
    <section class="wrap-base col" v-show="isShowProfile">
      <div class="avatar">
        <img src="" alt="">
      </div>
      <div class="info">
        <div class="">用户名</div>
      </div>
    </section>
    <section class="wrap-base col" v-show="isShowLogin">
    </section>
    <div class="wrap-base row">
      <z-button-0001 size="lg" type="primary" @click.native="goBack" v-show="isShowCheckSurvey">Go Back</z-button-0001>
    </div>
    <section class="wrap-base col" v-show="isShowSurveyList">
      <z-card-0001
        ref="surveyCard0001"
        v-for="(v1, i1) of surveyList"
        :key=v1.id
        :surveyInfo=v1
        @click.native="checkSurvey(v1.id, i1)"
        v-show="checkSurveyId === 0 || v1.id === checkSurveyId"
      >
      </z-card-0001>
    </section>
    <section class="wrap-base col full" v-show="isShowChapter">
      <z-card-0003
        ref="surveyCard0003"
        v-for="(v1) of chapterList"
        :key=v1.id
        :info=v1
      >
        <z-card-0004
          ref="surveyCard0004"
          v-for="(v2) of v1.children"
          :key=v2.id
          :info=v2
          @click.native="startSurvey(v2.id)"
        ></z-card-0004>
      </z-card-0003>
    </section>
    <section class="wrap-base col" v-show="isShowComment">
      <z-card-0002
        ref="surveyCard0002"
        v-for="(v1) of commentList"
        :key=v1.id
        :commentInfo=v1
      ></z-card-0002>
    </section>
    <section class="wrap-base col" v-show="isShowQues">
      <z-card-0005
        v-for="(v1, i1) of quesList.ques"
        :key=v1.id
        :info=v1
        :countAll=quesList.ques.length
        :countFinished="i1 + 1"
        v-show="v1.id === startQuesId"
        @chooseNext="nextQues(v1.id, i1)  "
      >
        <div class="wrap-base row">
          <z-button-0001 size="lg" type="primary" @click.native="preQues(v1.id, i1)" v-show="i1 !== 0">上一题</z-button-0001>
          <z-button-0001 size="lg" type="primary" @click.native="nextQues(v1.id, i1)" v-show="i1 < quesList.ques.length - 1">下一题</z-button-0001>
          <z-button-0001 size="lg" type="primary" v-show="i1 === quesList.ques.length - 1">提交</z-button-0001>
        </div>
      </z-card-0005>
    </section>
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
      // Login
      isLogin: false,
      userInfo: {},
      // Survey List
      surveyList: [],
      // Survey Detail
      chapterList: [],
      commentList: [],
      // Ques
      quesList: [],
      // Other
      checkSurveyId: 0,
      checkSurveyIndex: 0,
      startSurveyId: 0,
      startQuesId: 0,
      // User State
      isShowSurveyList: true,

    }
  },
  computed: {
    isShowLogin: function () {
      return !isLogin
    },
    isShowChapter: function () {
      return !isShowSurveyList
    },
    isShowComment: function () {
      return !isShowSurveyList
    },
    isShowQues: function () {
      return !isShowSurveyList
    },
    isShowAnalysis: function () {

    },
    isShowCheckSurvey: function () {
      return this.checkSurveyId > 0
    },
    isStartSurvey: function () {
      return this.startSurveyId > 0
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
    // Check Survey Page Info
    checkSurvey: function (id, index) {
      if (this.checkSurveyId !== 0) {
        return false
      } else {
        this.checkSurveyId = id
        this.checkSurveyIndex = index
        this.$refs.surveyCard0001[this.checkSurveyIndex].checkDetail()
        this.getCommentList(id)
        this.getChapterList(id)
      }
    },
    // Go back to home.
    goBack: function () {
      this.$refs.surveyCard0001[this.checkSurveyIndex].checkList()
      this.checkSurveyId = 0
      this.startSurveyId = 0
      // console.log(123)
    },
    startSurvey: function (id) {
      this.startSurveyId = id
      this.startQuesId = this.quesList.ques[0].id
    },
    preQues: function (id, index) {
      this.startQuesId = this.quesList.ques[index - 1].id
    },
    nextQues: function (id, index) {
      if (index === this.quesList.ques.length - 1) {
        return false
      }
      this.startQuesId = this.quesList.ques[index + 1].id
    },
    // Axios
    async getSurveyList () {
      let {data: res} = await this.$http.get('/api/getSurveyList')
      this.surveyList = res.data
    },
    async getCommentList (id) {
      let {data: res} = await this.$http.post('/api/getCommentList', {
        id: id
      })
      this.commentList = res.data
    },
    async getChapterList (id) {
      let {data: res} = await this.$http.post('/api/getChapterList', {
        id: id
      })
      this.chapterList = res.data
    },
    async getQuesList (id) {
      let {data: res} = await this.$http.post('/api/getQuesList', {
        id: id
      })
      this.quesList = res.data
    }
  },
  mounted () {
    this.getQuesList(1)
    this.getSurveyList()
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
