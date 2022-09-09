import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  name: string;
  label?: string;
  error?: boolean;
  helperText?: string;
}

const Input = ({
  label,
  register,
  error,
  name,
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
        {...register(name, { required: true })}
      />
      {error && <span className='error text-red-500'>{helperText}</span>}
    </div>
  );
};
export default Input;
