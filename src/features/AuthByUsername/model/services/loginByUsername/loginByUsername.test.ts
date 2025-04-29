import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('loginByUsername', () => {
  const userValue = { username: '123', id: '1' };
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // //before each test
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });
  // test('success login', async () => {
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({
  //       data: userValue,
  //     })
  //   );
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });
  // test('error login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toEqual('error');
  // });
  test('success login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    // mockedAxios.post.mockReturnValue(
    //   Promise.resolve({
    //     data: userValue,
    //   })
    // );
    thunk.api.post.mockReturnValue(
      Promise.resolve({
        data: userValue,
      }),
    ); //with extra arg by axios instance
    const result = await thunk.callThunk({
      password: '123',
      username: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue),
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.api.post).toHaveBeenCalled(); //with extra arg by axios instance
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });
  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    // mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 })); //with extra arg by axios instance

    const result = await thunk.callThunk({
      password: '123',
      username: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    // expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.api.post).toHaveBeenCalled(); //with extra arg by axios instance
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
