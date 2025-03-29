import { FC } from 'react';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [])}>
      <Input
        type="text"
        className={cls.input}
        placeholder={t('enterUsername')}
        autofocus
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('enterPassword')}
      />
      <Button className={cls.loginBtn}>{t('Enter')}</Button>
    </div>
  );
};

export default LoginForm;
