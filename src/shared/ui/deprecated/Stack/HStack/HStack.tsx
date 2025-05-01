import { FC } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;
/**
 *
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const HStack: FC<HStackProps> = (props) => {
  return <Flex direction="row" {...props} />;
};

export default HStack;
