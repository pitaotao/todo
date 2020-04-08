<template>
    <div class="PersonalInformation">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本资料" name="0">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="昵称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="真实姓名">
                        <el-input v-model="form.realName"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio v-model="form.sex" label="1">男</el-radio>
                        <el-radio v-model="form.sex" label="2">女</el-radio>
                    </el-form-item>
                    <el-form-item label="职位">
                        <el-input v-model="form.position"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="修改头像" name="1">
                <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-tab-pane>
            <el-tab-pane label="账号安全" name="2">
                <div class="tips">进入帐号安全设置前，请输入你的密码以确保帐号安全</div>
                <div class="form_item">
                    <label class="control_label">登录邮箱</label>
                    <div class="control">dmail_yjc@163.com</div>
                </div>
                <div class="form_item">
                    <label class="control_label">密码</label>
                    <el-input v-model="account.pass"></el-input>
                </div>
                <div class="form_item">
                    <el-button type="primary" style="margin-left: 70px;">确定</el-button>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { BasicInfo, AccountSecurityInfo } from '@/type/index.d.ts';

    @Component
    export default class PersonalInformation extends Vue {
        private activeName: string = '0';
        private dialogImageUrl: string = '';
        private dialogVisible: boolean = false;
        private form: BasicInfo = {
            name: '',
            realName: '',
            sex: '1',
            position: '',
        };
        private account: AccountSecurityInfo = {
            pass: '',
        };
        private handleRemove(file: any): void {
            console.log(file);
        }
        private handlePictureCardPreview(file: any): void {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
        // 基本资料提交
        private handleClick(tab: any, event: any): void {
            console.log(tab, event);
        }
        private onSubmit(): void {
            console.log('submit!');
        }
    }
</script>

<style scoped lang="less">
    .PersonalInformation {
        padding: 0 0 0 30px;
    }
    .tips {
        line-height: 36px;
        color: #d4922b;
        font-size: 14px;
        padding: 0 0 5px 35px;
    }
    .form_item {
        position: relative;
        min-height: 36px;
        padding: 7px 0;
        display: flex;
    }
    .control_label {
        width: 90px;
        line-height: 36px;
        height: 36px;
        font-size: 14px;
    }
    .control {
        line-height: 36px;
        min-height: 36px;
        font-size: 14px;
        position: relative;
    }
</style>
<style>
    .el-tabs__item {
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        padding: 0 35px;
    }
    .el-tabs__header {
        margin: 0 0 18px;
    }
    .el-upload--picture-card {
        float: left;
        margin-right: 30px;
    }
</style>
