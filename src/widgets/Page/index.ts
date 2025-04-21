import { getPageScrollByPath } from './model/selectors/page';
import { pageReducer } from './model/slices/PageSlice';
import { PageSchema } from './model/types/PageShema';
import Page from './ui/Page';

export { PageSchema, Page, getPageScrollByPath, pageReducer };
