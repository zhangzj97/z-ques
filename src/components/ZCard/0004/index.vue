<template>
  <div class="z-card--0004">
    <div class="card">
      <div
        class="process"
        :style="perFinished"
      >
        <img src="" alt="">
      </div>
      <div class="text">
        <div class="title">{{ info.title }}</div>
      </div>
      <div class="action">开始</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-card--0004',
  props: {
    info: {
      type: Object,
      default () {
        return {
          id: '222',
          title: 'BBB',
          count: '10',
          user_count: {
            finished: '8'
          }
        }
      }
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
  data () {
    return {
      show: true,
      boxHeight: 0
    }
  }
}
</script>

<style lang="less">
@import '../../style/var.less';
@import '../../style/zzj.less';

.z-flex-base(@flex-direction: row,  @flex-wrap: nowrap, @justify-content: flex-start, @align-items: center){
  display: flex;
  // [x] flex-direction: @flex-direction;
  // [x] flex-wrap: @flex-wrap;
  flex-flow: @flex-direction @flex-wrap;
  justify-content: @justify-content;
  align-items: @align-items;
}

.z-card-style(){
  border-radius: @border-radius-lg;
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, .05), 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .05)
}

.z-img-base(){
  width: 100%;
  height: 100%;
}

.z-backgroud-base(@height: 100%, @border-radius: @border-radius--card){
  display: flex;
  position: absolute;
  height: @height;
  border-radius: @border-radius;
  overflow: hidden;
  z-index: -1;
}

.z-card--0004{
  border-bottom: 1px solid @gray-3;
  width: 100%;
  .z-flex-base();

  .card{
    width: 100%;
    height: 40px;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .process{
      .z-backgroud-base();
      align-self: flex-start;
      height: 20px;
      .bgc(@gray-3);

      img{
        .z-img-base();
      }
    }
    .text{
      margin-left: 20px;
      justify-content: flex-start;

      .title{
        color: @title-color;
        font-size: @font-size-md;
      }
    }
    .action{
      display: flex;
      right: 10px;
      top: 40%;
    }
  }
}
</style>
