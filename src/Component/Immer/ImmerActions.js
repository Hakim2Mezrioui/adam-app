export const onAppend = (payload) => {
    return {type: "append", payload}
}

export const onDelete = (payload) => {
    return {type: "delete", payload}
}