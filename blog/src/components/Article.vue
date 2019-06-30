<template>
  <main class="main">
    <div class="content container">
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
    this.getArticles()
    this.loadMore()
  },
  methods: {
    getArticles: function () {
      axios.get('/mock/articles')
        .then(res => {
          this.articlesList = this.articlesList.concat(res.data)
        })
    },
    loadMore: function () {
      window.onscroll = () => {
        // 窗口实际高度
        let clientHeight = document.documentElement.clientHeight
        // 文档实际高度
        let scrollHeight = document.documentElement.scrollHeight
        // 滚动条下拉高度
        let scrollTop = document.documentElement.scrollTop
        if (clientHeight + scrollTop >= scrollHeight * 0.8) {
          this.getArticles()
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  align-items: flex-start;
  .category {
    width: 200px;
    margin-left: 30px;
    padding:20px;
    background: @light-color;
    .cateItem {
      padding: 0 10px;
    }
  }
}
</style>
