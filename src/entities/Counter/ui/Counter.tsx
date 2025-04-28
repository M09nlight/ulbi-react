import { Button } from '@/shared/ui/Button';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

interface CounterProps {}

const Counter: FC<CounterProps> = ({}) => {
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { decrement, increment } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleIncrement} data-testid="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={handleDecrement} data-testid="decrement-btn">
        {t('decrement')}
      </Button>
    </div>
  );
};

export default Counter;
