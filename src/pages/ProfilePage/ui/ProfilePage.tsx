import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import Page from 'widgets/Page/ui/Page';
import VStack from 'shared/ui/Stack/VStack/VStack';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const validateErrorsTranslate = {
    [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrectCountry'),
    [ValidateProfileError.INCORRECT_AGE]: t('incorrectAge'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrecUserData'),
    [ValidateProfileError.SERVER_ERROR]: t('serverErr'),
    [ValidateProfileError.NO_DATA]: t('noData'),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }));
    },
    [dispatch]
  );
  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );
  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency: currency || '' }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country: country || '' }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <Page className={classNames('', {}, [className])}>
        <VStack gap="16" max>
          <ProfilePageHeader />
          {validateErrors?.length &&
            validateErrors.map((err) => (
              <Text
                key={err}
                theme={TextTheme.ERROR}
                text={validateErrorsTranslate[err]}
              />
            ))}
          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeAvatar={onChangeAvatar}
            onChangeUsername={onChangeUsername}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
            readonly={readonly}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
