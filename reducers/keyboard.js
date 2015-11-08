import { TYPE_START, TYPE_PAUSE, TYPE_FINISH } from '../constants/ActionTypes'

const initialState = {
    status: TYPE_FINISH,
    score: 0,
    typingNum: 0
}


export default function keyboard(state = initialState, action) {
    switch(action.type){
        case TYPE_START:
           return Object.assign({},state, {
                    status: TYPE_START,
                    typingNum: action.num,
                })
            break;
        case TYPE_PAUSE:
            return Object.assign({},state, {
                    status: TYPE_PAUSE,
                })
            break;
        case TYPE_FINISH:
            return Object.assign({},state, {
                    status: TYPE_FINISH,
                    score: action.score,
                    typingNum: action.num
                })
            break;
        default:
            return state
            break;
    }
}