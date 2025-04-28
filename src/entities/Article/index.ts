import {
  ArticleSortField,
  ArticleType,
  ArticleView,
} from './model/consts/articleConsts';
import { getArticleDetailsData } from './model/selectors/articleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import { Article } from './model/types/article';
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { ArticleList } from './ui/ArticleList/ArticleList';
import ArticleSortSelector from './ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';

export {
  ArticleDetails,
  ArticleView,
  ArticleList,
  getArticleDetailsData,
  ArticleSortField,
  ArticleType,
  articleDetailsReducer,
  ArticleTypeTabs,
  ArticleSortSelector,
};
export type { Article, ArticleDetailsSchema };
