<template>
    <div class="login">
        <div class="login_box">
            <Form>
                <FormItem label="邮箱" :label-width="formLabelWidth">
                    <Input  placeholder="邮箱" v-model="params.email" clearable></Input>
                </FormItem>
                <FormItem label="密码" :label-width="formLabelWidth">
                    <Input type="password" placeholder="密码" v-model="params.password"></Input>
                </FormItem>
            </Form>
            <el-button plain @click="loginOk">登录</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Emit, Vue } from 'vue-property-decorator';
    import {Form, FormItem, Input, Button, Message} from 'element-ui';
    import { LoginParams, UserInfo } from '@/type';
    import config from '@/utils/config';

    @Component({
        components: {
            Form,
            FormItem,
            Input,
            Button,
        },
    })
    export default class Login extends Vue {
        private formLabelWidth: string = '60px';
        private params: LoginParams = {
            email: '',
            password: '',
        };

        private loginOk(): void {
            const reg = new RegExp(
                '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
            );
            if (!this.params.email) {
                Message.warning('邮箱不能为空！');
                return;
            } else if (!reg.test(this.params.email)) {
                Message.warning('邮箱格式不对！');
                return;
            } else if (!this.params.password) {
                Message.warning('密码不能为空！');
                return;
            }
            this.submit();
        }

        @Emit('OK')
        private async submit(): Promise<void> {
            const data: UserInfo = await this.$https.post(
                this.$urls.login,
                this.params,
            );
            const userInfo: UserInfo = {
                _id: data._id,
                name: data.name,
                avatar: data.avatar,
            };
            window.sessionStorage.userInfo = JSON.stringify(userInfo);
            Message.success('登录成功');
        }
    }
</script>

<style scoped>
    .login {
        position:fixed;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        min-width: 1000px;
        z-index:-10;
        zoom: 1;
        background-color: #fff;
        background: url(../assets/backgound.gif);
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
        display: flex;
        justify-content:center
    }
    .login_box{
        width:100%;
        height:100vh;
        display: flex;
        /*align-content:center;*/
        align-items: center;  /* 垂直居中 */
        justify-content:center;  /* 水平居中 */
        flex-direction:column;
    }

</style>
<style>
    .el-form-item__label {
        color: #ffffff;
    }
</style>
