<template>
  <div>
    <el-header>
        Devops管理平台
      </el-header>
    <el-menu
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <el-button @click="grafana">
              <i class="el-icon-s-flag"></i>系统仪表盘
            </el-button>
          </el-menu-item>
          <el-menu-item index="2">
            <el-button @click="jenkins">
              <i class="el-icon-s-cooperation"></i>开发管理
            </el-button>
          </el-menu-item>
          <el-menu-item index="3">
            <el-button @click="kubernetes">
              <i class="el-icon-s-help"></i>运行状态管理
            </el-button>
          </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      kubernetes () {
        window.location.href = 'https:\\192.168.31.236:31772'
      },
      jenkins () {
        window.location.href = 'https:\\163.com'
      },
      grafana() {
        window.location.href = 'https:\\163.com'
      }
    }
  }
</script>

<style scoped>
  .el-header{
    background-color: #B3C0D1;
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