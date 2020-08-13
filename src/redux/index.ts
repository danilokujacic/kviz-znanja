import { createStore } from 'redux';
import State from '../interfaces/State';
import User from '../interfaces/User';

const initialState: State = {
    user: null,
    quiz: false,
};

const quizzReducer = (
    state = initialState,
    { type, payload }: { type: string; payload: object },
) => {
    if (type === 'START_QUIZ') {
        return {
            ...state,
            quiz: true,
        };
    }
    if (type === 'FINISH_QUIZ') {
        return {
            ...state,
            quiz: false,
        };
    }
    if (type === 'REMOVE_USER') {
        return {
            ...state,
            user: null,
        };
    }
    if (type === 'SET_USER') {
        return {
            ...state,
            user: { ...(payload as User) },
        };
    }
    return state;
};

const store = createStore(quizzReducer);

export default store;
