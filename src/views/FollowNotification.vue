<template>
    <div class="FollowNotification">
        <div class="follow_tip">关注通知</div>
        <div class="follow_from">
            <div class="follow_message" v-for="(item,index) in follows" :key="index">
                <div class="follow_title">{{item.title}}</div>
                <div class="follow_content" v-for="(item2, idx) in item.label">
                    <div class="follow_label">{{item2.name}}</div>
                    <el-checkbox-group v-for="(item3, cur) in item2.group" :key="cur" v-model="checkboxArr"  @change="handleCheckedCitiesChange">
                        <el-checkbox :label="item3.id">{{item3.checkName}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <el-button type="primary">保存</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {  FollowNotificInfo } from '@/type/index.d.ts';

    @Component
    export default class FollowNotification extends Vue {
        private checkboxArr: number[] = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47];
        private follows: FollowNotificInfo[] = [
            {
                title: '需求通知',
                label: [
                    {
                        name: '关注人需要收到邮件，当需求:',
                        group: [
                            {
                                id: 0,
                                checkName: '更新',
                            },
                            {
                                id: 1,
                                checkName: '更新状态',
                            },
                            {
                                id: 2,
                                checkName: '删除',
                            },
                            {
                                id: 3,
                                checkName: '添加评论',
                            },
                        ],
                    },
                    {
                        name: '关注人需要收到站内信，当需求:',
                        group: [
                            {
                                id: 4,
                                checkName: '更新',
                            },
                            {
                                id: 5,
                                checkName: '更新状态',
                            },
                            {
                                id: 6,
                                checkName: '删除',
                            },
                            {
                                id: 7,
                                checkName: '添加评论',
                            },
                        ],
                    },
                    {
                        name: '关注人需要收到公众号消息，当需求:',
                        group: [
                            {
                                id: 8,
                                checkName: '更新',
                            },
                            {
                                id: 9,
                                checkName: '更新状态',
                            },
                            {
                                id: 10,
                                checkName: '删除',
                            },
                            {
                                id: 11,
                                checkName: '添加评论',
                            },
                        ],
                    },
                ],
            },
            {
                title: '任务通知',
                label: [
                    {
                        name: '关注人需要收到邮件，当任务:',
                        group: [
                            {
                                id: 12,
                                checkName: '更新',
                            },
                            {
                                id: 13,
                                checkName: '更新状态',
                            },
                            {
                                id: 14,
                                checkName: '删除',
                            },
                            {
                                id: 15,
                                checkName: '添加评论',
                            },
                        ],
                    },
                    {
                        name: '关注人需要收到站内信，当任务:',
                        group: [
                            {
                                id: 16,
                                checkName: '更新',
                            },
                            {
                                id: 17,
                                checkName: '更新状态',
                            },
                            {
                                id: 18,
                                checkName: '删除',
                            },
                            {
                                id: 19,
                                checkName: '添加评论',
                            },
                        ],
                    },
                    {
                        name: '关注人需要收到公众号消息，当任务:',
                        group: [
                            {
                                id: 20,
                                checkName: '更新',
                            },
                            {
                                id: 21,
                                checkName: '更新状态',
                            },
                            {
                                id: 22,
                                checkName: '删除',
                            },
                            {
                                id: 23,
                                checkName: '添加评论',
                            },
                        ],
                    },
                ],
            },
            {
                title: '缺陷通知',
                label: [
                    {
                        name: '关注人需要收到邮件，当缺陷:',
                        group: [
                            {
                                id: 24,
                                checkName: '更新',
                            },
                            {
                                id: 25,
                                checkName: '更新状态',
                            },
                            {
                                id: 26,
                                checkName: '删除',
                            },
                            {
                                id: 27,
                                checkName: '添加评论',
                            },
                        ],
                    },
                    {
                        name: '关注人需要收到站内信，当缺陷:',
                        group: [
                            {
                                id: 28,
                                checkName: '更新',
                            },
                            {
                                id: 29,
                                checkName: '更新状态',
                            },
                            {
                                id: 30,
                                checkName: '删除',
                            },
                            {
                                id: 31,
                                checkName: '添加评论',
                            },
                        ],
                    },
                    {
                        name: '关注人需要收到公众号消息，当缺陷:',
                        group: [
                            {
                                id: 32,
                                checkName: '更新',
                            },
                            {
                                id: 33,
                                checkName: '更新状态',
                            },
                            {
                                id: 34,
                                checkName: '删除',
                            },
                            {
                                id: 35,
                                checkName: '添加评论',
                            },
                        ],
                    },
                ],
            },
            {
                title: '看板工作项通知',
                label: [
                    {
                        name: '关注人需要收到邮件，当工作项:',
                        group: [
                            {
                                id: 36,
                                checkName: '更新',
                            },
                            {
                                id: 37,
                                checkName: '更新状态',
                            },
                            {
                                id: 38,
                                checkName: '删除',
                            },
                            {
                                id: 39,
                                checkName: '添加评论',
                            },
                        ],
                    },
                    {
                        name: '关注人需要收到站内信，当工作项:',
                        group: [
                            {
                                id: 40,
                                checkName: '更新',
                            },
                            {
                                id: 41,
                                checkName: '更新状态',
                            },
                            {
                                id: 42,
                                checkName: '删除',
                            },
                            {
                                id: 43,
                                checkName: '添加评论',
                            },
                        ],
                    },
                    {
                        name: '关注人需要收到公众号消息，当工作项:',
                        group: [
                            {
                                id: 44,
                                checkName: '更新',
                            },
                            {
                                id: 45,
                                checkName: '更新状态',
                            },
                            {
                                id: 46,
                                checkName: '删除',
                            },
                            {
                                id: 47,
                                checkName: '添加评论',
                            },
                        ],
                    },
                ],
            },
        ];
        private handleCheckedCitiesChange(value: string): void {
            console.log(value);
        }
    }
</script>

<style scoped>
    .FollowNotification {
        padding: 20px;
    }
    .follow_tip {
        font-size: 16px;
        margin-bottom: 20px;
        color: #666;
        font-weight: bold;
    }
    .follow_message {
        padding: 10px;
    }
    .follow_title {
        border-bottom: 1px solid #eee;
        padding-bottom: 5px;
        margin-bottom: 10px;
    }
    .follow_content {
        line-height: 26px;
        display: flex;
    }
    .follow_label {
        width: 370px;
    }

</style>
<style>
    .el-checkbox:last-of-type {
         margin-right: 30px;
    }
</style>
