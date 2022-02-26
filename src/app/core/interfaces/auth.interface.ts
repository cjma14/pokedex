export interface User {
    email: string;
    password: string;
}
export interface  Session {
    token: string;
    user: User;
}