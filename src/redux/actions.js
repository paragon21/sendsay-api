export const login = () => ({
    action: "LOGIN"
})

export const logout = () => ({
    action: "LOGOUT"
})

export const initialize = () => ({
    action: "INITIALIZE"
})

export const setSessionApiKey = key => ({
    action: "SET_SESSION_KEY", 
    payload: {
        key: key
    }
})

export const getSessionApiKey = () => ({
    action: "GET_SESSION_KEY"
})