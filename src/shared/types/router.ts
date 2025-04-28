import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line eslint-plugin-check-path-m09blight-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
