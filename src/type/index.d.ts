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
