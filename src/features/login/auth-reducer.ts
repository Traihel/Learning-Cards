import axios, {AxiosError} from "axios";
import {authAPI, ChangeUserNameParamsType, LoginParamsType} from "../../api/api";
import {setAppErrorAC, setAppStatusAC} from "../../app/app-reducer";
import {AppThunk} from "../../app/store";

const initialState: InitialAuthStateType = {
    isLoggedIn: false,
    profile: null
}

export const authReducer = (state: InitialAuthStateType = initialState, action: AuthActionsType): InitialAuthStateType => {
    switch (action.type) {
        case "AUTH/SET-LOGIN-LOGOUT":
            return {...state, isLoggedIn: action.isLoggedIn}
        case "AUTH/SET-USER-INFO":
            if (action.data) {
                return {
                    ...state,
                    profile: {...action.data}
                }
            }
            else return {...state, profile: null}
        default:
            return state
    }
}

//action creators
export const setIsLoggedInOutAC = (isLoggedIn: boolean) => ({type: 'AUTH/SET-LOGIN-LOGOUT', isLoggedIn} as const)
export const setUserInfoAC = (data: ProfileType | null) => ({type: 'AUTH/SET-USER-INFO', data} as const)

//thunks
export const loginTC = (data: LoginParamsType): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        const res = await authAPI.login(data)
        dispatch(setIsLoggedInOutAC(true))
        dispatch(setUserInfoAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? (err.response.data as { error: string }).error : err.message
            dispatch(setAppErrorAC(error))
        } else {
            dispatch(setAppErrorAC(`Native error ${err.message}`))
        }
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const logoutTC = (): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        await authAPI.logout()
        dispatch(setIsLoggedInOutAC(false))
        dispatch(setUserInfoAC(null))
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? (err.response.data as { error: string }).error : err.message
            dispatch(setAppErrorAC(error))
        } else {
            dispatch(setAppErrorAC(`Native error ${err.message}`))
        }
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const updateUserInfoTC = (data: ChangeUserNameParamsType): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        const res = await authAPI.changeUserName(data)
        dispatch(setUserInfoAC(res.data.updatedUser))
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? (err.response.data as { error: string }).error : err.message
            dispatch(setAppErrorAC(error))
        } else {
            dispatch(setAppErrorAC(`Native error ${err.message}`))
        }
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

//type
export type ProfileType = {
	_id?: string;
	email: string;
	rememberMe: boolean;
	isAdmin: boolean;
	name: string;
	verified: boolean;
	publicCardPacksCount: number;
	created: string;
	updated: string;
	__v: number;
	token: string;
	tokenDeathTime: number;
	avatar: string;
}

export type InitialAuthStateType = {
    isLoggedIn: boolean
    profile: ProfileType | null
}
export type SetIsLoggedInOutType = ReturnType<typeof setIsLoggedInOutAC>
export type SetUserInfoType = ReturnType<typeof setUserInfoAC>
export type AuthActionsType = SetIsLoggedInOutType | SetUserInfoType