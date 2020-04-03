<template>
    <div class="AboutMyDocument">
        <div class="my_doc">
            <ul class="document_type" v-show="pageId==0">
                <li class="doc_type" v-for="(item, index) in docType" :key="index" @click="docTypeVal(index)" :class="{select_yes: index==idx}">
                    {{item.value}}
                </li>
            </ul>
            <ul class="document_category">
                <li class="doc_cate" v-for="(item, index) in docCate" :key="index" @click="dovCateVal(index)" :class="{category_yes: index==current}">
                    {{item.value}}
                </li>
            </ul>
        </div>
        <div v-show="pageId==0">
            <el-table
                    ref="multipleTable"
                    :data="tableArray"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="名称"
                        show-overflow-tooltip>
                    <template slot-scope="scope"><i class="doc_icon" :class="scope.row.icon"></i>{{ '&nbsp;' + scope.row.title }}</template>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="最近修改时间"
                        width="300">
                    <template slot-scope="scope">{{ scope.row.date +' '+ scope.row.name }}</template>
                </el-table-column>
            </el-table>
        </div>
        <div v-show="pageId==3">
            <el-table
                    :data="viewed"
                    style="width: 100%">
                <el-table-column
                        prop="title"
                        label="名称"
                        width="1050">
                    <template slot-scope="scope"><i class="doc_icon" :class="scope.row.icon"></i>{{ '&nbsp;' + scope.row.title }}</template>
                </el-table-column>
                <el-table-column
                        prop="belong"
                        label="所属项目"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="最近修改时间">
                    <template slot-scope="scope">{{ scope.row.date +' '+ scope.row.name }}</template>
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
    import { DocumentTypeInfo, CategoryInfo, TableDataInfo, ViewedInfo } from '@/type/index.d.ts';

    @Component
    export default class AboutMyDocument extends Vue {
        @Prop({default: 0}) private pageId!: number;
        private idx: number = 0;
        private current: number = 0;
        private multipleSelection: any[] = [];
        private docType: DocumentTypeInfo[] = [
            {
                value: '个人文档',
            },
            {
                value: '项目文档',
            },
        ];
        private docCate: CategoryInfo[] = [
            {
                value: '全部文件',
            },
            {
                value: '文件夹',
            },
            {
                value: '文档',
            },
            {
                value: '图片',
            },
            {
                value: '思维导图',
            },
            {
                value: '其他',
            },
        ];
        private tableArray: TableDataInfo[] = [
            {
                icon: 'el-icon-guide',
                title: 'todo1',
                date: '2016-05-03',
                name: '屁桃',
            },
            {
                icon: 'el-icon-document',
                title: 'todo2',
                date: '2016-05-03',
                name: '屁桃',
            },
            {
                icon: 'el-icon-folder',
                title: 'todo3',
                date: '2016-05-03',
                name: '屁桃',
            },
        ];
        private viewed: ViewedInfo[] = [
            {
                icon: 'el-icon-guide',
                title: 'todo1',
                belong: '轻量团队看板',
                date: '2016-05-03',
                name: '屁桃',
            },
        ];
        private docTypeVal(index: number): void {
            this.idx = index;
        }
        private dovCateVal(index: number): void {
            this.current = index;
        }
        @Emit('type')private send(type: boolean): boolean {
            console.log(type);
            return type;
        }
        private handleSelectionChange(val: any): any {
            this.multipleSelection = val;
            console.log(this.multipleSelection);
            if (this.multipleSelection.length === 0) {
                this.send(false);
            } else {
                this.send(true);
            }

        }
    }
</script>

<style scoped lang="less">
    .AboutMyDocument {
        padding: 10px;
    }
    .my_doc {
        margin-bottom: 10px;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    .document_type {
        display: flex;
    }
    .doc_type {
        display: inline;
        font-size: 14px;
        padding: 5px 15px;
        color: #8091a5;
        cursor: pointer;
    }
    .document_category {
        display: flex;
        width: 100%;
        padding: 5px 15px;
        margin-top: 16px;
    }
    .doc_cate {
        font-size: 14px;
        display: inline-block;
        color: #8091a5;
        margin-right: 30px;
        cursor: pointer;
    }
    .select_yes {
        color: #3582fb;
    }
    .category_yes {
        color: #3582fb;
        border-bottom: 2px solid #3582fb;
        padding-bottom: 5px;
    }
    .doc_icon {
        font-size: 34px;
        color: #4f8ef5;
    }
</style>
<style>
    .AboutMyDocument .el-table th>.cell {
        padding-left: 14px;
        font-size: 14px;
        color: #666;
    }
    .AboutMyDocument .el-checkbox__inner {
        width: 18px;
        height: 18px;
    }
    .AboutMyDocument .el-checkbox__inner::after {
        left: 6px;
        position: absolute;
        top: 3px;
    }
    .AboutMyDocument .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
        position: absolute;
        top: 7px;
    }
</style>
