import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

const Input = ({
  label,
  error,
  helperText,
  type = 'text',
  ...rest
}: Props): JSX.Element => {
  return (
    <div className={`flex flex-col w-full`}>
      {label ? (
        <label className='input-label text-slate-600'>{label}</label>
      ) : null}
      <input
        className='border border-gray-200 rounded px-4 py-2 text-gray-600 placeholder-gray-400 focus:border-main-dark focus:ring-0'
        type={type}
        {...rest}
      />
      {error && <span className='error'>{helperText}</span>}
    </div>
  );
};
export default Input;
