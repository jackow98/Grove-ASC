const INITIAL_STATE = {
    user: null
};

export default (state = INITIAL_STATE, {type, payload}) => {

    switch (type) {

        case 'LOAD_USER':
            if (!(payload === {})) {
                return {...state, user: payload}
            }
            break;

        default:
            return state
    }
}

