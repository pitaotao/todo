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

// 首页
export interface OptionInfo {
    icon: string;
    value: string;
}
