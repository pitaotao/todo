// 首先引入Mock
import urls from '@/utils/urls';
import * as Mock from 'mockjs';

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600',
});

const DEBUG = true; // debug 总开关
const mockData: any = {
    getLoginData: {
        debug: true,
        data: {
            code: '200',
            msg: '操作成功',
            data: {
                'count': '@natural(10, 100000)',
                'list|1-10': [
                    {
                        email: /^[a-z0-9]+([._\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
                        password: '@natural(10, 100000)',
                    },
                ],
            },
        },
    },
};

const mockTest = (url: any) => {
    if (!DEBUG) {
        return false;
    }
    for (const key in mockData) {
        if (mockData[key].debug === true && url[key] !== undefined) {
            Mock.mock(url[key], mockData[key].data);
            console.log('urls[key]', url[key]);
        }
    }
};

mockTest(urls);
