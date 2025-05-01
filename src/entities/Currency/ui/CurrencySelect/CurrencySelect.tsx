import { Currency } from '../../model/types/currency';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/deprecated/ListBox';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({ className, value, onChange, readonly }) => {
    const { t } = useTranslation();

    const options = [
      { value: Currency.RUB, content: Currency.RUB },
      { value: Currency.EUR, content: Currency.EUR },
      { value: Currency.USD, content: Currency.USD },
    ];
    const onChangeHander = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <ListBox
        value={value}
        items={options}
        onChange={onChangeHander}
        readonly={readonly}
        defaultValue={t('enterCurrency')}
        direction="top right"
        label="Укажите валюту"
      />
    );

    // return (
    //   <Select
    //     className={classNames('', {}, [className])}
    //     label={t('enterCurrency')}
    //     options={options}
    //     value={value}
    //     onChange={onChangeHander}
    //     readonly={readonly}
    //   />
    // );
  },
);

export default CurrencySelect;
