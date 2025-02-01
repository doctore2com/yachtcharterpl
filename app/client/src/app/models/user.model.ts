export interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    roles?: string[];
}

export interface LoginResponse {
    token: string;
    id: number;
    username: string;
    email: string;
    roles: string[];
}