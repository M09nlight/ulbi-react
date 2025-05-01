import { FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { useTranslation } from 'react-i18next';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = ({
  className,
  onChangeOrder,
  onChangeSort,
  order,
  sort,
}) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: 'asc', content: t('по возрастанию') },
      { value: 'desc', content: t('по убыванию') },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, content: t('дате создания') },
      { value: ArticleSortField.TITLE, content: t('названию') },
      {
        value: ArticleSortField.VIEWS,
        content: t('количеству просмотров'),
      },
    ],
    [t],
  );

  return (
    <div className={classNames('', {}, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t('сортировать по')}
        onChange={onChangeSort}
        value={sort}
      />
      <Select<SortOrder>
        options={orderOptions}
        label={t('сортировать по')}
        onChange={onChangeOrder}
        value={order}
      />
    </div>
  );
};

export default ArticleSortSelector;
