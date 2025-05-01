import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element?: HTMLElement;
  children: React.ReactNode;
}
/**
 *
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Portal: FC<PortalProps> = ({ children, element = document.body }) => {
  return createPortal(children, element);
};

export default Portal;
