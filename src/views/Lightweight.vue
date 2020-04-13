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
                <el-popover
                        placement="bottom"
                        width="220"
                        trigger="click">
                    <div class="create_pull">
                        <ul class="create_bord_box">
                            <li  @click="dialogFormVisible = true"><div>创建看板</div><i class="el-icon-plus"></i></li>
                        </ul>
                        <div class="create_title">进行中的看板</div>
                        <ul class="create_bord_list">
                            <li><i class="el-icon-star-off"></i><a>todo</a></li>
                            <li><i class="el-icon-star-off"></i><a>熟悉看板</a></li>
                        </ul>
                        <ul class="create_bord_close">
                            <li>已关闭的看板</li>
                        </ul>
                    </div>
                    <div slot="reference" class="content_left_pull"><i class="el-icon-arrow-down"></i></div>
                </el-popover>
                <div class="content_left_bord_name" @click="editBordName">
                    <el-input v-show="edit" v-model="bordName"></el-input>
                    <span v-show="!edit" title="点击重命名标题" class="bord_name_info">{{bordName}}</span>
                </div>
            </div>
            <el-popover
                    placement="bottom"
                    width="120"
                    trigger="click">
                <div class="pull_box">
                    <ul>
                        <li>过滤</li>
                        <li>导出</li>
                        <li>导入看板</li>
                        <li>复制看板</li>
                        <li>关闭封面图</li>
                        <li>隐藏已完成的工作项</li>
                        <li>更换背景</li>
                        <li>看板统计</li>
                        <li>快捷键</li>
                        <li>关闭看板</li>
                        <li>删除看板</li>
                    </ul>
                </div>
                <div slot="reference" class="content_right"><i class="el-icon-s-fold"></i></div>
            </el-popover>
            <!--选择模板-->
            <el-dialog title="选择模板" :visible.sync="dialogFormVisible">
                <el-form :model="templateForm">
                    <el-input style="width: 428px;" v-model="templateForm.title" placeholder="添加看板标题" autocomplete="off"></el-input>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="所有" name="1">
                            <ul class="bord_template_detail">
                                <li><div class="template-thumb"><div class="template-bg"></div><div class="template-bg-mask"></div><div class="template-name">空白模板</div></div></li>
                                <li><div class="template-thumb"><div class="template-bg"></div><div class="template-bg-mask"></div><div class="template-name">需求管理</div></div></li>
                                <li><div class="template-thumb"><div class="template-bg"></div><div class="template-bg-mask"></div><div class="template-name">bug 管理</div></div></li>
                                <li><div class="template-thumb"><div class="template-bg"></div><div class="template-bg-mask"></div><div class="template-name">设计管理</div></div></li>
                                <li><div class="template-thumb"><div class="template-bg"></div><div class="template-bg-mask"></div><div class="template-name">敏捷看板</div></div></li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="研发管理" name="2">配置管理</el-tab-pane>
                        <el-tab-pane label="市场营销" name="3">角色管理</el-tab-pane>
                        <el-tab-pane label="人事行政" name="4">定时任务补偿</el-tab-pane>
                        <el-tab-pane label="其他" name="5">其他</el-tab-pane>
                        <el-tab-pane label="自定义" name="6">自定义</el-tab-pane>
                    </el-tabs>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>

        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { LightweightNavInfo, TemplateFormInfo } from '@/type/index.d.ts';

    @Component
    export default class Lightweight extends Vue {
        private idx: number = 0;
        private search: string = '';
        private edit: boolean = false;
        private bordName: string = '熟悉看板';
        private dialogFormVisible: boolean = false;
        private activeName: string = '1';
        private templateForm: TemplateFormInfo = {
          title: '',
        };
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
        private handleClick(tab: any, event: any): void {
            console.log(tab, event);
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
    .pull_box {
        ul {
            li {
                text-decoration: none;
                color: #49535f;
                display: block;
                line-height: 32px;
                height: 32px;
                padding-left: 15px;
                padding-right: 15px;
                white-space: nowrap;
                text-align: center;
                cursor: pointer;
            }
            li:hover {
                background-color: #3582fb;
                color: #FFFFFF;
            }
        }
    }
    .create_pull {
        .create_bord_box {
            border-bottom: 1px solid #c9c9cc;
            li {
                display: flex;
                height: 42px;
                overflow-y: hidden;
                div {
                    display: block;
                    padding: 12px 145px 12px 0;
                    line-height: 16px;
                }
                i {
                    margin-top: 12px;
                    vertical-align: middle;
                    margin-right: 0;
                }
            }
            li:hover {
                background-color: #3582fb;
                color: #FFFFFF;
            }
        }
        .create_title {
            font-size: 12px;
            border-top: 1px solid #dbdfe0;
            padding: 10px 0;
            line-height: 16px;
            font-weight: bold;
        }
        .create_bord_list {
            min-height: 358px;
            li {
                height: 30px;
                position: relative;
                line-height: 30px;
                cursor: pointer;
                i {
                    position: absolute;
                    top: 10px;
                    left: 15px;
                    color: #fff;
                    font-size: 14px;
                    cursor: pointer;
                }
                a {
                    display: block;

                    padding-left: 40px;
                    width: 170px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    font-weight: normal;
                    font-size: 15px;
                    text-decoration: none;
                }
            }
            li:hover {
                background-color: #3582fb;
                color: #FFFFFF;

            }
        }
        .create_bord_close {
            height: 42px;
            overflow-y: hidden;
            li {
                border-top: 1px solid #dbdfe0;
                cursor: pointer;
                display: block;
                padding: 12px 0;
                line-height: 16px;
            }
            li:hover {
                background-color: #3582fb;
                color: #FFFFFF;
            }
        }
    }
    .bord_template_detail {
        li {
            float: left;
            margin-bottom: 18px;
            margin-right: 10px;
            list-style: none;
            display: block;
            height: 125px;
            position: relative;
            .template-thumb {
                background-color: #f1f1f1;
                width: 190px;
                height: 118px;
                text-align: center;
                line-height: 118px;
                color: #fff;
                font-size: 16px;
                border-radius: 4px;
                overflow: hidden;
                position: relative;
                cursor: default;
                .template-bg {
                    -webkit-transition: transform .5s;
                    width: 190px;
                    height: 118px;
                    background-position: -786px -119px;
                }
                .template-bg-mask {
                    background-color: #000;
                    width: 190px;
                    height: 118px;
                    position: absolute;
                    top: 0;
                    opacity: .4;
                }
                .template-name {
                    position: absolute;
                    top: 0;
                    width: 190px;
                    height: 118px;
                }
            }
        }
    }
</style>
<style>
    .Lightweight .el-dialog__header, .Lightweight .el-dialog__body {
        text-align: center;
    }
    .Lightweight .el-tabs__header {
        margin: 20px 0 15px;
    }
    .Lightweight .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2),
    .el-tabs--bottom .el-tabs__item.is-top:nth-child(2),
    .el-tabs--top .el-tabs__item.is-bottom:nth-child(2),
    .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        padding-left: 70px;
    }
    .Lightweight .el-tabs__item {
        padding: 0 50px;
    }
    .Lightweight .el-tabs__content {
        height: 424px;
        padding-top: 10px;
    }
</style>
