import { Dialog, Tab, Transition } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import Icon from '../../assets/image/icon.png';
import MpesaIcon from '../../assets/image/mpesa.png';
import Input from '../forms/input';

type Inputs = {
  fullName: string;
  phone: string;
  email: string;
  mpesaNumber: number;
};
const schema = yup
  .object({
    fullName: yup.string().required('Campo obrigatório'),
    phone: yup
      .number()
      .typeError('Deve ser um número')
      .min(800000000)
      .max(899999999)
      .required('Campo obrigatório'),
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    mpesaNumber: yup
      .number()
      .typeError('Deve ser um número')
      .min(800000000, 'Numero inválido')
      .max(899999999, 'Numero inválido')
      .required('Campo obrigatório'),
  })
  .required();

interface Props {
  setIsOpen?: any;
  isOpen: boolean;
}
export default function PaymentModal({ setIsOpen, isOpen }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    axios
      .post('https://mpesanode.herokuapp.com/payEbook', {
        channel: 'EBOOK',
        username: 'EMAGRECER',
        amount: 497,
        phone: data.mpesaNumber,
        fullName: data.fullName,
        contact: data.phone,
        email: data.email,
      })
      .then(async (response) => {
        toast.success('Pagamento realizado com sucesso! Abra seu email', {
          duration: 8000,
          position: 'top-right',
          // Custom Icon
          icon: '✅',
          className: 'bg-cricut-green',
        });
      })
      .catch((e) => {
        toast.error(e.response?.data?.message || 'Erro a realizar pagamento', {
          duration: 8000,
          position: 'top-right',
          // Custom Icon
          icon: '❌',
          style: {
            backgroundColor: '#e40c2c',
            color: 'white',
          },
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-4'>
                <section>
                  <h2 className='text-center'>Finalizar compra</h2>
                  <div className='flex gap-4 my-4'>
                    <div className='w-24 h-24 bg-slate-400 rounded-xl overflow-hidden'>
                      <Image src={Icon} alt='' />
                    </div>
                    <div className='flex flex-col'>
                      <h2 className='font-semibold'>
                        Desafio Emagrecer em 30 dias
                      </h2>
                      <p>Receitas para Emagrecer</p>
                      <p className='font-semibold'>497,00MT</p>
                    </div>
                  </div>
                  <form
                    className='gap-4 flex flex-col'
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Input
                      name='fullName'
                      register={register}
                      error={!!errors}
                      helperText={errors.fullName?.message}
                      placeholder='Nome Completo'
                      label='Seu Nome Completo'
                    />
                    <Input
                      name='phone'
                      register={register}
                      error={!!errors}
                      helperText={errors.phone?.message}
                      placeholder='Numero de celular'
                      label='Numero de celular'
                    />
                    <Input
                      name='email'
                      register={register}
                      description='Escreva um email que você usa pois receberá automaticamente um email com instruções para acessar o produto.'
                      error={!!errors}
                      helperText={errors.email?.message}
                      placeholder='Endereço de email'
                      label='Endereço de email'
                    />
                    <Tab.Group>
                      <Tab.List className='flex space-x-2 rounded-xl'>
                        <Tab className='rounded-lg py-2 px-4 border border-slate-300 focus:border-cricut-green focus:shadow-md focus:shadow-cricut-green/10'>
                          <Image
                            src={MpesaIcon}
                            width={100}
                            height={40}
                            objectFit='contain'
                            alt='Cricut explore air 2 image'
                          />
                        </Tab>
                      </Tab.List>
                      <Tab.Panels>
                        <Tab.Panel className='rounded bg-white  border border-slate-300 p-4'>
                          <Input
                            name='mpesaNumber'
                            register={register}
                            error={!!errors}
                            helperText={errors.mpesaNumber?.message}
                            placeholder='84XXXYYYY'
                            label='Número Mpesa'
                          />
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                    <button
                      disabled={loading}
                      className='bg-cricut-green rounded p-2 text-white'
                      type='submit'
                    >
                      {loading ? (
                        <svg
                          className='inline mr-2 w-8 h-8 text-white animate-spin fill-white text-white/40'
                          viewBox='0 0 100 101'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='currentColor'
                          />
                          <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='currentFill'
                          />
                        </svg>
                      ) : (
                        'Comprar agora'
                      )}
                    </button>
                  </form>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
