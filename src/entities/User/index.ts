import { UserRole } from './model/consts/userConsts';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from './model/selectors/roleSelectors';
import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';

export {
  userReducer,
  getUserAuthData,
  getUserInited,
  userActions,
  UserRole,
  isUserAdmin,
  isUserManager,
  getUserRoles,
};
export type { UserSchema, User };
