
export interface UserInfo {
    name: string
    age: number
}

export interface IAuthState {
    isLoggedIn: boolean
    userInfo: UserInfo

}
