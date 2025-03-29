<template>
  <div id="app">
    <el-container>
      <el-aside v-if="!$route.meta.showNav" width="200px">  <!--这个meta属性用来隐藏导航栏，登录才可见--> 
        <Menu v-if="!$route.meta.showNav"></Menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
      </el-container>  
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },

  methods:{
        logout(){
            window.sessionStorage.clear();
            this.$router.push('/login');
        }
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body{
  margin:0;
  padding:0;
  border:0
}

.el-aside{
     background-color: #333744;
}
  .el-main{
     background-color: #eaedf1;
}
</style>
