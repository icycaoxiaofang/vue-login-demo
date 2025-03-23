<template>
  <div>
    <el-header>
        Devops管理平台
      </el-header>
    <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <span slot="title">
              <router-link tag="div" to="/home">
              <i class="el-icon-help"></i>Home
            </router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">
              <router-link tag="div" to="/kubernetes">
              <i class="el-icon-help"></i>Kubernetes
            </router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">
              <router-link tag="div" to="/jenkins">
              <i class="el-icon-s-cooperation"></i>Jenkins
            </router-link>
            </span>
          </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

</script>

<style scoped>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>