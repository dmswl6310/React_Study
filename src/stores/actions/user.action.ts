export const user = {
    SET_USER: 'user/SET_USER',
}

export const userActions = {
    setUser : (params:boolean) =>({
        type : user.SET_USER,
        payload : params,
    })
}