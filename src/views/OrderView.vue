<template>bb</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  components: {},
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key: unknown) => {
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
