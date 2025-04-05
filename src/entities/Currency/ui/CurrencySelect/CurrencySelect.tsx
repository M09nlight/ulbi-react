import { Currency } from '../../model/types/currency';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Select from 'shared/ui/Select/Select';

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
      [onChange]
    );

    return (
      <Select
        className={classNames('', {}, [className])}
        label={t('enterCurrency')}
        options={options}
        value={value}
        onChange={onChangeHander}
        readonly={readonly}
      />
    );
  }
);

export default CurrencySelect;
