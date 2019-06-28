<template>
  <main class="container">
    <div class="content">
      <section class="list">
        <article-item
          v-for="(article, key) in articlesList"
          :key="key"
          :article="article"/>
      </section>
      <aside class="category">
        <ul>
          <li class="cateItem">html</li>
          <li class="cateItem">css</li>
          <li class="cateItem">js</li>
          <li class="cateItem">vue</li>
          <li class="cateItem">webpack</li>
        </ul>
      </aside>
    </div>
  </main>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
import axios from 'axios'
export default {
  components: {
    ArticleItem
  },
  data () {
    return {
      articlesList: []
    }
  },
  mounted () {
    axios.get('/mock/articles')
      .then(res => {
        console.log(res)
        this.articlesList = res.data
      })
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  .category {
    width: 200px;
    margin-left: 30px;
  }
}
</style>
