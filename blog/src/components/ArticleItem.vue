<template>
  <article class="article">
    <div class="title">{{article.title}}</div>
    <div class="para">{{article.abstract}}</div>
    <div class="time">
      <span>{{article.createdTime}}</span>
    </div>
  </article>
</template>
<script>
export default {
  props: ['article']
}
</script>
<style lang="less" scoped>
.article {
  padding: 20px;
  margin-bottom: 20px;
  .title {
    color: @deep-color;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .para {
    color: @theme-color;
    padding: 10px 0px;
  }
  .time {
    color: @light-color;
    font-size: 14px;
  }
}
</style>
