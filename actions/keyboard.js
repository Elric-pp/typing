import * as types from '../constants/ActionTypes'

export function startTyping(num) {
    return {type: types.TYPE_START, num}
}

export function pause() {
    return {type: types.TYPE_PAUSE}
}

export function finishTyping(score, speed, num) {
    return {type: types.TYPE_FINISH, score, speed, num}
}