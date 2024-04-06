export interface userDataType {
    username: string,
    password: string,
}

export interface AuthContextType {
    userData: userDataType | null,
    setUserData: (data: userDataType) => void,
    clearUserData: () => void,
}
