const todoReducer = (state, action) => {
    const {type, payload } = action;

    switch (action.type) {
        case 'ADDTODO':
            let obj = {
                title: payload,
                id: Date.now()
            }
            return [...state, obj]
            case 'DELETETODO':
                let retArr = state.filter((item)=>{
                    return item.id !== payload
                })
                return [...retArr]
                default:
                    return state;
    }
}

export { todoReducer }