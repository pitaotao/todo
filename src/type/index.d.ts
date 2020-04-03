// 登录
export interface LoginParams {
    email: string;
    password: string;
}
export interface UserInfo {
    _id: string;
    name: string;
    avatar: string | any;
}

// 工作台
export interface OptionInfo {
    icon: string;
    value: string;
}
export interface TableInfo {
    ID: number;
    title: string;
    type: string;
    iteration: string;
    priority: string;
    handler: string;
    founder: string;
}

// 我的文档
export interface NewAdd {
    name: string;
}
export interface BarsInfo {
    icon: string;
    value: string;
}
export interface DocumentTypeInfo {
    value: string;
}
export interface CategoryInfo {
    value: string;
}
export interface TableDataInfo {
    icon: string;
    title: string;
    date: string;
    name: string;
}
export interface ViewedInfo {
    icon: string;
    title: string;
    belong: string;
    date: string;
    name: string;
}
export interface StatusListInfo {
    name: string;
    img: string;
}

// 我的项目
export  interface ShrewdNavInfo {
    name: string;
}
