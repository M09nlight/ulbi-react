import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../Button/Button';
import { classNames } from 'shared/lib/classNames';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language == 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(styles.langSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={toggle}>
        {t('language')}
      </Button>
    </div>
  );
};

export default LangSwitcher;
