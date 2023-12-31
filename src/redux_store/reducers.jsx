const initialState = {
    value: '',
};
// "inputtext_of_component_b" is used for updating the state when action (type: function) is provided.
const inputtext_of_component_b = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMPONENTB_VALUE':
            return {
                ...state,
                value: action.value,
            };
        default:
            return state;
    }
};

export default inputtext_of_component_b;