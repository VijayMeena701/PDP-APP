import { LOADING_DATA, SET_EVENT, SET_EVENTS } from "../types";

const initialState = {
    events: [],
    event: {},
    loading: false
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            };
        case SET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false
            };
        case SET_EVENT:
            return {
                ...state,
                event: action.payload
            };
        // case LIKE_SCREAM:
        // case UNLIKE_SCREAM:
        //     let index = state.screams.findIndex((scream) => scream.screamId === action.payload.screamId);
        //     state.screams[index] = action.payload;
        //     if (state.scream.screamId === action.payload.screamId) {
        //         state.scream = action.payload;
        //     }
        //     return {
        //         ...state
        //     };
        // case DELETE_SCREAM:
        //     index = state.screams.findIndex((scream) => scream.screamId === action.payload);
        //     state.screams.splice(index, 1);
        //     return {
        //         ...state
        //     };
        // case ADD_POST:
        //     return {
        //         ...state,
        //         screams: [
        //             action.payload,
        //             ...state.screams
        //         ]
        //     };
        // case SUBMIT_COMMENT:
        //     return {
        //         ...state,
        //         scream: {
        //             ...state.scream,
        //             comments: [action.payload, ...state.scream.comments]
        //         }
        //     }
        default:
            return state;
    }
};

export default dataReducer;