import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {}

const AdminPanelPage: FC<AdminPanelPageProps> = ({}) => {
  const { t } = useTranslation();

  return <Page data-testid="AdminPanelPage">{t('adminPanel')}</Page>;
};

export default AdminPanelPage;
