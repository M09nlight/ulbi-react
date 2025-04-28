import { articleDetailsPageReducer } from './model/slices';
import { ArticleDetailsPageSchema } from './model/types';
import { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export { ArticleDetailsPage, articleDetailsPageReducer };
export type {
  ArticleDetailsCommentsSchema,
  ArticleDetailsPageSchema,
  ArticleDetailsRecommendationsSchema,
};
