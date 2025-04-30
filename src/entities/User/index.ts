import { UserRole } from './model/consts/userConsts';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { useJsonSettings } from './model/selectors/jsonSettings';
// import { useJsonSettingsByKey } from './model/selectors/jsonSettings';
import {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from './model/selectors/roleSelectors';
import { saveJsonSettings } from './model/services/saveJsonSettings';
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
  // useJsonSettingsByKey,
  useJsonSettings,
  saveJsonSettings,
};
export type { UserSchema, User };
