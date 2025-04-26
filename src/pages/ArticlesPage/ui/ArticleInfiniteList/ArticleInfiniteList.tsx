import { ArticleList } from 'entities/Article';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/getArticlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import Text from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ArticleInfiniteListProps {
  className?: string;
}

const ArticleInfiniteList: FC<ArticleInfiniteListProps> = ({ className }) => {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const { t } = useTranslation();

  if (error) {
    return <Text text={t('error')} />;
  }

  return (
    <ArticleList
      view={view}
      articles={articles}
      isLoading={isLoading}
      className={className}
    />
  );
};

export default ArticleInfiniteList;
