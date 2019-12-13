<template>
  <div class="demo">
    <h1>Layout</h1>
    <hr>
    <section>
      <div class="wrap-base">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>
    </section>
    <section>
      <div class="wrap-base full">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>
    </section>
    <section>
      <div class="wrap-base col">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>
    </section>
    <section>
      <div class="wrap-base row">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>
    </section>
    <section>
      <div class="wrap-base grid">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import '../../components/style/zzj.less';

div.demo{
  margin: 0px;
  padding: 0px;

  section{
    background-color: @color--default;


    .item{
      width: 50px;
      height: 50px;
      background-color: @color--brand;
      .flex-center();

      // &.item{

      //   &--1{
      //     width: 100%;
      //   }
      //   &--2{
      //     flex-basis: 100%;
      //   }  
      //   &--3{
      //     flex: 3;
      //   }
      //   &--4{
      //     flex: 4;
      //   }
      // }      
    }
  }
}
</style>
