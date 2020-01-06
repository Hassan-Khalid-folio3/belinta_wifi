import { CONNECT } from "../constants/actiontypes";

const initialState = {
    user: []
} 

function connectionReducer(state=initialState, action){
    switch(action.type) {
        case CONNECT:
          return Object.assign({}, state, 
              {
                users: [...state.users, action.user]
               }); 
         default: 
           return state;
     }
}

export default connectionReducer;