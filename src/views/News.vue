<template>
    <div class="News">
        <div class="no_news">
            <div class="no_img">
                <img src="../assets/no_message.png" alt="">
            </div>
            <div class="tips">暂无消息</div>
        </div>


    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class News extends Vue {

    }
</script>

<style scoped lang="less">
    .News {
        width: 100%;
        height: 100vh;
    }
    .no_news{
        margin-top: 15%;
        width: 100%;
    }
    .no_img {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 131px;
        img {
            width:auto;
            height:auto;
            max-width:100%;
            max-height:100%;
        }
    }
    .tips {
        text-align: center;
        margin-top: 19px;
        font-size: 15px;
        color: #666;
        margin-left: -19px;
    }
</style>
