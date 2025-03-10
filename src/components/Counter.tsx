import { FC } from 'react';
import styles from './Counter.module.scss';

interface CounterProps {}

const Counter: FC<CounterProps> = ({}) => {
  return <div className={styles.counter}>Counter</div>;
};

export default Counter;
