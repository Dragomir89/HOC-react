import { CHANGE_AUTH } from './types'

export default {
    changeAuth: (isLoggedIn) => {
        return{
            type: CHANGE_AUTH,
            payload: isLoggedIn 
        }
    }
}