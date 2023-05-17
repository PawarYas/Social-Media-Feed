const initialState = {
    like: 0,
    dislike: 0
};

const changeValue = (state = initialState, action) => {
    switch (action.type) {
        case "LIKE": return { ...state,like: state.like + 1 }

        case "DISLIKE": return { ...state,dislike: state.dislike - 1 }

        default: return state;
    }
}

export default changeValue;