<template>
  <div class="header-top">
    <div
      class="header-icon"
      style="display: flex; justify-content: space-between; width: 100%; height: 80px"
    >
      <div
        style="margin: 10px 50px 10px 50px; display: flex; justify-content: space-between"
        class="header-logo"
      >
        <a data-v-51044509="" href="/" class=""
          ><a data-v-51044509="" href="javascript;"
            ><img
              data-v-51044509=""
              src="@/assets/logo.jpg"
              height="58"
              width="58"
              alt="彩旋印刷"
              title="首页" /></a
        ></a>
      </div>
      <div style="padding-top: 10px; width: 605px">
        <div style="float: right">
          <span class="span-pos"
            >客服电话:<span data-v-68eba7f3="" class="number-font">13661900686</span></span
          >
        </div>
        <div style="float: right; margin-left: 10px">
          <a href="https://wpa1.qq.com/YM7CgmoF?_type=wpa&amp;qidian=true" target="_blank"
            ><span style="margin-right: 10px"
              ><svg
                data-v-73782c74=""
                aria-hidden="true"
                class="svg-icon"
                title="QQ咨询"
                style="width: 1.5em; height: 1.5em"
              >
                <use data-v-73782c74="" xlink:href="#icon-qqindex" fill=""></use></svg></span
          ></a>
        </div>
        <div style="float: right">
          <svg
            data-v-73782c74=""
            aria-hidden="true"
            class="svg-icon el-tooltip__trigger"
            title="微信扫码咨询"
            style="width: 1.5em; height: 1.5em"
          >
            <use data-v-73782c74="" xlink:href="#icon-weixin" fill=""></use>
          </svg>
        </div>
        <div style="clear: both"></div>
      </div>
      <div style="height: 80px; display: flex; justify-content: space-between; margin-top: 20px">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">产品</el-menu-item>
          <el-menu-item index="3">服务</el-menu-item>
          <el-menu-item index="4">关于我们</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
  <div>
    <el-row class="tac">
      <el-col :span="6">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title style="margin-left: -50px">
              <el-icon><location /></el-icon>
              <span style="margin-left: -30px; font-weight: 500; font-size: 16px; font-weight: bold"
                >运输票/门票/水票/代金券类</span
              >
            </template>

            <el-menu-item-group>
              <el-menu-item index="1-1">运输票/门票/水票/代金券</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><location /></el-icon>
              <span style="margin-left: -30px; font-weight: 500; font-size: 16px; font-weight: bold"
                >联单/稿纸/牛皮纸/喷墨类</span
              >
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">无碳联单（黑白）</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2-2">喷墨彩色联单（可变数据） </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2-3">胶印彩色联单</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2-4">红头/牛皮纸脚垫（默认切单页）</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2-5">双胶纸/稿纸/便签本</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2-6">喷墨单张（培训资料、试卷）</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2-7">电梯保养本专区</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2-8">机打联单</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { ElMenu, ElMenuItem } from 'element-plus'

import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

export default {
  components: {
    ElMenu,
    ElMenuItem,
  },
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key: any) => {
      console.log('选中的菜单项索引:', key)
      // 在这里可以根据索引进行路由跳转等操作
    }
    return {
      activeIndex,
      handleSelect,
    }
  },

  handleOpen(key: string, keyPath: string[]) {
    console.log(key, keyPath)
  },
  handleClose(key: string, keyPath: string[]) {
    console.log(key, keyPath)
  },
}
</script>