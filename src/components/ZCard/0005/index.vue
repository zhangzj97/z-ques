<template>
  <div class="z-card--0005">
    <div class="card">
      <div class="header">
        <div class="process" :style="{width: processWidth}">
          <img src="" alt="">
        </div>
        <div class="count">{{countFinished}} / {{countAll}}</div>
      </div>
      <div class="main">
        <div class="text">
          <div class="type">单选</div>
          <div class="title">{{ info.title }}</div>
        </div>
      </div>
      <div class="response">
        <label
          v-for="(v1) of info.content"
          :key="v1.id"
          @click="chooseNext()"
        >
          <input type="radio" :name="`ques[${info.id}]`">
          <div class="option">{{ v1.option }}</div>
          <div class="value">{{ v1.value }}</div>
        </label>
      </div>
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-card--0005',
  props: {
    info: {
      type: Object,
      default () {
        return {
          id: '100',
          title: 'TTTT',
          content: [
            {
              type: 'radio',
              option: 'A',
              value: 'AAA'
            }
          ]
        }
      }
    },
    countAll: {
      type: Number,
      default () {
        return 10
      }
    },
    countFinished: {
      type: Number,
      default () {
        return 9
      }
    }
  },
  methods: {
    chooseNext (id, index) {
      this.$emit('chooseNext')
    }
  },
  computed: {
    processWidth: function () {
      return `${this.countFinished / this.countAll * 100}%`
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
  border-radius: @border-radius--card;
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

.z-card--0005{
  width: 100%;
  .z-flex-base(row);

  >.card{
    width: 100%;
    text-align: left;
    .z-flex-base(column);
    .z-card-style();

    >.header{
      width: 100%;
      .z-flex-base(row-reverse);
      position: relative;

      >.process{
        width: 80%;
        height: 10px;
        .z-backgroud-base();
        .bgc(@cyan-1);
        left: 0;
        top: 0;

        >img{
          .z-img-base();
        }
      }
      >.count{
        color: @title-color;
        font-size: @font-size--title;
      }
    }
    >.main{
      width: 80%;
      min-height: 120px;
      border-bottom: solid 1px @gray-3;
      >.text{

        >.type{
          color: @title-color;
          font-size: @font-size--title * 1.5;
          margin-bottom: 5px;
        }

        >.title{
          color: @title-color;
          font-size: @font-size--title * 1.1;
          line-height: 30px;
        }
      }
    }

    >.response{
      width: 80%;
      min-height: 250px;
      color: #000;
      font-size: @font-size--title;
      line-height: 20px;

      >label{
        min-height: 40px;
        border-bottom: solid 1px @gray-3;
        .z-flex-base(row, nowrap, flex-start, center);

        >input[type="radio"]{
          width: 20px;
          height: 20px;
          font-size: @font-size-lg * 2;
        }

        >.option{
          margin-right: 10px;
        }

        >.value{
          font-size: @font-size-lg;
        }
      }
    }
  }
}

</style>
