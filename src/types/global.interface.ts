export interface userDataType {
    u_id: number,
    u_name: string,
    f_name: string,
    l_name: string,
}

export interface AuthContextType {
    userData: userDataType | null,
    setUserData: (data: userDataType) => void,
    clearUserData: () => void,
}
