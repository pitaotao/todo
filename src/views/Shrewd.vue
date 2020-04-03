<template>
    <div class="Shrewd">
        <div class="shrewd_head">
            <div class="shrewd_title">
                <div class="shrewd_title_img">
                    <img src="../assets/agile.jpg" alt="">
                </div>
                <span>敏捷研发管理</span>
            </div>
            <div class="shrewd_nav">
                <div class="shrewd_add"> <i class="el-icon-plus"></i> </div>
                <ul>
                    <li v-for="(item, index) in navs" :key="index" @click="itemNav(index)" :class="{select_yes: index==idx}">
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <div class="shrewd_search_box">

            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { ShrewdNavInfo } from '@/type/index.d.ts';

    @Component
    export default class Shrewd extends Vue {
        private navs: ShrewdNavInfo[] = [
            {
                name: '需求',
            },
            {
                name: '迭代',
            },
            {
                name: '故事墙',
            },
            {
                name: '缺陷',
            },
            {
                name: '文档',
            },
            {
                name: '报表',
            },
        ];
        private idx: number = 0;
        private restaurants: [] = [];
        private state: string = '';
        private itemNav(index: number): void {
            this.idx = index;
        }
    }
</script>

<style scoped lang="less">
    .Shrewd {
        position: relative;
        padding: 15px;
        height: 100vh;
        width: 100%;
        background: #f8f8f8;
        box-sizing: border-box;
    }
    .shrewd_head {
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
    .shrewd_title {
        float: left;
        margin: 19px 0 0 15px;
        display: flex;
        width: 184px;
        min-width: 184px;
        .shrewd_title_img {
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
    .shrewd_nav {
        display: flex;
        .shrewd_add {
            margin-top: 2px;
            padding: 20px;
            height: 18px;
            font-size: 17px;
            color: #3f4a56;
        }
        .shrewd_add:hover {
            background-color: #e9e9e9;
        }
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
        float: right;

    }
</style>
