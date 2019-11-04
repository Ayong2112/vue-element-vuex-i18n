<template>
  <div>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside :width="asideWidth"><Aside></Aside></el-aside>
        <el-container>
          <el-main><Main></Main></el-main>
          <el-footer><Footer></Footer></el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import Header from './header.vue'
  import Aside from './aside.vue'
  import Main from './main'
  import Footer from './footer.vue'

  export default {
    name: "home",
    components: {Header, Aside, Main, Footer},
    data(){
      return{
        asideWidth:'200px'
      }
    }
  }
</script>

<style lang="less">
@import '../../css/home.less';
</style>
