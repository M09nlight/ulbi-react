import { Country } from '../../model/types/country';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import Select from 'shared/ui/Select/Select';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const CountrySelect: FC<CountrySelectProps> = memo(
  ({ className, value, onChange, readonly }) => {
    const { t } = useTranslation();

    const options = [
      { value: Country.Belarus, content: Country.Belarus },
      { value: Country.Poland, content: Country.Poland },
      { value: Country.Russia, content: Country.Russia },
      { value: Country.Ukraine, content: Country.Ukraine },
    ];
    const onChangeHander = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <ListBox
        value={value}
        items={options}
        onChange={onChangeHander}
        readonly={readonly}
        defaultValue={t('enterCurrency')}
        label="Укажите страну"
      />
    );
    // return (
    //   <Select
    //     className={classNames('', {}, [className])}
    //     label={t('enterCountry')}
    //     options={options}
    //     value={value}
    //     onChange={onChangeHander}
    //     readonly={readonly}
    //   />
    // );
  }
);

export default CountrySelect;
