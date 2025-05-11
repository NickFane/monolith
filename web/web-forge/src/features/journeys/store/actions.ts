export const ACTION_SET_FIRST_NAME = "journey/setFirstName"
export const setFirstName = (firstName: string) => {
    return { type: ACTION_SET_FIRST_NAME, payload: firstName }
}

export const ACTION_SET_LAST_NAME = "journey/setLastName"
export const setLastName = (lastName: string) => {
    return { type: ACTION_SET_LAST_NAME, payload: lastName }
}