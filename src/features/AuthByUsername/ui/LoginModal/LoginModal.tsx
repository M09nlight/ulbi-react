import { FC } from 'react';
import cls from './LoginModal.module.scss';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, className, onClose }) => {
  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [])}
      isOpen={isOpen}
      onClose={onClose}
      lazy={true}
    >
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
