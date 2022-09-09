import Image from 'next/image';
import WhatsappWhiteIcon from '../../assets/icons/WhatsappWhite';
import XMarkIcon from '../../assets/icons/Xmark';
import Entidade2Icon from '../../assets/image/entidade2.png';
import MpesaIcon from '../../assets/image/mpesa.png';
import Transfer2Icon from '../../assets/image/transfer2.png';
import {
  ENTIDADE,
  MOZA,
  MPESA_NAME,
  MPESA_NUMBER,
  NIB,
  REFERENCIA,
} from '../../constants';

interface Props {
  setIsOpen: (state: boolean) => void;
}
const Modal = ({ setIsOpen }: Props) => {
  const handleWhatsapp = () => {
    // import('react-facebook-pixel')
    //   .then((x) => x.default)
    //   .then((ReactPixel) => {
    //     ReactPixel.init('1968198653570585');
    //     ReactPixel.track('Contact');
    //   });
    // window.open(
    //   'https://api.whatsapp.com/send/?phone=258851755378&text=Ol%C3%A1%2C+venho+do+website+e+quero+comprar+a+Cricut+Explore+Air+2.&type=phone_number&app_absent=0',
    //   '_blank'
    // );
  };
  return (
    <>
      <div
        className='bg-black bg-opacity-50 w-screen h-screen z-10 fixed top-0 left-0 overflow-y-auto'
        onClick={() => setIsOpen(false)}
      />
      <div className='fixed z-20 max-w-lg'>
        <div className='bg-white rounded-2xl p-4 shadow-lg overflow-hidden'>
          <h2 className='text-xl text-cricut-green'>Instruções de pagamento</h2>
          <button
            className='font font-semibold px-2 py-1 rounded-lg shadow transition-all absolute right-0 top-0 self-end -mt-2 -mr-2 w-8 bg-white hover:shadow-xl hover:-translate-x-1  hover:translate-y-1'
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon />
          </button>
          <section className='flex flex-col text-center max-h-72 overflow-y-scroll py-4 gap-4'>
            <article className='shadow-md border border-cricut-green border-opacity-50 rounded-xl p-2'>
              <Image
                className='object-contain'
                height={44}
                src={Entidade2Icon}
                alt='Mpesa Logo'
              />
              <p className='mt-2'>Pagamento por Entidade e Referência</p>
              <p>
                <span className='text-cricut-green'>Entidade:</span>{' '}
                <span className='underline'>{ENTIDADE}</span>
              </p>
              <p>
                <span className='text-cricut-green'>Referência:</span>{' '}
                <span className='underline'>{REFERENCIA}</span>
              </p>
            </article>
            <article className='shadow-md border border-cricut-green border-opacity-50 rounded-xl p-2'>
              <Image
                className='object-contain'
                height={64}
                src={Transfer2Icon}
                alt='Mpesa Logo'
              />
              <p className='mt-2'>Pagamento por transferência bancária</p>
              <p>
                <span className='text-cricut-green'>NIB:</span>{' '}
                <span className='underline'>{NIB}</span>
              </p>
              <p>
                <span className='text-cricut-green'>
                  Número de conta <span className='underline'>MOZA</span>:
                </span>{' '}
                <span className='underline'>{MOZA}</span>
              </p>
            </article>
            <article className='shadow-md border border-cricut-green border-opacity-50 rounded-xl p-2'>
              <Image
                className='object-contain'
                height={44}
                src={MpesaIcon}
                alt='Mpesa Logo'
              />
              <p className='mt-2'>M-Pesa</p>
              <p>
                <span className='text-cricut-green'>Número:</span>{' '}
                <span className='underline'>{MPESA_NUMBER}</span>
              </p>
              <p>
                <span className='text-cricut-green'>Nome:</span>{' '}
                <span className='underline'>{MPESA_NAME}</span>
              </p>
            </article>
            <article className='font-semibold'>
              <span className='text-cricut-green'>NOTA:</span> Após fazer o
              pagamento, por favor Envie o comprovativo do pagamento via
              WhatsApp ou e-mail.
            </article>
          </section>
          <div className='flex pt-4 gap-2 justify-around items-center'>
            <button
              className='flex items-center font-semibold px-4 py-2 rounded-xl transition-all text-white shadow-sm hover:-translate-y-2 hover:shadow-cricut-green hover:shadow-md bg-cricut-green'
              onClick={handleWhatsapp}
            >
              <div className='w-6 mr-1'>
                <WhatsappWhiteIcon />
              </div>
              Contactar pelo Whatsapp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
