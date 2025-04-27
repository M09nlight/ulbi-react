import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element?: HTMLElement;
  children: React.ReactNode;
}

const Portal: FC<PortalProps> = ({ children, element = document.body }) => {
  return createPortal(children, element);
};

export default Portal;
