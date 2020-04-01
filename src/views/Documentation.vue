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
                        <el-dropdown-item><i class="el-icon-guide" style="color: #3582fb;"></i>思维导图</el-dropdown-item>
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
            </div>
        </div>
        <div class="document_box">
            <div class="document_box_left">
                <ul>
                    <li class="bar" @click="handleDocument(1)"><i class="el-icon-document-add"></i>我创建的</li>
                    <li class="bar" @click="handleDocument(2)"><i class="el-icon-star-off"></i>我关注的</li>
                    <li class="bar" @click="handleDocument(3)"><i class="el-icon-user"></i>我参与协作的</li>
                    <li class="bar" @click="handleDocument(4)"><i class="el-icon-view"></i>最近浏览</li>
                </ul>
            </div>
            <div class="document_box_line"></div>
            <div class="document_box_right">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Documentation extends Vue {
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
        private handleDocument(index: number): void {
            if (index === 1) {
                this.$router.push({path: '/documentation/AboutMyDocument/1'});
            } else if (index === 2) {
                this.$router.push({path: '/documentation/AboutMyDocument/2'});
            } else if (index === 3) {
                this.$router.push({path: '/documentation/AboutMyDocument/3'});
            } else if (index === 4) {
                this.$router.push({path: '/documentation/AboutMyDocument/4'});
            }
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
        line-height: 0;
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
</style>
