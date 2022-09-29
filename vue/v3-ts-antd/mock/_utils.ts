// code data error 封装
// code -1 未登录 0 没有错误
export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
    return {
        code,
        result,
        message,
        type: 'error',
    }
}
// 泛型的调用
export function resultSuccess<T>(result: T, { message = 'OK' } = {}) {
    return {
        code: 0,
        result,
        message,
        type: 'success'
    }
}