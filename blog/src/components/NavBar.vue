<template>
  <div>
    <header class="header">
      <nav class="nav container">
        <div class="logo"></div>
        <ul class="nav-list">
          <li class="nav-item"><router-link to="/article">文章</router-link></li>
          <li class="nav-item"><router-link to="/about">关于我</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  background: @light-color;
  margin-bottom: 20px;
  .nav {
    display: flex;
    justify-content: space-between;
    .logo {
    }
    .nav-list {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      font-size: 20px;
      .nav-item a {
        color: #000;
        display: inline-block;
        padding: 20px;
      }
    }
  }
}
</style>
