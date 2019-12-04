<template>
  <div class="z-card--0001">
    <div class="backgroud">
      <div class="thumb">
        <img src="" alt="">
      </div>
      <div class="header"></div>
    </div>
    <div class="flag"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import '../../../style/var.less';

@title-color: @gray-8;
@subtitle-color: @gray-6;
@desc-color: @gray-7;

.z-card--0001{
  width: 100%;
  
  .backgroud{
    // flex
    display: flex;
    flex-flow: row nowarp;
    justify-content: space-around;
    align-items: center;

    .thumb{
      width: 88px;
      height: 88px;

      img{
        width: 100%;
        height: 100%;
      }
    }
    .header{
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;

      .title{
        color: @title-color;
      }
      .subtitle{
        color: @subtitle-color;
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