export interface ReqParams {
    username: string;
    password: string;
}

export interface ResResult {
    login_status: number;
    st: string;
    token: string;
}