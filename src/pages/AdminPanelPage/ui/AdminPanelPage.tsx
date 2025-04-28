import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {}

const AdminPanelPage: FC<AdminPanelPageProps> = ({}) => {
  const { t } = useTranslation();

  return <Page>{t('adminPanel')}</Page>;
};

export default AdminPanelPage;
