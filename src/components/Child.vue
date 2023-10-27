<template>
    <div class="tip">尊敬的{{ userStore.name }}，您好！</div>
    <el-text type="info">{{ msg }}</el-text>
</template>
  
<script setup lang="ts">
import useUserStore from "@/store/modules/user";
// import { testApi } from "@/api/test"

// testApi({ type: 1 })

const userStore = useUserStore();

defineProps<{ msg: string }>()

</script>

<style scoped lang="scss">
.tip {
    color: $test-color;
    text-align: center;
    font-size: 32px;
    font-weight: normal;
    margin: 150px;
}

.el-text--info {
    display: block;
    text-align: center;
}
</style>