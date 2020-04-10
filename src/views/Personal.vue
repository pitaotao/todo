<template>
    <div class="Personal">
        <div class="person_bar">
            <div class="person_bar_avatar_box">
                <div class="person_bar_avatar">
                    <img src="https://www.tapd.cn/32667975/users/avatar/1442715240/jpg/0/middle?t=f981f785c12e8d40511b" alt="">
                </div>
                <div class="person_bar_name">屁桃</div>
            </div>
            <ul>
                <li v-for="(item, index) in bars" :key="index" @click="clickBar(index)" :class="{selectbars: index==current}"><i :class="item.icon"></i>{{item.name}}</li>
            </ul>
        </div>
        <div style="width: 90%">
            <router-view></router-view>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator';
    import { PersonBarInfo } from '@/type/index.d.ts';

    @Component
    export default class Personal extends Vue {
        private current: number = 0;
        private pjtid: any = '';
        private bars: PersonBarInfo[] = [
            {
                icon: 'el-icon-data-analysis',
                name: '我的动态',
            },
            {
                icon: 'el-icon-setting',
                name: '个人设置',
            },
            {
                icon: 'el-icon-question',
                name: '问题反馈',
            },
        ];
        private clickBar(index: number): void {
            this.current = index;
            if (index === 0) {
                this.$router.push({path: 'dynamic'});
            } else if (index === 1) {
                this.$router.push({path: 'personSet'});
            } else if (index === 2) {
                this.$router.push({path: 'problemFeedback'});
            }
        }
        @Watch('$route')
        private routechange(to: any, from: any) {
            console.log(to);
            if (to.name === 'Dynamic') {
                this.current = 0;
            } else if (to.name === 'PersonSet') {
                this.current = 1;
            } else if (to.name === 'ProblemFeedback') {
                this.current = 2;
            }
        }




    }
</script>

<style scoped lang="less">
    .Personal {
        display: flex;
        width: 100%;
    }
    .person_bar {
        margin-top: -2px;
        position: relative;
        height: 100vh;
        background: #F1F1F1;
        float: left;
        /*width: 180px;*/
        width: 10%;
        .person_bar_avatar_box {
            padding: 20px 10px;
            text-align: center;
            .person_bar_avatar {
                width: 96px;
                height: 96px;
                margin-left: 30px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 2px solid #fff;
                }
            }
            .person_bar_name {
                font-size: 14px;
                font-weight: bold;
                color: #000;
                margin-top: 15px;
            }
        }
        ul {
            li {
                color: #222;
                padding: 12px 5px 12px 25px;
                border-top: 1px solid #FDFDFD;
                border-bottom: 1px solid #E9E9E9;
                font-size: 13px;
                line-height: 20px;
                text-decoration: none;
                cursor: pointer;
                background: #fff;
                i {
                    margin-right: 8px;
                    vertical-align: top;
                    font-size: 20px;
                    color: #ccc;
                }
            }
            li:hover {
                color: #4f90f7;
                i {
                    color: #4f90f7;
                }
            }
            .selectbars, .selectbars:hover {
                background: #4f90f7;
                color: #FFF;
                border-bottom: 1px solid #4f90f7;
                border-top: 1px solid #4f90f7;
                i {
                    color: #FFF;
                }
            }
        }
    }
</style>
