import {
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMKInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMKInputProps {
  classname?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPos, setCaretPos] = useState(0);
    const ref = useRef<HTMLInputElement>();

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

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
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
            {...otherProps}
          />
          {isFocused && (
            <span className={cls.caret} style={{ left: `${caretPos * 9}px` }} />
          )}
        </div>
      </div>
    );
  }
);

export default Input;
