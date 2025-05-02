import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    target,
  } = props;
  const { t } = useTranslation();

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  // const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
  //   const items = [];
  //   const fromIndex = index * itemsPerRow;
  //   const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

  //   for (let i = fromIndex; i < toIndex; i += 1) {
  //     items.push(
  //       <ArticleListItem
  //         article={articles[i]}
  //         view={view}
  //         target={target}
  //         key={`str${i}`}
  //         className={cls.card}
  //       />,
  //     );
  //   }

  //   return (
  //     <div key={key} style={style} className={cls.row}>
  //       {items}
  //     </div>
  //   );
  // };

  // вируализация выключена потому что не работает скролл при возвращении назад
  // return (
  //   <div data-testid="ArticleList">
  //     {/* <WindowScroller  ///
  //       scrollElement={document.getElementById('PAGE_ID') as Element}
  //     >
  //       {({
  //         height,
  //         width,
  //         registerChild,
  //         onChildScroll,
  //         isScrolling,
  //         scrollTop,
  //       }) => (*/}
  //     <div
  //       // ref={registerChild}
  //       className={classNames(cls.ArticleList, {}, [className, cls[view]])}
  //     >
  //       {/*  {virtualized ? (
  //             <List
  //               height={height ?? 700}
  //               rowCount={rowCount}
  //               rowHeight={isBig ? 700 : 330}
  //               rowRenderer={rowRender}
  //               width={width ? width - 80 : 700}
  //               autoHeight
  //               onScroll={onChildScroll}
  //               isScrolling={isScrolling}
  //               scrollTop={scrollTop}
  //             />
  //           ) : ( */}
  //       {articles.map((article) => (
  //         <ArticleListItem
  //           article={article}
  //           view={view}
  //           target={target}
  //           key={article.id}
  //           className={cls.card}
  //         />
  //       ))}
  //       {/* )}
  //           {isLoading && getSkeletons(view)} */}
  //     </div>
  //     {/*  )}
  //     </WindowScroller> */}
  //   </div>
  // );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          wrap="wrap"
          gap="16"
          className={classNames(cls.ArticleListRedesigned, {}, [])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </HStack>
      }
      off={
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </div>
      }
    />
  );
});
