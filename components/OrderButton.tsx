interface Props {
  inverted?: boolean;
  onClick?: () => void;
}

const OrderButton = ({ inverted = false, onClick }: Props) => {
  const handleSubmit = () => {
    if (onClick) onClick();
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
    <button
      type='button'
      onClick={handleSubmit}
      className={`${
        inverted
          ? 'bg-white  text-cricut-green inverted'
          : 'bg-cricut-green text-white'
      } cta rounded-xl py-2 px-4 w-full sm:w-max flex flex-col`}
    >
      <span className='uppercase font-semibold'>
        Eu quero encomendar uma maquina
      </span>
      <span className='text-sm w-full'>Entrega de 2 a 7 dias</span>
    </button>
  );
};

export default OrderButton;
