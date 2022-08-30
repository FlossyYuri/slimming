import AtendIcon from '../assets/icons/Atend';
import EmailIcon from '../assets/icons/Email';
import WhatsappIcon from '../assets/icons/Whatsapp';

const Footer = () => (
  <footer className='pb-8 pt-20 text-center bg-gradient-to-t from-cricut-green to-gray-800 bg-opacity-50 flex flex-col items-center text-white clip-top-left'>
    <section className='flex flex-col md:flex-row flex-wrap gap-8 px-4 mb-4'>
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
    <div className='container mx-auto text-sm'>
      <h3 className='font-semibold'>Termos de uso aplicáveis</h3>
      <p>
        Este produto não garante a obtenção de resultados caso você não aplique
        corretamente os passos. Qualquer referência ao desempenho de uma
        estratégia não deve ser interpretada como uma garantia de resultados.
      </p>
      <p>
        Para garantir que as estratégias tragam resultados, é necessário aplicar
        todos os ensinamentos conforme o recomendado. Os resultados podem variar
        e dependem unicamente de cada pessoa em colocar em prática as
        estratégias aprendidas. Lembre-se que cada um tem sua individualidade,
        experiência e rotinas, não compare seu resultado com o de outros e siga
        dando o seu melhor todos os dias. A chave para ter resultados e sucesso
        é a consistência.
      </p>
      <p className='text-white'>© Copyright - Todos os Direitos Reservados.</p>
    </div>
  </footer>
);
export default Footer;
