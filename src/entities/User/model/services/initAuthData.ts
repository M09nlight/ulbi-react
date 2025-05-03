import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  LOCAL_STORAGE_LAST_DESIGN_KEY,
  USER_LOCALSTORAGE_KEY,
} from '@/shared/consts/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const userID = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userID) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userID)).unwrap();

      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        response.features?.isAppRedesigned ? 'new' : 'old',
      );
      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);
