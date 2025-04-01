import { FC, memo } from 'react';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import { useTranslation } from 'react-i18next';
import styles from './SidebarItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem: FC<SidebarItemProps> = memo(({ collapsed, item }) => {
  const { t } = useTranslation();
  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(styles.item, { [styles.collapsed]: collapsed })}
    >
      {<item.Icon className={styles.icon} />}
      <span className={styles.link}> {t(item.text)}</span>
    </AppLink>
  );
});

export default SidebarItem;
