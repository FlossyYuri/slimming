import AtendIcon from '../assets/icons/Atend';
import EmailIcon from '../assets/icons/Email';
import WhatsappIcon from '../assets/icons/Whatsapp';

export default () => (
  <footer className='pb-8 pt-20 text-center bg-gradient-to-t from-cricut-green to-gray-800 bg-opacity-50 flex flex-col items-center text-white clip-top-left'>
    <section className='flex flex-col md:flex-row flex-wrap gap-8 px-4 mb-4'>
      <article>
        <a
          href='https://wa.me/258851755378'
          target='_blank'
          className='flex text-left'
        >
          <WhatsappIcon />
          <div>
            <p className='font-semibold text-cricut-green'>Whatsapp</p>
            <p>+258 85 175 5378</p>
          </div>
        </a>
      </article>
      <article>
        <a href='mailto:contacto@flossyyuri.com' className='flex text-left'>
          <EmailIcon />
          <div>
            <p className='font-semibold text-cricut-green'>Email</p>
            <p>contacto@flossyyuri.com</p>
          </div>
        </a>
      </article>
      <article>
        <div className='flex text-left'>
          <AtendIcon />
          <div>
            <p className='font-semibold text-cricut-green'>Atendimento</p>
            <p>Seg à Sex - 09h às 17h</p>
          </div>
        </div>
      </article>
    </section>
    <div className='flex gap-8'>
      <span>Termos de uso aplicáveis</span>
      <span>Políticas de privacidade</span>
    </div>
    <p className='text-white'>© Print Flow - Todos os Direitos Reservados.</p>
  </footer>
);
