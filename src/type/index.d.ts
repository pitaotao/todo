// 登录
export interface LoginParams {
    email: string;
    password: string;
}
export interface UserInfo {
    email: string;
    name: string;
    defaultAvatar: boolean;
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
export interface ShrewdNavInfo {
    name: string;
}
export interface LightweightNavInfo {
    name: string;
}


// 我的
export interface PersonBarInfo {
    icon: string;
    name: string;
}
export interface FollowNotificInfo {
    title: string;
    label: object[];
}
export interface BasicInfo {
    name: string;
    realName: string;
    sex: string;
    position: string;
}
export interface AccountSecurityInfo {
    pass: string;
}
export interface FeedbackTimeInfo {
    name: string;
}
export interface FeedTableInfo {
    desc: string;
    status: string;
    time: string;
}
export interface SubmitFeedbackInfo {
    problem: string;
}
