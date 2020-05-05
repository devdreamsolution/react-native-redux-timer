// Import

// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// Action Creators

function startTimer() {
    return {
        type: START_TIMER
    }
}

function restartTimer() {
    return {
        type: RESTART_TIMER
    }
}

function addSecond() {
    return {
        type: ADD_SECOND
    }
}

// Reducer

const TIME_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}

// Reducer Functions

function applyStartTimer(state) {
    return {
        ...state,
        isPlaying: true
    }
}

function applyRestartTimer(state) {
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyAddSecond(state) {
    if (state.elapsedTime < TIME_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    } else {
        return {
            ...state,
            isPlaying: false
        }
    }
}

// Export Action Creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}

export { actionCreators };

// Export Reducer

export default reducer;
