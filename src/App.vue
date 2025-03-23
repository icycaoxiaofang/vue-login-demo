<template>
  <div id="app">
    <el-container>
      <el-aside v-show="$route.name!=='login'" width="200px">
        <Menu v-show="$route.name!=='login'"></Menu>
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
