// <url page, scroll position>
export type ScrollSchema = Record<string, number>;

export interface PageSchema {
  scroll: ScrollSchema;
}
