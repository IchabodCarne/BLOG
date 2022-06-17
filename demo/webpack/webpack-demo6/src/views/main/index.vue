<script setup>
import AsideMenu from "../../components/Menu";

const avatarUrl = require("../../images/touxiang.jpg");
</script>

<template>
  <el-container class="container">
    <el-header class="header">
      <div class="header-title">
        <div class="header-title__content">Webpack Vue3 自己搭建环境</div>
        <el-avatar :size="50" :src="avatarUrl" />
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <AsideMenu></AsideMenu>
      </el-aside>
      <el-main> <router-view></router-view> </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.container {
  height: 100vh;
  .header {
    background-color: #2c3e50;
    .header-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      .header-title__content {
        font-size: 30px;
        color: white;
      }
    }
  }
}
</style>
