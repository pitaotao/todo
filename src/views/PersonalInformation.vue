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
                <div v-if="safeNumber">
                    <div class="tips">进入帐号安全设置前，请输入你的密码以确保帐号安全</div>
                    <div class="form_item">
                        <label class="control_label">登录邮箱</label>
                        <div class="control">{{email}}</div>
                    </div>
                    <div class="form_item">
                        <label class="control_label">密码</label>
                        <el-input v-model="account.pass"></el-input>
                    </div>
                    <div class="form_item">
                        <el-button @click="submitUserPass" type="primary" style="margin-left: 70px;">确定</el-button>
                    </div>
                </div>
                <div v-if="!safeNumber">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item :title="'邮箱账号 ' + email" name="1">
                            <el-form label-width="100px">
                                <el-form-item label="新邮箱地址">
                                    <el-input  placeholder="邮箱" v-model="newEmail" clearable></el-input>
                                </el-form-item>
                                <div class="new_email_tips"><i class="el-icon-info"></i>系统会发送确认邮件到您的新邮箱中, 请查收后点击邮件中的地址完成修改</div>
                                <el-form-item>
                                    <el-button type="primary" @click="submitNewEmail">发送确认邮件</el-button>
                                </el-form-item>
                            </el-form>
                        </el-collapse-item>
                        <el-collapse-item :title="'手机号码' + phone" name="2">
                            <el-form label-width="100px">
                                <el-form-item label="新手机号">
                                    <el-input  placeholder="你的手机号码" v-model="newPhone" clearable></el-input>
                                </el-form-item>
                                <el-form-item label="验证码">
                                    <el-input  placeholder="验证码" v-model="captcha" clearable></el-input>
                                    <el-button @click="getCaptcha">获取短信验证码</el-button>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitPhoneInfo">确定</el-button>
                                </el-form-item>
                            </el-form>
                        </el-collapse-item>
                        <el-collapse-item title="登录密码" name="3">
                            <el-form label-width="100px">
                                <el-form-item label="原密码">
                                    <el-input  placeholder="原密码" v-model="changePassword.oldPassword" clearable></el-input>
                                </el-form-item>
                                <el-form-item label="新密码">
                                    <el-input  placeholder="新密码" v-model="changePassword.newPassword" clearable></el-input>
                                </el-form-item>
                                <el-form-item label="重复密码">
                                    <el-input  placeholder="再输一次" v-model="changePassword.repeatPassword" clearable></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitChangePass">确认修改</el-button>
                                </el-form-item>
                            </el-form>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { BasicInfo, AccountSecurityInfo, ChangePasswordInfo } from '@/type/index.d.ts';

    @Component
    export default class PersonalInformation extends Vue {
        private activeName: string = '0';
        private dialogImageUrl: string = '';
        private dialogVisible: boolean = false;
        private email: string = '';   // local 里的email
        private loginPass: string = '';  // local 里的登录密码
        private safeNumber: boolean = true;  // 判断账号安全显示
        private phone: string = '';  // local 里的电话号码
        private newEmail: string = '';  // 新邮箱地址
        private activeNames: string[] = [];  // 账号安全面板展开数组
        private newPhone: string = '';  // 新绑定手机号
        private captcha: string = '';  // 手机号验证码
        private changePassword: ChangePasswordInfo = {
            oldPassword: '',
            newPassword: '',
            repeatPassword: '',
        };  // 修改密码
        private form: BasicInfo = {
            name: '',
            realName: '',
            sex: '1',
            position: '',
        };
        private account: AccountSecurityInfo = {
            pass: '',
        };
        // 新邮箱
        private submitNewEmail(): void {
            const reg = new RegExp(
                '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
            );
            if (!this.newEmail) {
                this.$Message.warning('邮箱不能为空！');
                return;
            } else if (!reg.test(this.newEmail)) {
                this.$Message.warning('邮箱格式不对！');
                return;
            } else if (this.newEmail === this.email) {
                this.$Message.warning('邮箱已存在！');
                return;
            }
            this.$Message.success('可以提交了');
        }
        // 头像
        private handleRemove(file: any): void {
            console.log(file);
        }
        // 获取短信验证码
        private getCaptcha(): void {
            if (!this.newPhone) {
                this.$Message.error('手机号不能为空！');
                return;
            } else if (!/^[1]([3-9])[0-9]{9}$/.test(this.newPhone)) {
                this.$Message.error('手机号不正确！');
                return;
            }
        }
        // 新绑定手机号
        private submitPhoneInfo(): void {
            if (!this.newPhone) {
                this.$Message.error('手机号不能为空！');
                return;
            } else if (!/^[1]([3-9])[0-9]{9}$/.test(this.newPhone)) {
                this.$Message.error('手机号不正确！');
                return;
            } else if (!this.captcha) {
                this.$Message.error('验证码不能为空！');
                return;
            }
            this.$Message.success('可以提交了');
        }
        // 密码修改
        private submitChangePass(): void {
            if (!this.changePassword.oldPassword) {
                this.$Message.error('原密码不能为空！');
                return;
            } else if (!this.changePassword.newPassword) {
                this.$Message.error('新密码不能为空！');
                return;
            } else if (!this.changePassword.repeatPassword) {
                this.$Message.error('重复密码不能为空！');
                return;
            } else if (this.changePassword.oldPassword !== this.loginPass ) {
                this.$Message.error('原密码错误！');
                return;
            } else if (this.changePassword.newPassword !== this.changePassword.repeatPassword ) {
                this.$Message.error('新密码和重复密码输入不一致！');
                return;
            }
            this.$Message.success('可以提交了');
        }
        private handlePictureCardPreview(file: any): void {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
        private submitUserPass(): void {
            if (this.account.pass !== '' && this.account.pass === this.loginPass) {
                this.safeNumber = false;
            } else {
                this.$Message.error('密码错误');
            }
        }
        private handleClick(tab: any, event: any): void {
            console.log(tab, event);
        }
        // 基本资料提交
        private onSubmit(): void {
            console.log('submit!');
        }
        private handleChange(val: any): void {
            console.log(val);
        }
        private created(): void {
            const userInfo = localStorage.getItem('userInfo');
            if (userInfo && userInfo !== 'undefined' && userInfo !== 'null') {
                const useInfo = JSON.parse(userInfo);
                this.email = useInfo.email;
                this.loginPass = useInfo.password;
                this.phone = useInfo.phone;
            }
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
    .new_email_tips {
        background-color: #d3e3fc;
        width: 600px;
        margin: 5px 0 22px 14px;
        padding-left: 16px;
        height: 50px;
        line-height: 50px;
        color: #518fff;
        font-size: 14px;
        display: inline-block;
        i {
            margin-right: 8px;
            font-size: 20px;
        }
    }
</style>
<style>
    .PersonalInformation .el-tabs__item {
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        padding: 0 35px;
    }
    .PersonalInformation .el-tabs__header {
        margin: 0 0 18px;
    }
    .PersonalInformation .el-upload--picture-card {
        float: left;
        margin-right: 30px;
        overflow: auto;
    }
    .PersonalInformation .el-form-item__label {
        color: #000000;
    }
    .PersonalInformation .el-collapse {
        width: 680px;
    }
    .PersonalInformation .el-collapse-item__header {
        color: #666;
        background-color: #f8f8f8;
        padding: 0 15px 0 47px;
    }
    .PersonalInformation .el-collapse-item__content {
        padding: 25px 0 0;
    }
    .PersonalInformation .el-collapse .el-input {
        width: 222px;
        margin-right: 10px;
    }
</style>
