import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

interface ArticlePageGreetingProps {
  className?: string;
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageWasOpen } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlesPageWasOpen) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpen: true }));
    }
  }, [dispatch, isArticlesPageWasOpen]);

  const onClose = () => {
    setIsOpen(false);
  };
  const text = <Text title="welcome" text={t('text!!!!!!!')} />;

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} lazy>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      {text}
    </Modal>
  );
});
