// reducers 에 있는 다양한 리듀서들을 합침

import { combineReducers } from 'redux';
import login from './loginReducers';
import menu from './menuReducer'
import profile from './profileReducer'
import openChannel from './openChannelReducer'

export default combineReducers({
    login,
    menu,
    profile,
    openChannel
});