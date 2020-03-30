<template>
    <div class="Sidebar">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                 background-color="#2a68c9"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <div class="logoBox">
                <img class="logo" src="../assets/logo.png" alt="">
            </div>
            <el-menu-item index="1" @click="handleClickMenu(1)">
                <i class="el-icon-takeaway-box"></i>
                <span slot="title">工作台</span>
            </el-menu-item>
            <el-menu-item index="2" @click="handleClickMenu(2)">
                <i class="el-icon-document"></i>
                <span slot="title">文档</span>
            </el-menu-item>
            <el-menu-item index="3" @click="handleClickMenu(3)">
                <i class="el-icon-receiving"></i>
                <span slot="title">项目</span>
            </el-menu-item>
            <el-menu-item index="4" @click="handleClickMenu(4)">
                <i class="el-icon-bell"></i>
                <span slot="title">消息</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Sidebar extends Vue {
        private isCollapse: boolean = true;

        private handleOpen(key: any, keyPath: any): void {
            console.log(key, keyPath);
        }
        private handleClose(key: any, keyPath: any): void {
            console.log(key, keyPath);
        }
        private handleClickMenu(index: number): void {
            if (index === 1) {
                this.$router.push({path: '/workbench'});
            } else if (index === 2) {
                this.$router.push({path: '/documentation'});
            } else if (index === 3) {
                this.$router.push({path: '/'});
            } else if (index === 4) {
                this.$router.push({path: '/news'});
            }
        }
    }
</script>

<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-menu--collapse {
        width: 64px;
        height: 100vh;
    }
    .Sidebar i {
        color: #ffffff;
    }
    .logoBox {
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
    }
    .logo{
        width:auto;
        height:auto;
        max-width:100%;
        max-height:100%;
    }
</style>
