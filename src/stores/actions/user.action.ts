// action types

export const user = {
    INITIALIZE: 'user/INITIALIZE' as const,
    GET_USER_STATE: 'user/GET_USER_STATE' as const,
    SET_USER_STATE: 'user/SET_USER_STATE' as const
};

// actions creators
export const userActions = {
    initialize: () => {
        return { type: user.INITIALIZE };
    },
    getUserState: () => {
        return { type: user.GET_USER_STATE };
    },
    setUserState: (payload: boolean) => {
        return { type: user.SET_USER_STATE, payload: payload };
    }
}