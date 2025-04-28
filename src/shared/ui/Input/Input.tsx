import {
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Input.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
  classname?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPos, setCaretPos] = useState(0);
    const ref = useRef<HTMLInputElement | null>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPos(e.target.value.length);
    };

    const onBLur = () => {
      setIsFocused(false);
    };
    const onFocus = () => {
      setIsFocused(true);
    };
    const onSelect = (e: any) => {
      setCaretPos(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
      [cls.readonly]: readonly,
    };

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const isCaretVisible = isFocused && !readonly;

    return (
      <div className={classNames(cls.InputWrapper, mods, [className])}>
        {placeholder && (
          <div className={cls.placeholder}> {`${placeholder}>`}</div>
        )}
        <div className={cls.caretWrapper}>
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={cls.input}
            onBlur={onBLur}
            onFocus={onFocus}
            onSelect={onSelect}
            readOnly={readonly}
            {...otherProps}
          />
          {isCaretVisible && (
            <span className={cls.caret} style={{ left: `${caretPos * 9}px` }} />
          )}
        </div>
      </div>
    );
  }
);
