import { ArticleDetails } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo(
  ({ className }) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    if (!id) {
      return (
        <div className={classNames('', {}, [className])}>
          {t('articleNotFound')}
        </div>
      );
    }

    return (
      <div className={classNames('', {}, [className])}>
        <ArticleDetails id={id} />
      </div>
    );
  }
);

export default ArticleDetailsPage;
