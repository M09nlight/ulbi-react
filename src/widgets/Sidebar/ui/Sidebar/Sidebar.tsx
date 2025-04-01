import { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  // const itemsList = useMemo(() => {
  //   return SidebarItemsList.map((item) => (
  //     <SidebarItem item={item} collapsed={collapsed} key={item.path} />
  //   ));
  // }, [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={styles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square={true}
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        {SidebarItemsList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </div>
      <div className={styles.swithers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={collapsed} />
      </div>
    </div>
  );
});

export default Sidebar;
