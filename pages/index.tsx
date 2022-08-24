import Head from 'next/head';
import Image from 'next/image';
import CheckIcon from '../assets/icons/Check';
import CompraSeguraImage from '../assets/image/comprasegura.png';
import CompraSeguraImage2 from '../assets/image/comprasegura2.png';
import EntidadeIcon from '../assets/image/entidade.png';
import Entidade2Icon from '../assets/image/entidade2.png';
import MpesaIcon from '../assets/image/mpesa.png';
import Ponto24Icon from '../assets/image/ponto-24.png';
import SeloImage from '../assets/image/selo.png';
import TransferIcon from '../assets/image/transfer.png';
import Transfer2Icon from '../assets/image/transfer2.png';
import VisaIcon from '../assets/image/visa.png';
import LogoIcon from '../assets/image/icon.png';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import MetaPixel from '../components/MetaPixel';
import OrderButton from '../components/OrderButton';
import Review from '../components/Review';
import Modal from '../components/Modals/PaymentIntructions';
import { useState } from 'react';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };

  // const opts: YouTubeProps['opts'] = {
  //   frameborder: 0,
  //   height: '360',
  //   width: '640',
  //   allow: 'accelerometer; autoplay; encrypted-media; gyroscope;',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //     loop: 1,

  //     controls: 0,
  //     disablekb: 1,
  //     enablejsapi: 1,
  //     modestbranding: 1,
  //     showinfo: 0,
  //     rel: 0,
  //   },
  // };

  return (
    <>
      <main className='w-full flex flex-col items-stretch min-h-screen'>
        <div className=' bg-cricut-gray'>
          <h1 className='text-cricut-green text-xl sm:text-2xl font-semibold text-center py-4 px-4'>
            Fature a partir de <span className='font-bold'>4.000,00MT</span> por
            semana <br className='hidden sm:block' />
            Trabalhando com personalizados
          </h1>
        </div>
        <section className='container mx-auto text-center py-4 mb-8 px-4 flex flex-col items-center'>
          <h2 className='text-xl sm:text-3xl'>
            {'"'}Papelaria personalizada Revela a{' '}
            <span className='text-cricut-green font-semibold'>
              maquina de corte
            </span>{' '}
            automática{'"'}
          </h2>
          <p className='text-sm sm:text-2xl mt-2 hidden sm:block'>
            Faça artigos personalizados para sua festa ou <br /> para vender e
            faturar muito com a <br />
            <span className='text-cricut-green font-semibold'>
              Cricut Explore Air 2
            </span>
          </p>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-3xl text-cricut-green font-semibold tracking-wide leading-normal'>
              OFERTA{' '}
              <span className='bg-cricut-green text-white'>ESPECIAL</span>{' '}
              <br />
              POR{' '}
              <span className='bg-cricut-green text-white'>TEMPO LIMITADO</span>
            </h2>
            <div className='max-w-md'>
              <Image src={MpesaIcon} alt='Cricut explore air 2 image' />
            </div>
          </div>
          <p className='text-xl mb-2'>
            Restam apenas 2 maquinas em stock prontas para entrega.
            <br />
            Clique aqui ⬇️⬇️⬇️
          </p>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
          <OrderButton onClick={() => setIsOpen(true)} />
          <div className='max-w-xs mt-8'>
            <Image className='w-full' src={CompraSeguraImage2} alt='' />
          </div>
          <div className='flex gap-8 justify-center mt-4'>
            <Image
              className='object-contain'
              width={100}
              height={40}
              src={MpesaIcon}
              alt='Mpesa Logo'
            />
            <Image
              className='object-contain'
              width={100}
              height={40}
              src={Ponto24Icon}
              alt='Mpesa Logo'
            />
            <Image
              className='object-contain'
              width={100}
              height={40}
              src={VisaIcon}
              alt='Mpesa Logo'
            />
            <Image
              className='object-contain'
              width={100}
              height={40}
              src={Transfer2Icon}
              alt='Mpesa Logo'
            />
            <Image
              className='object-contain'
              width={100}
              height={40}
              src={Entidade2Icon}
              alt='Mpesa Logo'
            />
          </div>
        </section>
        <section className='w-full bg-cricut-green py-24 px-4 text-center clip-right'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-3xl text-white font-semibold'>
              A Cricut Explore Air 2
            </h2>
            <p className='text-xl text-white max-w-xl mt-4 mb-2'>
              Corta mais de 100 materiais, desde{' '}
              <span className='underline'>cartolina</span>,{' '}
              <span className='underline'>papel EVA</span>,{' '}
              <span className='underline'>vinil adesivo</span>,{' '}
              <span className='underline'>vinil para camisetas</span> e mais
              materiais de até 1,7mm de espessura com precisão!
            </p>
            <div className='max-w-md'>
              <Image src={MpesaIcon} alt='Cricut explore air 2 image' />
            </div>
          </div>
        </section>
        <section className='w-full py-4 px-4'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-3xl text-cricut-green text-center font-semibold mb-8'>
              O que você
              <span className='bg-cricut-green text-white'>
                {' '}
                pode fazer{' '}
              </span>{' '}
              com a maquina
            </h2>
            <div>
              <Image src={MpesaIcon} alt='Cricut explore air 2 image' />
            </div>
            <div>
              <Image src={MpesaIcon} alt='Cricut explore air 2 image' />
            </div>
          </div>
        </section>
        <section className='w-full bg-cricut-green py-24 px-4 text-center clip-right'>
          <h2 className='text-3xl text-white font-semibold mb-8'>
            QUEM COMPROU, <br className='block sm:hidden' />
            <span className='bg-white text-cricut-green'>
              NÃO SE ARREPENDEU!
            </span>
          </h2>
          <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Review
              title='A minha filha amou!'
              name='Nicole Domingos'
              description='Adorei isso. Chegou a tempo em ótimas condições. Foi fácil de configurar e aprender a usar. Minha filha e eu fizemos topos de bolo no mesmo dia do recebimento. Muito fácil.'
              image={MpesaIcon}
            />
            <Review
              title='A Cricut é maravilhosa'
              name='Victor Uamusse'
              description='A maquina foi entregue dentro do prazo, e é exatamente como eu esperava. Acabamos de começar a usar o produto, e até agora tem sido espetacular! Conseguimos usar o programa tanto no celular como no laptop de forma simples.'
              image={MpesaIcon}
            />
            <Review
              title='Divertido para pessoas criativas'
              name='Marcia Boaventura'
              description='Divertido de usar. Ótimo para personalizar itens simples. Use-o muito para projetos de festas e rótulos.'
              image={MpesaIcon}
            />
          </div>
        </section>
        <section className='w-full py-16 px-4'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-3xl font-semibold mb-8 text-center'>
              Garanta seu <br className='sm:hidden' />
              <span className='text-white bg-cricut-green px-4'>
                Bonus Especial
              </span>
              <div className='clip-right mt-2 h-2 bg-cricut-green w-full'></div>
            </h2>
            <section className='grid grid-cols-1 lg:items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
              <article
                style={{
                  boxShadow:
                    'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
                }}
                className='border-2 border-cricut-green border-opacity-50 rounded-xl overflow-hidden'
              >
                <h3 className='bg-cricut-green text-white px-4 py-2 text-xl font-semibold'>
                  #1 Uma aula presencial
                </h3>
                <p className='p-4'>
                  Você ganha
                  <span className='bg-cricut-green text-white px-2'>
                    1 aula presencial
                  </span>
                  com um profissional da PrintFlow que vai te ensinar o básico
                  que você precisa para começar.
                </p>
              </article>
              <article
                style={{
                  boxShadow:
                    'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                }}
                className='border-2 border-cricut-green border-opacity-50 bg-cricut-green rounded-xl overflow-hidden'
              >
                <h3 className='bg-white text-cricut-green px-4 py-2 text-xl font-semibold'>
                  #2 Lista de fornecedores
                </h3>
                <p className='p-4 text-white text-lg'>
                  Você irá ganhar um ficheiro com uma{' '}
                  <span className='bg-white text-cricut-green px-2'>
                    lista de fornecedores
                  </span>{' '}
                  (com os{' '}
                  <span className='bg-white text-cricut-green px-2'>
                    melhores preços
                  </span>
                  ) dos materiais que você precisa para fazer seus
                  personalizados. Com esta lista{' '}
                  <span className='bg-white text-cricut-green px-2'>
                    seu lucro será maior
                  </span>{' '}
                  pois estes fornecedores tem os melhores preços do mercado.
                </p>
              </article>
              <article
                style={{
                  boxShadow:
                    'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
                }}
                className='border-2 border-cricut-green border-opacity-50 rounded-xl overflow-hidden'
              >
                <h3 className='bg-cricut-green text-white px-4 py-2 text-xl font-semibold'>
                  #3 Mini Curso em video
                </h3>
                <p className='p-4'>
                  Você ganha um{' '}
                  <span className='bg-cricut-green text-white px-2'>
                    mini curso
                  </span>{' '}
                  com video aulas que ensinaram você a utilizar e explorar sua
                  maquina fazendo personalizados maravilhosos
                </p>
              </article>
            </section>
          </div>
        </section>
        <section className='w-full bg-cricut-green py-28 px-4 text-center text-white italic clip-right'>
          <h2 className='text-3xl font-semibold mb-8'>
            Quanto vale tudo isso?
          </h2>
          <ul className='container mx-auto flex flex-col gap-4 text-left'>
            <li className='flex items-center'>
              <div className='transform scale-75 mr-4'>
                <CheckIcon />
              </div>
              <div className='flex-1'>
                <p className='text-xl flex items-center'>
                  Cricut Explore Air 2
                  <span className='border-t-2 border-white border-dashed flex-1 ml-8'></span>
                </p>
                <p className='text-2xl font-semibold line-through'>
                  45,000.00MT
                </p>
              </div>
            </li>
            <li className='flex items-center'>
              <div className='transform scale-75 mr-4'>
                <CheckIcon />
              </div>
              <div className='flex-1'>
                <p className='text-xl flex items-center'>
                  1 aula presencial
                  <span className='border-t-2 border-white border-dashed flex-1 ml-8'></span>
                </p>
                <p className='text-2xl font-semibold line-through'>
                  2,000.00MT
                </p>
              </div>
            </li>
            <li className='flex items-center'>
              <div className='transform scale-75 mr-4'>
                <CheckIcon />
              </div>
              <div className='flex-1'>
                <p className='text-xl flex items-center'>
                  Lista de fornecedores baratos
                  <span className='border-t-2 border-white border-dashed flex-1 ml-8'></span>
                </p>
                <p className='text-2xl font-semibold line-through'>300.00MT</p>
              </div>
            </li>
            <li className='flex items-center'>
              <div className='transform scale-75 mr-4'>
                <CheckIcon />
              </div>
              <div className='flex-1'>
                <p className='text-xl flex items-center'>
                  Mini Curso de Design Space
                  <span className='border-t-2 border-white border-dashed flex-1 ml-8'></span>
                </p>
                <p className='text-2xl font-semibold line-through'>
                  3,500.00MT
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className='w-full py-16 px-4'>
          <div className='container mx-auto'>
            <section className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
              <article>
                <p className='mb-4 text-gray-400 text-lg font-light tracking-wide'>
                  Risco zero para você!
                </p>
                <h2 className='text-3xl font-semibold'>
                  <span className='text-cricut-green'>1 ano </span> de{' '}
                  <span className='text-cricut-green'>Garantia</span> da Cricut
                </h2>
                <div className='h-1 w-1/5 my-4 bg-cricut-green rounded clip-right'></div>
                <p>
                  Ainda não tem certeza? Não se preocupe. <br /> 1 ano de
                  garantia com total cobertura pela Assistência <br /> Técnica
                  da Cricut para caso tenha algum problema com a maquina. <br />
                  Caso a maquina tenha algum defeito de fábrica, nós trocamos
                  para você sem nenhum custo adicional e muita burocracia.
                </p>
              </article>
              <article className='flex justify-center items-center'>
                <div className='w-2/3 sm:w-full md:w-1/2 '>
                  <Image src={SeloImage} alt='Cricut explore air 2 image' />
                </div>
              </article>
            </section>
          </div>
        </section>
        <section className='w-full bg-cricut-green py-24 px-4 text-center clip-top-left'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-3xl text-white font-semibold tracking-wide leading-normal'>
              OFERTA{' '}
              <span className='bg-white text-cricut-green'>ESPECIAL</span>{' '}
              <br />
              POR{' '}
              <span className='bg-white text-cricut-green'>TEMPO LIMITADO</span>
            </h2>
            {/* <p className='text-xl text-white max-w-xl mt-4 mb-2'></p> */}
            <div className='my-4'>
              <p className='text-xl font-semibold text-white  line-through'>
                <span className='text-base'>antes </span>45.000,00MT
              </p>
              <p className='text-3xl font-semibold text-white'>
                <span className='text-base'>depois </span>34.999,00MT
              </p>
            </div>
            <div className='max-w-md'>
              <Image src={MpesaIcon} alt='Cricut explore air 2 image' />
            </div>
            <p className='text-3xl mb-4'>⬇️⬇️⬇️</p>
            <OrderButton onClick={() => setIsOpen(true)} inverted />
            <div className='max-w-xs mt-8'>
              <Image className='w-full' src={CompraSeguraImage} alt='' />
            </div>
            <div className='flex gap-8 justify-center mt-4'>
              <Image
                className='object-contain'
                width={100}
                height={40}
                src={MpesaIcon}
                alt='Mpesa Logo'
              />
              <Image
                className='object-contain'
                width={100}
                height={40}
                src={Ponto24Icon}
                alt='Mpesa Logo'
              />
              <Image
                className='object-contain'
                width={100}
                height={40}
                src={VisaIcon}
                alt='Mpesa Logo'
              />
              <Image
                className='object-contain'
                width={100}
                height={40}
                src={TransferIcon}
                alt='Mpesa Logo'
              />
              <Image
                className='object-contain'
                width={100}
                height={40}
                src={EntidadeIcon}
                alt='Mpesa Logo'
              />
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Head>
        <title>Maquina de Corte Automática - Cricut Explore Air 2</title>
        <link rel='icon' href={LogoIcon.src} />
        <meta
          name='description'
          content='Conheça a maquina de corte automática que as papelarias personalizadas usam para fazer seus lindos artigos personalizados.'
        />
        <meta
          property='og:title'
          content='Maquina de Corte Automática - Cricut Explore Air 2'
        />
        <meta
          property='og:description'
          content='Conheça a maquina de corte automática que as papelarias personalizadas usam para fazer seus lindos artigos personalizados.'
        />
        <meta
          property='og:url'
          content='https://cricutexplore.flossyyuri.com/'
        />
        <meta property='og:type' content='website' />
        {/* <meta property='og:image' content={OGImage.src} /> */}
      </Head>
      <Footer />
      <MetaPixel />
    </>
  );
};

export default LandingPage;
