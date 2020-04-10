<template>
    <div class="Dynamic">
<!--        无操作-->
        <div class="no_do">过去一周内，您无TODO相关操作</div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Dynamic extends Vue {

    }
</script>

<style scoped lang="less">
    .no_do {
        border: 1px solid #e9e9e9;
        background: #fdfdfd;
        padding: 30px;
        text-align: center;
        font-size: 14px;
        color: #666;
        border-bottom: 1px solid #e3e3e3;
        box-shadow: 0 2px 0 rgba(0,0,0,0.03);
        margin: 150px 80px;
    }
</style>
