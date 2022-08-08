import { RootState } from "./../store/redux-store";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();