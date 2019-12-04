<template>
  <div class="z-card--0001">
    <div class="backgroud">
      <div class="thumb">
        <img :src=surveyInfo.avatar :alt=surveyInfo.title />
      </div>
      <div class="header">
        <div class="title">{{ surveyInfo.title }}</div>
        <div class="subtitle">{{ surveyInfo.subtitle }}</div>
      </div>
    </div>
    <div class="flag"></div>
  </div>
</template>

<script>
export default {
  name: 'ZQues',
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
    }
  }
}
</script>

<style lang="less">
@import './style/zzj.less';

@title-color: @gray-8;
@subtitle-color: @gray-6;
@desc-color: @gray-7;

@t1: @cyan-9;
@t2: @cyan-8;
@t3: @cyan-7;
@t4: @cyan-6;
@t5: @cyan-5;

.bgc(@c){
  background-color: @c;
}
.card(){
  border-radius: 8px;
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, .05), 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .05)
}
.flex-center(){
  display: flex;
  justify-content: center;
  align-items: center;
}

.z-card--0001{
  width: 100%;
  display: flex;
  flex-flow: row-reverse nowrap;

  .backgroud{
    width: 80%;
    padding: 8px 8px 8px 0;
    // flex
    display: flex;
    flex-flow: row nowarp;
    justify-content: space-around;
    align-items: center;

    border-radius: 15px;
    .card();
    .bgc(@t2);

    .thumb{
      margin-right: -50px;
      position: relative;
      left: -50px;
      width: 88px;
      height: 88px;
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
    right: 0;
  }

}
</style>
