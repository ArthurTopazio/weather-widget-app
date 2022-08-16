import { RootState } from '../store/redux-store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const usedTypedSelector: TypedUseSelectorHook<RootState> = useSelector;