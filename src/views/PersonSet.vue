<template>
    <div class="PersonSet">
        <div>个人设置</div>
        <ul class="set_menu">
            <router-link to="followNotification"><li>关注通知</li></router-link>
            <router-link to="personalInformation"><li>个人信息</li></router-link>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class PersonSet extends Vue {

    }
</script>

<style scoped lang="less">
    .PersonSet {
        padding: 30px 20px;
    }
    .set_menu {
        width: 500px;
        margin: 20px 0;
        background: #fbfbfb;
        border: 1px solid #f0f0f0;
        border-radius: 4px;
        li {
            padding: 13px 15px;
            font-weight: bold;
            width: 470px;
            text-decoration: none;
            color: #3582fb;
            cursor: pointer;
        }
        li:last-child {
            border-top: 1px solid #f0f0f0;
        }
        li:hover {
            color: #84b4ff;
        }
    }
</style>
