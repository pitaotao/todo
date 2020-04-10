<template>
    <div class="Lightweight">
        <div class="Lightweight_head">
            <div class="Lightweight_title">
                <div class="Lightweight_title_img">
                    <img src="../assets/Lightweight.jpg" alt="">
                </div>
                <span>轻量团队看板</span>
            </div>
            <div class="Lightweight_nav">
                <ul>
                    <li v-for="(item, index) in navs" :key="index" @click="lightweightNav(index)" :class="{select_yes: index==idx}">
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <div class="shrewd_search_box">
                <el-input
                        placeholder="搜索"
                        suffix-icon="el-icon-search"
                        v-model="search">
                </el-input>
            </div>
        </div>
        <div class="Lightweight_content">
            <div class="content_left">
                <div class="content_left_pull"><i class="el-icon-arrow-down"></i></div>
                <div class="content_left_bord_name" @click="editBordName">
                    <el-input v-show="edit" v-model="bordName"></el-input>
                    <span v-show="!edit" title="点击重命名标题" class="bord_name_info">{{bordName}}</span>
                </div>
            </div>
            <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="click">
                <div slot="reference" class="content_right"><i class="el-icon-s-fold"></i></div>
            </el-popover>

        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { LightweightNavInfo } from '@/type/index.d.ts';

    @Component
    export default class Lightweight extends Vue {
        private idx: number = 0;
        private search: string = '';
        private edit: boolean = false;
        private bordName: string = '熟悉看板';
        private navs: LightweightNavInfo[] = [
            {
                name: '看板',
            },
            {
                name: '文档',
            },
            {
                name: '报表',
            },
        ];
        private editBordName(): void {
            this.edit = true;
        }
        private lightweightNav(index: number): void {
            this.idx = index;
        }
    }
</script>

<style scoped lang="less">
    .Lightweight {
        position: relative;
        padding: 15px;
        height: 100vh;
        width: 100%;
        background: #f8f8f8;
        box-sizing: border-box;
    }
    .Lightweight_head {
        min-width: 1020px;
        margin-bottom: 4px;
        z-index: 502;
        position: fixed;
        left: 64px;
        right: 0;
        top: 0;
        color: #3f4a56;
        height: 60px;
        font-size: 12px;
        background-color: #fff;
        box-shadow: 0 0 10px 0 rgba(128,145,165,0.2);
        display: flex;
        justify-content: flex-start
    }
    .Lightweight_title {
        float: left;
        margin: 19px 0 0 15px;
        display: flex;
        width: 184px;
        min-width: 184px;
        .Lightweight_title_img {
            text-align: center;
            width: 24px;
            height: 24px;
            line-height: 24px;
            margin-right: 10px;
            vertical-align: top;
            img {
                vertical-align: middle;
                width: 100%;
                height: 100%;
                border-radius: 3px;
            }
        }
        span {
            max-width: 146px;
            display: inline-block;
            font-size: 16px;
            color: #3f4a56;
            line-height: 26px;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    .Lightweight_nav {
        display: flex;
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            li {
                border-bottom: 2px solid transparent;
                margin: 0 15px;
                max-width: 105px;
                float: left;
                color: #3f4a56;
                display: block;
                padding: 20px 5px;
                line-height: 18px;
                font-size: 15px;
                cursor: pointer;
            }
            li:hover {
                border-bottom-color: #3582fb;
                color: #3582fb;
            }
            .select_yes {
                border-bottom-color: #3582fb;
                color: #3582fb;
            }
        }
    }
    .shrewd_search_box {
        position: absolute;
        right: 30px;
        top: 10px;
    }
    .Lightweight_content {
        margin-top: 60px;
        padding: 15px 25px 15px 10px
    }
    .content_left {
        float: left;
    }
    .content_left_pull {
        color: #FFFFFF;
        border-radius: 3px;
        background-color: #3582fb;
        width: 26px;
        height: 26px;
        display: inline-block;
        margin-right: 10px;
        i {
            font-size: 16px;
            margin-top: 5px;
            margin-left: 4px;
        }
    }
    .content_left_bord_name {
        font-size: 16px;
        line-height: 20px;
        font-weight: bold;
        color: #3b434c;
        display: inline-block;
        .el-input {
            min-width: 328px;
        }
    }
    .bord_name_info {
        display: block;
        padding: 6px 10px;
        border-radius: 4px;
        cursor: text;
        min-width: 328px;
    }
    .bord_name_info:hover {
        background-color: #e6e6e6;
    }
    .content_right {
        position: absolute;
        right: 30px;
        font-size: 30px;
        color: #cccccc;
    }
</style>
