<script setup>
import { ElInput, ElTable, ElTableColumn, ElButton } from "element-plus";
import { Search, Plus } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
import { get } from "../../javascript/api";
import { userStore } from "@/store/user";
import { maxValueOfArray, minValueOfArray } from "../../javascript/utils";

const store = userStore();

// 搜索框相关
const searchVal = ref("");
const searchClick = async () => {
  const res = await get("/api/users/getUsers");
  console.log("用户列表数据", res.list);
  data.userList = res.list;
  store.setUserList(res.list);
};

const minVal = minValueOfArray([123, 35, 68, 879]);

// 表格相关
const data = reactive({
  userList: [],
});
const handleClick = () => {};
</script>

<template>
  <div class="search-area">
    <span>最小值方法打包测试{{ minVal }}</span>
    <el-input
      v-model="searchVal"
      class="w-50 m-2"
      placeholder="Type something"
      :prefix-icon="Search"
    />
    <el-button
      type="primary"
      :icon="Search"
      style="margin-left: 8px"
      @click="searchClick"
      >搜索</el-button
    >
    <el-button type="primary" :icon="Plus">新增</el-button>
  </div>
  <div class="data-area">
    <el-table :data="data.userList" stripe border style="width: 100%">
      <el-table-column prop="id" label="用户ID" width="200" />
      <el-table-column prop="name" label="用户名称" width="100" />
      <el-table-column prop="email" label="用户邮箱" width="180" />
      <el-table-column prop="address" label="用户地址" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >Detail</el-button
          >
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style src="../../style/user.less" scoped></style>
