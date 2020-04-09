<template>
    <div class="Workbench">
        <div class="head">
            <el-select v-model="value" :placeholder="OptionValue[0].value">
                <el-option
                        v-for="item in OptionValue"
                        :key="item.value"
                        :label="item.value"
                        :value="item.value">
                    <i class="icon_style" :class="item.icon"></i>
                    <span class="option_style">{{ item.value }}</span>
                </el-option>
            </el-select>
            <el-input class="show_style" :value="value" placeholder="" disabled></el-input>
        </div>
        <div class="worktable_set">
            <div class="worktable_action">
                <div class="action_left">
                    <i class="el-icon-aim" style="font-size: 18px"></i>
                    <span class="filter_f">过滤</span>
                </div>
                <div class="action_line"></div>
                <div class="action_right">
                    <i class="el-icon-setting" style="font-size: 18px;color: #8091a5"></i>
                </div>
            </div>
        </div>
        <div class="table">
            <div class="table_content">
                <div class="table_head">需求</div>
                <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="ID"
                            label="ID"
                            width="191">
                    </el-table-column>
                    <el-table-column
                            prop="title"
                            label="标题"
                            width="558">
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="状态"
                            width="207">
                    </el-table-column>
                    <el-table-column
                            prop="iteration"
                            label="迭代"
                            width="207">
                    </el-table-column>
                    <el-table-column
                            prop="priority"
                            label="优先级"
                            width="208">
                    </el-table-column>
                    <el-table-column
                            prop="handler"
                            label="处理人"
                            width="208">
                    </el-table-column>
                    <el-table-column
                            prop="founder"
                            label="创建人"
                            width="208">
                    </el-table-column>
                </el-table>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { OptionInfo, TableInfo } from '@/type';
    import { State } from 'vuex-class';

    @Component
    export default class Workbench extends Vue {
        @State private isLogin!: boolean;
        private value: string = '';
        private OptionValue: OptionInfo[] = [
            {
                icon: 'el-icon-time\n',
                value: '我的代办',
            },
            {
                icon: 'el-icon-circle-check\n',
                value: '我的已办',
            },
            {
                icon: 'el-icon-document-add\n',
                value: '我创建的',
            },
            {
                icon: 'el-icon-star-off\n',
                value: '我关注的',
            },
        ];
        private tableData: TableInfo[] = [
            {
                ID: 1000143,
                title: 'todo',
                type: '规划中',
                iteration: '--',
                priority: '--',
                handler: '--',
                founder: '屁桃',
            },
            {
                ID: 1000143,
                title: 'todo',
                type: '规划中',
                iteration: '--',
                priority: '--',
                handler: '--',
                founder: '屁桃',
            },
        ];
        private created(): void {
            if (!this.isLogin) {
                // this.$router.push('/login');
            }
        }
    }
</script>

<style scoped lang="less">
    .Workbench {
        position: relative;
        padding: 15px;
        height: 100vh;
        width: 100%;
        background: #f8f8f8;
        box-sizing: border-box;
    }
    .head{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .icon_style {
        margin-right: 10px;
        font-size: 14px;
        color: #3f4a56;
    }
    .option_style {
        font-size: 14px;
        color: #3f4a56;
        width: 100%;
        height: 38px;
        line-height: 38px;
    }
    .el-select {
        box-shadow: 0 0 10px rgba(128,145,165,0.2);
    }
    .show_style {
        margin-left: 10px;
        box-shadow: 0 0 10px rgba(128,145,165,0.2);
    }
    .worktable_set {
        position: relative;
    }
    .worktable_action {
        display: flex;
        justify-content: flex-end;
    }
    .action_left {
        vertical-align: middle;
        margin-right: 18px !important;
        font-size: 18px;
        color: #8091a5;
        display: flex;
        cursor: pointer;
        .filter_f {
            font-size: 12px;
            margin: 0 0 5px 4px !important;
            vertical-align: middle;
        }
    }
    .action_line {
        border-right: 1px solid #dfe6ee;
        width: 1px;
        height: 18px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 18px !important;
        font-size: 18px;
        color: #3582fb;
    }
    .action_right {
        cursor: pointer;
    }
    .table {
        position: absolute;
        left: 15px;
        right: 15px;
        top: 100px;
        bottom: 15px;
    }
    .table_content {
        position: relative;
        width: 100%;
        float: left;
        height: 100%;
        margin-right: 20px;
        box-shadow: 0 0 10px rgba(128,145,165,0.2);
        overflow: auto;
        border-radius: 2px;
        background: #fff;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .table_head {
        float: left;
        padding: 16px 25px;
        width: 100%;
        background: #fff;
        color: #8091a5;
        font-size: 16px;
    }
    .el-table {
        padding: 0 20px;
    }
    .el-table__header {
        background-color: #606266;
    }
    .el-table::before {
        height: 0;
    }
</style>
