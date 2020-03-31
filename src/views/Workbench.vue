<template>
    <div class="Workbench">
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
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { OptionInfo } from '@/type';

    @Component
    export default class Workbench extends Vue {
        private value: string = '';
        private OptionValue: OptionInfo[] = [
            {
                icon: 'el-icon-s-tools\n',
                value: '我的代办',
            },
            {
                icon: 'el-icon-delete-solid\n',
                value: '我的已办',
            },
            {
                icon: 'el-icon-delete\n',
                value: '我创建的',
            },
            {
                icon: 'el-icon-setting\n',
                value: '我关注的',
            },
        ];
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
        display: flex;
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
    .show_style {
        margin-left: 10px;
    }
    .el-input.is-disabled .el-input__inner {
        background-color: #F5F7FA;
        border-color: #E4E7ED;
        color: #3582fb;
        cursor: not-allowed;
    }
</style>
