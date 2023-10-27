// 定义user数据
import { defineStore } from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
const useUserStore = defineStore('user', {
    state: () => {
        return {
            name: '用户',
        }
    },
    // other options...
})

export default useUserStore;