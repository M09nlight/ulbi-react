import { getPageScrollByPath } from './model/selectors/page';
import { pageReducer } from './model/slices/PageSlice';
import { PageSchema } from './model/types/PageShema';
import Page, { PAGE_ID } from './ui/Page';

export { Page, getPageScrollByPath, pageReducer, PAGE_ID };
export type { PageSchema };
