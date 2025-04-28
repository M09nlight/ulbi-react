import {
  ArticleSortField,
  ArticleType,
  ArticleView,
} from './model/consts/articleConsts';
import { getArticleDetailsData } from './model/selectors/articleDetails';
import { Article } from './model/types/article';
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { ArticleList } from './ui/ArticleList/ArticleList';
import { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';

export {
  ArticleDetails,
  ArticleList,
  ArticleSortField,
  ArticleType,
  ArticleTypeTabs,
  ArticleView,
  getArticleDetailsData,
};
export type { Article, ArticleDetailsSchema };
