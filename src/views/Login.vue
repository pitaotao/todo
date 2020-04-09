<template>
    <div class="login">
        <div class="login_box">
            <el-form>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input  placeholder="邮箱" v-model="params.email" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input type="password" placeholder="密码" v-model="params.password"></el-input>
                </el-form-item>
            </el-form >
            <el-button @click="loginOk">登录</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Emit, Vue } from 'vue-property-decorator';
    import { LoginParams, UserInfo } from '@/type';
    import { Action } from 'vuex-class';

    @Component
    export default class Login extends Vue {
        private formLabelWidth: string = '60px';
        private params: LoginParams = {
            email: '',
            password: '',
        };
        @Action private saveUser!: any;
        private loginOk(): void {
            const reg = new RegExp(
                '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
            );
            if (!this.params.email) {
                this.$Message.warning('邮箱不能为空！');
                return;
            } else if (!reg.test(this.params.email)) {
                this.$Message.warning('邮箱格式不对！');
                return;
            } else if (!this.params.password) {
                this.$Message.warning('密码不能为空！');
                return;
            }
            this.submit();
        }

        @Emit('OK')
        private async submit(): Promise<void> {
            const userInfo: UserInfo = {
                email: this.params.email,
                name: '',
                defaultAvatar: false,
            };
            this.saveUser(this.params);
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            this.$Message.success('登录成功');
            this.$router.push('/');
        }
    }
</script>

<style lang="less" scoped>
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
