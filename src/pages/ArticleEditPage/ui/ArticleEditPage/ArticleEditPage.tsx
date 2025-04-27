import { FC } from 'react';
import cls from './ArticleEditPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      {isEdit ? t('Редактирование статьи') + ` ${id}` : t('Создание статьи')}
      {/* логика по созданию и редактированию можно вынести в виджет */}
      {'ArticleEditPage'}
    </div>
  );
};

export default ArticleEditPage;
