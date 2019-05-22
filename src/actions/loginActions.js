// Login 화면에서 사용될 함수들이 모인 파일
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
import { sbConnect } from '../sendbirdActions';

export const sendbirdLogin = ({ userId, nickname }) => {
    return (dispatch) => {
        sbConnect(userId, nickname)
            .then((user) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user
                })
            })
            .catch((error) => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: error
                })
            });
    }
}