<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>

    <div class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>

    <div data-v-062169fe="" class="el-affix" style="">
      <div class="" style="">
        <!---->
        <div data-v-01694899="" data-v-062169fe="" class="header-top">
          <div data-v-01694899="" class="header-con">
            <div data-v-01694899="" style="width: 284px; float: left">
              <div data-v-51044509="" data-v-01694899="" class="header-logo">
                <a data-v-51044509="" href="/" class=""
                  ><a data-v-51044509="" href="javascript;"
                    ><img
                      data-v-51044509=""
                      src="https://images.zzkyys.cn/1002/webImage/933bee2da6b1483b82e269f257466f6f.png"
                      height="40"
                      alt="开元印刷"
                      title="首页" /></a
                ></a>
              </div>
            </div>
            <div data-v-01694899="" style="width: 600px; float: left">
              <div data-v-01694899="" class="nav-item">
                <a
                  data-v-01694899=""
                  class="el-link el-link--default newClass link-a el-tooltip__trigger el-tooltip__trigger"
                  style="font-weight: bold"
                  ><!--v-if--><span class="el-link__inner">快捷下单</span
                  ><!--v-if--></a
                >
              </div>
              <div data-v-01694899="" class="nav-item">
                <a
                  data-v-01694899=""
                  class="el-link el-link--primary link-a"
                  href="/bulkOrdering"
                  target="_blank"
                  ><!--v-if--><span class="el-link__inner">批量下单</span
                  ><!--v-if--></a
                >
              </div>
              <div data-v-01694899="" class="nav-item">
                <a data-v-01694899="" class="el-link el-link--primary link-a"
                  ><!--v-if--><span class="el-link__inner">首 页</span
                  ><!--v-if--></a
                >
              </div>
              <div data-v-01694899="" class="nav-item">
                <a data-v-01694899="" class="el-link el-link--primary link-a"
                  ><!--v-if--><span class="el-link__inner">我的订单</span
                  ><!--v-if--></a
                >
              </div>
              <div data-v-01694899="" class="nav-item">
                <a data-v-01694899="" class="el-link el-link--primary link-a"
                  ><!--v-if--><span class="el-link__inner">待付款</span
                  ><!--v-if--></a
                >
              </div>
              <div data-v-01694899="" class="nav-item">
                <a data-v-01694899="" class="el-link el-link--primary link-a"
                  ><!--v-if--><span class="el-link__inner">我的账单</span
                  ><!--v-if--></a
                >
              </div>
              <div data-v-01694899="" class="nav-item">
                <a data-v-01694899="" class="el-link el-link--primary link-a"
                  ><!--v-if--><span class="el-link__inner">我的售后</span
                  ><!--v-if--></a
                >
              </div>
              <div data-v-01694899="" class="nav-item">
                <a data-v-01694899="" class="el-link el-link--primary link-a"
                  ><!--v-if--><span class="el-link__inner">个人中心</span
                  ><!--v-if--></a
                >
              </div>
            </div>

            <div data-v-01694899="" style="clear: both"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
