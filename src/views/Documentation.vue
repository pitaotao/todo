<template>
    <div class="Documentation">
        <div class="documentation_tip">我的文档</div>
        <div class="operate">
            <div class="operate_btn">
                <el-dropdown>
                    <el-button type="primary" class="new_add_btn">
                        新建<i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><div @click="dialogFormVisible = true"><i class="el-icon-guide" style="color: #3582fb;"></i>思维导图</div></el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-document" style="color: #3582fb;"></i>文档</el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-folder" style="color: #3582fb;"></i>文件夹</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed">
                    <el-button size="small" type="primary" class="upload_btn">上传</el-button>
                </el-upload>
                <el-button v-show="deleteBtn" class="delete_btn" plain>删除</el-button>
            </div>
        </div>
        <div class="document_box">
            <div class="document_box_left">
                <ul>
                    <li class="bar" v-for="(item, index) in bars" :key="index" @click="handleDocument(index)" :class="{baring: index==idx}">
                        <i :class="item.icon"></i>
                        {{item.value}}
                    </li>
                </ul>
            </div>
            <div class="document_box_line"></div>
            <div class="document_box_right">
                <AboutMyDocument :pageId="pageId"></AboutMyDocument>
            </div>
        </div>

<!--    新建弹框    -->
        <el-dialog title="新建思维导图" :visible.sync="dialogFormVisible" style="margin-top: 10vh;">
            <div class="radio_box">
                <el-radio v-model="radio" label="1">个人文档</el-radio>
                <el-radio v-model="radio" label="2">项目文档</el-radio>
            </div>
            <el-input
                    placeholder="输入新导图的名称"
                    v-model="guideName"
                    clearable>
            </el-input>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>


    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import AboutMyDocument from '@/components/AboutMyDocument.vue';
    import { NewAdd, BarsInfo } from '@/type/index.d.ts';

    @Component({
        components: {
            AboutMyDocument,
        },
    })
    export default class Documentation extends Vue {
        private pageId: number = 0;
        private idx: number = 0;
        private radio: string = '1';
        private guideName: string = '';
        private dialogFormVisible: boolean = false;
        private deleteBtn: boolean = false;
        private bars: BarsInfo[] = [
            {
                icon: 'el-icon-document-add',
                value: '我创建的',
            },
            {
                icon: 'el-icon-star-off',
                value: '我关注的',
            },
            {
                icon: 'el-icon-user',
                value: '我参与协作的',
            },
            {
                icon: 'el-icon-view',
                value: '最近浏览',
            },
        ];
        private form: NewAdd[] = [];
        private handleRemove(file: any, fileList: any): void {
            console.log(file, fileList);
        }
        private handlePreview(file: any): void {
            console.log(file);
        }
        private handleExceed(files: any, fileList: any): void {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        }
        private beforeRemove(file: any, fileList: any): any {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
        private handleDocument(index: any): void {
            this.idx = index;
            this.pageId = index;
        }
    }
</script>

<style scoped lang="less">
    .Documentation{
        width: 100%;
        height: 100vh;
        background: #fff;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .documentation_tip {
        position: fixed;
        top: 0;
        left: 64px;
        right: 0;
        padding-left: 15px;
        font-size: 16px;
        background: #fff;
        border-bottom: 1px solid #ececec;
        width: 100%;
        height: 39px;
        line-height: 39px;
        z-index: 99;
    }
    .operate {
        width: 100%;
        padding: 8px 15px;
        border-bottom: 1px solid #ececec;
        position: fixed;
        z-index: 99;
        top: 40px;
        left: 62px;
        right: 0;
        background-color: #fff;
    }
    .operate_btn {
        display: flex;
    }
    .new_add_btn {
        width: 100px;
        height: 35px;
        font-size: 14px;
        text-align: center;
        margin-right: 10px;
        background-color: #3582fb;
    }
    .upload_btn {
        width: 100px;
        height: 35px;
        font-size: 14px;
        text-align: center;
        line-height: 0;
        color: #3582fb;
        background-color: #fff;
        margin-right: 10px;
    }
    .el-dropdown {
        vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
        margin-left: 15px;
    }
    .el-icon-arrow-down {
        font-size: 14px;
    }
    .document_box {
        display: flex;
        flex-flow: row;
        margin-top: 92px;
    }
    .document_box_left {
        flex: 1.13;
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            li {
                list-style: none;
                height: 44px;
                line-height: 44px;
                color: #333;
                font-size: 14px;
                padding: 0 0 0 20px;
                border-left: 3px solid transparent;
                cursor: pointer;
                i {
                    color: #a9b4c8;
                    font-size: 20px;
                    margin-right: 10px;
                    font-weight: 600;
                }
            }
            .baring {
                border-left-color: #5091f9;
                background-color: #edf2ff;
                i {
                    color: #5091f9;
                }
            }
            .bar:hover {
                border-left-color: #5091f9;
                background-color: #edf2ff;
                i {
                    color: #5091f9;
                }
            }
        }
    }
    .document_box_line {
        position: fixed;
        width: 5px;
        top: 0;
        bottom: 0;
        left: 275px;
        z-index: 9;
        border-right: 1px solid #ececec;
    }
    .document_box_right {
        flex: 8.5;
    }
    .radio_box {
        margin-bottom: 20px;
    }
    .delete_btn {
        width: 100px;
        height: 35px;
        font-size: 14px;
        text-align: center;
        line-height: 0;
        color: #3582fb;
        background-color: #fff;
        border-color: #3582fb;
    }
</style>
<style>
    .Documentation .el-dialog {
        width: 380px;
    }
    .Documentation .el-dialog__title {
        font-size: 14px;
        color: #3f4a56;
    }
    .Documentation .el-dialog__header {
        padding: 10px 20px 10px;
        border-bottom: 1px solid #f2f2f2;
    }
    .Documentation .el-dialog__headerbtn {
        position: absolute;
        top: 14px;
    }
    .Documentation .el-dialog .el-button--primary, .Documentation .el-dialog .el-button+.el-button {
        min-width: 60px;
        height: 30px;
        line-height: 5px;
        border-radius: 2px;
    }
    .Documentation .el-dialog .el-input__inner {
        border-top: none;
        border-radius: 0;
        border-left: none;
        border-right: none;
    }
</style>
