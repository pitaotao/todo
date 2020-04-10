<template>
    <div class="ProblemFeedback">
        <div class="feedback_title">我的反馈</div>
        <div class="feedback_nav">
            <div class="submit_feedback">
                <el-button type="primary" icon="el-icon-document-checked"  @click="dialogFormVisible = true">提交问题</el-button>
            </div>
            <ul class="time_feedback">
                <li v-for="(item, index) in feedbackTime" :key="index" @click="timeBack(index)" :class="{selectTime: index==current}">{{item.name}}</li>
            </ul>
        </div>
        <el-table
                :data="feedTable"
                style="width: 100%">
            <el-table-column
                    prop="desc"
                    label="问题描述"
                    width="741">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
                    width="235">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="提交时间">
            </el-table-column>
        </el-table>
        <!--提交问题-->
        <el-dialog title="提交反馈" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="请输入问题描述" :label-width="formLabelWidth">
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 4, maxRows: 4}"
                            placeholder="请输入问题描述"
                            v-model="form.problem">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { FeedbackTimeInfo, FeedTableInfo, SubmitFeedbackInfo } from '@/type/index.d.ts';

    @Component
    export default class ProblemFeedback extends Vue {
        private current: number = 0;
        private dialogFormVisible: boolean = false;
        private formLabelWidth: string = '120px';
        private feedbackTime: FeedbackTimeInfo[] = [
            {
                name: '今天',
            },
            {
                name: '昨天',
            },
            {
                name: '近7天',
            },
            {
                name: '全部',
            },
        ];
        private feedTable: FeedTableInfo[] = [
            {
                desc: '如何修改成员昵称？',
                status: '未处理',
                time: '2020-04-10 09:18:58',
            },
        ];
        private form: SubmitFeedbackInfo = {
            problem: '',
        };
        private timeBack(index: number): void {
            this.current = index;
        }
    }
</script>

<style scoped lang="less">
    .ProblemFeedback {
        margin-left: 35px;
        padding-top: 30px;
    }
    .feedback_title {
        margin-bottom: 30px;
        color: #3f4a56;
        font-size: 18px;
    }
    .feedback_nav {
        display: flex;
    }
    .submit_feedback{
        margin-bottom: 20px;
    }
    .time_feedback {
        display: flex;
        padding-top: 3px;
        float: left;
        li {
            cursor: pointer;
            float: left;
            height: 28px;
            font-size: 13px;
            line-height: 28px;
            margin-right: 20px;
            display: block;
        }
        li:first-child {
            margin-left: 45px;
        }
        .selectTime {
            padding: 1px 6px;
            background-color: #266298;
            border-radius: 2px;
            color: #FFFFFF;
        }
    }
</style>
<style>
    .ProblemFeedback .el-table__row {
        cursor: pointer;
    }
    .ProblemFeedback .el-table__row .cell:hover {
        color: #4f8ef5;
    }
</style>
