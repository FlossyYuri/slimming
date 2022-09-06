import { Dialog, Tab, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import MpesaIcon from '../../assets/image/mpesa.png';
import Icon from '../../assets/image/icon.png';
import PaypalIcon from '../../assets/image/paypal.png';
import Input from '../forms/input';

type Inputs = {
  fullName: string;
  phone: string;
  email: string;
  mpesaNumber: number;
};
interface Props {
  setIsOpen?: any;
  isOpen: boolean;
}
export default function Example({ setIsOpen, isOpen }: Props) {
  useEffect(() => {}, []);

  const cancelButtonRef = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
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
                      {...register('fullName', { required: true })}
                      placeholder='Nome Completo'
                      label='Seu Nome Completo'
                    />
                    <Input
                      {...register('phone', { required: true })}
                      placeholder='Numero de celular'
                      label='Numero de celular'
                    />
                    <Input
                      {...register('email', { required: true })}
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
                        <Tab className='rounded py-2 px-4 border border-slate-300 focus:border-cricut-green focus:shadow-md focus:shadow-cricut-green/10'>
                          <Image
                            src={PaypalIcon}
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
                            {...register('mpesaNumber', { required: true })}
                            placeholder='84XXXYYYY'
                            label='Número Mpesa'
                          />
                        </Tab.Panel>
                        <Tab.Panel className='rounded bg-white  border border-slate-300 p-4'>
                          Y
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                    <button
                      className='bg-cricut-green rounded p-2 text-white'
                      type='submit'
                    >
                      Comprar agora
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
