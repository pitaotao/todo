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
            <el-button plain>登录</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Form, FormItem, Input, Button } from 'element-ui';
    import { LoginParams } from '@/type';

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
