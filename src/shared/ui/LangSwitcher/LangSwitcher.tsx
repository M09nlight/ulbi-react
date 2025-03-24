import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language == 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames('', {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={toggle}>
        {t(short ? 'shortLang' : 'language')}
      </Button>
    </div>
  );
};

export default LangSwitcher;
