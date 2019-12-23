<template>
  <div class="demo--layout">
    <h1>Layout</h1>
    <hr>
    <section>
      <div class="text text--primary">
        <p>.wrap-base display: block;</p>
        <p>.col .row .gird display: flex;</p>
        <p>.full padding: 0;</p>
      </div>

      <h1>.wrap-base</h1>
      <div class="wrap-base">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>

      <h1>.wrap-base.full</h1>
      <div class="wrap-base full">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>

      <h1>.wrap-base.col</h1>
      <div class="wrap-base col">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>

      <h1>.wrap-base.col.full</h1>
      <div class="wrap-base col full">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>

      <h1>.wrap-base.row</h1>
      <div class="wrap-base row">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>
      <div class="wrap-base row">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
        <div class="item item--5">5</div>
        <div class="item item--6">6</div>
        <div class="item item--7">7</div>
        <div class="item item--8">8</div>
        <div class="item item--9">9</div>
        <div class="item item--a">a</div>
      </div>

      <h1>.wrap-base.row.full</h1>
      <div class="wrap-base row full">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
      </div>
      <div class="wrap-base row full">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
        <div class="item item--5">5</div>
        <div class="item item--6">6</div>
        <div class="item item--7">7</div>
        <div class="item item--8">8</div>
        <div class="item item--9">9</div>
        <div class="item item--a">a</div>
      </div>

      <h1>.wrap-base.grid</h1>
      <div class="wrap-base grid">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
        <div class="item item--5">5</div>
        <div class="item item--6">6</div>
        <div class="item item--7">7</div>
        <div class="item item--8">8</div>
      </div>

      <h1>.wrap-base.grid.full</h1>
      <div class="wrap-base grid full">
        <div class="item item--1">1</div>
        <div class="item item--2">2</div>
        <div class="item item--3">3</div>
        <div class="item item--4">4</div>
        <div class="item item--5">5</div>
        <div class="item item--6">6</div>
        <div class="item item--7">7</div>
        <div class="item item--8">8</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'demo-layout',
  data () {
    return {
      // info: {

      // }
    }
  }
}
</script>

<style lang="less">
@import 'index.less';

</style>
