import { INCREMENT,DECREMENT,RESET, INCREMENT_BY_VALUE, DECREMENT_BY_VALUE } from "./actionTypes";

export const increment = ()=>{
    return{
        type: INCREMENT
    }
}

export const decrement = ()=>{
    return{
        type: DECREMENT
    }
}

export const reset = ()=>{
    return{
        type: RESET
    }
}

export const incrementByValue = (payload)=>{
    return{
        type: INCREMENT_BY_VALUE,
        payload
    }
}

export const decrementByValue = (payload)=>{
    return{
        type: DECREMENT_BY_VALUE,
        payload
    }
}

