<template>
    <Child :msg="msg" />
</template>
  
<script setup lang="ts">
import Child from "@/components/Child.vue";
import { ref } from "vue";

const msg = ref<string>("本系统由vite+vue3+ts构建，项目中还包含有pinia、vue-router、axios、sass、element-plus");

</script>

<style scoped lang="scss"></style>