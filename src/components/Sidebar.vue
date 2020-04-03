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
            <el-popover
                    placement="right"
                    title="项目"
                    width="225"
                    trigger="hover">
                <div class="status_list">
                    <span class="status_list_title">我的项目</span>
                    <div class="list_content">
                        <ul>
                            <li v-for="(item, index) in statusList" :key="index" @click="status(index)" :class="{select_list: index==idx}">
                                <i class="el-icon-star-off"></i>
                                <div class="list_img">
                                    <img :src="item.img" alt="">
                                </div>
                                <span>{{item.name}}</span>
                            </li>
                        </ul>
                        <el-button class="add_pro">+ 创建项目</el-button>
                    </div>
                </div>
                <el-menu-item index="3" @click="handleClickMenu(3)" slot="reference">
                    <i class="el-icon-receiving"></i>
                </el-menu-item>
            </el-popover>
            <el-menu-item index="4" @click="handleClickMenu(4)">
                <i class="el-icon-bell"></i>
                <span slot="title">消息</span>
            </el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { StatusListInfo } from '@/type/index.d.ts';

    @Component
    export default class Sidebar extends Vue {
        private isCollapse: boolean = true;

        private statusList: StatusListInfo[] = [
            {
                name: '敏捷研发管理',
                img: '/img/agile.975b18b3.jpg',
            },
            {
                name: '轻量团队看板',
                img: '/img/Lightweight.8b3e1600.jpg',
            },
        ];
        private idx: number = 0;
        private status(index: number): void {
            this.idx = index;
            if (index === 0) {
                this.$router.push({path: '/Shrewd'});
            } else if (index === 1) {
                this.$router.push({path: '/Lightweight'});
            }
        }
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
                // this.$router.push({path: '/index'});
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
    .Sidebar{
        display: flex;
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
    .status_list {
        padding-top: 20px;
    }
    .select_list {
        background-color: #c6e2ff;
        border-radius: 3px;
    }
    .list_content {
        margin-top: 10px;
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        li {
            padding: 10px 0  10px 30px;
            display: flex;
            cursor: pointer;
            i {
                margin-top: 5px;
                margin-right: 15px;
                font-size: 16px;
                color: #ffffff;
            }
            .list_img {
                text-align: center;
                width: 24px;
                height: 24px;
                line-height: 24px;
                margin-right: 10px;
                border-radius: 5px;
                img {
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        li:hover{
            background-color: #c6e2ff;
            border-radius: 3px;
        }
    }
    .add_pro {
        display: inline-block;
        width: 145px;
        text-align: center;
        margin-left: 35px;
        padding: 9px 0;
        border-radius: 2px;
        margin-top: 20px;
    }
</style>
