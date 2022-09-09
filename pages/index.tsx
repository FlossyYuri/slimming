import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import ChatIcon from '../assets/icons/Chat';
import CheckIcon from '../assets/icons/Check';
import GiftIcon from '../assets/icons/Gift';
import MiniCheckIcon from '../assets/icons/MiniCheck';
import PersonIcon from '../assets/icons/Person';
import SecurityIcon from '../assets/icons/security';
import StarIcon from '../assets/icons/Star';
import BalancaImage from '../assets/image/balanca.png';
import CompraSeguraImage from '../assets/image/comprasegura.png';
import LogoIcon from '../assets/image/icon.png';
import MenuImage from '../assets/image/menu.png';
import MpesaIcon from '../assets/image/mpesa.png';
import MZFlag from '../assets/image/mzlogo.png';
import Ponto24Icon from '../assets/image/ponto-24.png';
import Bebida1 from '../assets/image/reviews/1.png';
import Bebida2 from '../assets/image/reviews/2.png';
import Bebida3 from '../assets/image/reviews/3.png';
import Bebida4 from '../assets/image/reviews/4.jpg';
import Bebida5 from '../assets/image/reviews/5.jpg';
import Bebida6 from '../assets/image/reviews/6.jpg';
import Review1 from '../assets/image/reviews/d1.jpeg';
import Review2 from '../assets/image/reviews/d2.jpg';
import Review3 from '../assets/image/reviews/d3.png';
import SeloImage from '../assets/image/selo.png';
import Ebook1 from '../assets/image/smartmockups_kgmrtro3.png';
import Ebook2 from '../assets/image/smartmockups_kgmruzjm.png';
import TestimonialImage from '../assets/image/testimonial.png';
import VisaIcon from '../assets/image/visa.png';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import MetaPixel from '../components/MetaPixel';
import PaymentModal from '../components/Modals/PaymentModal';
import OrderButton from '../components/OrderButton';
import Review from '../components/Review';
import Timer from '../components/Timer';
import { Toaster } from 'react-hot-toast';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    frameborder: 0,
    height: '360',
    width: '640',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope;',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
    },
  };

  return (
    <>
      <main className='w-full flex flex-col items-stretch min-h-screen'>
        <div className=' bg-cricut-gray'>
          <h1 className='text-cricut-green text-xl flex justify-center items-center uppercase font-semibold sm:text-2xl text-center py-4 px-4'>
            Segredo brasileiro chega em moçambique
            <Image
              height={24}
              width={42}
              objectFit='contain'
              src={MZFlag}
              alt=''
              className=''
            />
            !
          </h1>
        </div>
        <section className='container mx-auto text-center py-4 mb-4 px-4 flex flex-col items-center'>
          <h2 className='text-2xl sm:text-4xl uppercase font-semibold leading-normal'>
            Foi revelado o método{' '}
            <span className='text-cricut-green font-semibold'>
              100% natural
            </span>{' '}
            usados por mais de 15.000 Pessoas no brazil para
            <span className='bg-cricut-green text-white px-4 mx-2'>
              eliminar gordura localizada e emagrecer de 4 a 10 kilos
            </span>
            <br /> em até 30 dias
          </h2>
          <YouTube
            className='my-4 video-container'
            iframeClassName='video'
            videoId='aOldf0UZICY'
            opts={opts}
            onReady={onPlayerReady}
          />
          <p className='text-base uppercase font-normal leading-tight mt-4'>
            Acesso vitalício por apenas 497MT! <br /> Pague a vista por Mpesa ou
            Cartão e <br /> receba instantaneamente. Compra 100% segura!
          </p>
        </section>
        <section className='w-full px-4 text-center'>
          <div className='container bg-slate-700 mx-auto p-8 text-white'>
            <h2 className='text-2xl font-bold mb-4'>
              6 Transformações Impactantes em Seu Corpo nas próximas semanas:
            </h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 text-left'>
              <li className='flex gap-2'>
                <span className='w-6'>
                  <StarIcon />
                </span>
                <span className='text'>
                  Barriga diminue até 12cm por mês&nbsp;
                </span>
              </li>
              <li className='flex gap-2'>
                <span className='w-6'>
                  <StarIcon />
                </span>
                <span className='text'>Reduz as dores nas costas</span>
              </li>
              <li className='flex gap-2'>
                <span className='w-6'>
                  <StarIcon />
                </span>
                <span className='text'>Pernas desincham bastante</span>
              </li>
              <li className='flex gap-2'>
                <span className='w-6'>
                  <StarIcon />
                </span>
                <span className='text'>
                  Melhora o diabetes e colesterol alto
                </span>
              </li>
              <li className='flex gap-2'>
                <span className='w-6'>
                  <StarIcon />
                </span>
                <span className='text'>
                  Redução de peso&nbsp; (de 5 a 10 quilos)
                </span>
              </li>
              <li className='flex gap-2'>
                <span className='w-6'>
                  <StarIcon />
                </span>
                <span className='text'>
                  Tira a ansiedade de comer compulsivamente&nbsp;
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className='w-full my-8 px-4'>
          <div className='container mx-auto flex justify-center'>
            <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} />

            <OrderButton onClick={() => setIsOpen(true)} />
          </div>
        </section>
        <section className='w-full bg-cricut-green py-24 px-4 text-center clip-right'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-2xl md:text-3xl text-white font-semibold mb-4'>
              ÚLTIMAS HORAS COM VALOR PROMOCIONAL DISPONÍVEL!
            </h2>
            <div className='grid grid-cols-1 lg:items-center sm:grid-cols-2 gap-4'>
              <div>
                <Image src={MenuImage} alt='Menu' />
              </div>
              <div className='px-8'>
                <ul className='text-left text-white list-disc flex flex-col gap-2'>
                  <li>Reeducação com Receitas</li>
                  <li>Aprenda a comer saudável</li>
                  <li>Receitas rápidas e práticas</li>
                  <li>Acelere o metabolismo</li>
                  <li>Desintoxique o organismos</li>
                  <li>Livre-se da gordura que te incomoda</li>
                  <li>
                    Mais de 100 receitas para detonar calorias todos os dias
                  </li>
                </ul>
              </div>
            </div>
            <Timer />
          </div>
        </section>
        <section className='w-full py-4 px-4'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-2xl md:text-3xl text-cricut-green text-center font-semibold mb-8'>
              O Programa é a base de que alimentos simples que você tem em casa,
              são muitas receitas como:
            </h2>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              <Review
                title='Sucos Detox Para Desintoxicar'
                description='Os estudos apontaram que além de reduzir o colesterol o detox também elimina gordura pelas fezes e urina.'
                image={Bebida1}
              />
              <Review
                title='Sopas Milagrosas'
                description='A combinação perfeita para queimar gordura em uma sopa super gostosa que substitui refeições.'
                image={Bebida2}
              />
              <Review
                title='Shakes Funcionais'
                description='Ótima bebida com bastante nutrientes para aumentar sua imunidade e saciar suas fome de preparo rápido.'
                image={Bebida3}
              />
              <Review
                title='O chá mais poderoso do Brasil'
                description='Receita secreta de um dos chás mais procurados no Brasil quando o assunto é perca de peso. Incríveis os Resultados.'
                image={Bebida4}
              />
              <Review
                title='Bebidas Bomba'
                description='Muitos problemas cardíacos são causadas por problemas circulatórios. O yoga ajuda a bombear o sangue e a circular o oxigênio para todas as partes do corpo de forma saudável.'
                image={Bebida5}
              />
              <Review
                title='Cardápios Fit'
                description='Cardápios práticos para a semana toda. Lembrando que não é uma dieta e sim uma reeducação. A nossa intenção é que você coma saudável.'
                image={Bebida6}
              />
            </div>
          </div>
        </section>
        <section className='w-full bg-cricut-green text-white py-24 px-4 text-center clip-right'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-8 text-center'>
              Todas estas transformações agora estão disponíveis para você o
              Ebook RECEITAS PARA SECAR EM 30 DIAS
            </h2>
            <p>
              Um passo a passo completo de 30 dias que vai mudar sua vida para
              sempre, você não precisará mais de dietas malucas e de produtos em
              cápsula para chegar ao seu corpo dos sonhos, com o nosso programa
              você começará a mudar seu corpo a partir de hoje!
            </p>
          </div>
        </section>
        <section className='w-full py-16 px-4'>
          <div className='container flex flex-col items-center mx-auto'>
            <div className='w-12 mb-2'>
              <ChatIcon />
            </div>
            <p className='text-sm my-2'>
              Leia alguns resultados de clientes que estão participando, abaixo:
            </p>
            <p className='bg-cricut-green text-white px-2 text-lg'>
              Espaço do Cliente
            </p>
            <Image src={TestimonialImage} alt='Testimonial' />
          </div>
        </section>
        <section className='w-full bg-cricut-green text-white py-24 px-4 text-center clip-right'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-8 text-center'>
              <span className='text-cricut-green bg-white px-4'>
                Pessoas reais
              </span>{' '}
              que já tiveram resultados surpreendentes com as{' '}
              <span className='text-cricut-green bg-white px-4'>
                nossas Receitas:
              </span>
            </h2>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 w-full'>
              <YouTube
                className='video-container'
                iframeClassName='video'
                videoId='gODJroxn7sQ'
                opts={opts}
                onReady={onPlayerReady}
              />
              <YouTube
                className='video-container'
                iframeClassName='video'
                videoId='_NgxqKYd4lg'
                opts={opts}
                onReady={onPlayerReady}
              />
              <YouTube
                className='video-container'
                iframeClassName='video'
                videoId='gSzgaZpUldk'
                opts={opts}
                onReady={onPlayerReady}
              />
              <YouTube
                className='video-container'
                iframeClassName='video'
                videoId='yOJVUvGZGHk'
                opts={opts}
                onReady={onPlayerReady}
              />
            </div>
          </div>
        </section>
        <section className='w-full py-4 px-4 text-center'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-8 text-center'>
              Veja a transformação que nosso programa trouxe na vida dessas
              pessoas!
            </h2>
            <div className='flex flex-col gap-4 items-start'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <Image
                  className='max-w-xs'
                  objectFit='contain'
                  width={800}
                  src={Review1}
                  alt='Mpesa Logo'
                />
                <div className='flex flex-col justify-center col-span-2'>
                  <p className='text-gray-400'>
                    Foto de Roseane Soares Sorrindo Uma cliente que ficou muito
                    feliz quando mandou essa foto pra gente, ela viu a diferença
                    enorme em seu corpo e principalmente na região do abdômen.
                    Ela perdeu mais de 10cm de barriga e está amando os
                    resultados, além do mais está 100% saudável depois do nosso
                    programa.
                  </p>
                  <p className='font-bold'>
                    Roseane Soares, 29 anos. Eliminou 12kg com o programa
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                  <Image objectFit='contain' src={Review2} alt='Mpesa Logo' />
                </div>
                <div className='flex flex-col justify-center col-span-2'>
                  <p className='text-gray-400'>
                    Pensa em uma mulher de bem com a vida e guerreira! Antes se
                    limitava dietas e mais dietas para emagrecer e só gastava
                    dinheiro e se privava muito. Após o uso correto da
                    reeducação alimentar teve bastante resultado. Uma mulher que
                    já era feliz e ficou mais feliz ainda com o seu novo corpo.
                    Essa é a Iolanda!
                  </p>
                  <p className='font-bold'>
                    Iolanda Flores,31 anos. Eliminou mais de 16kg com o programa
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='w-full'>
                  <Image objectFit='contain' src={Review3} alt='Mpesa Logo' />
                </div>
                <div className='flex flex-col justify-center col-span-2'>
                  <p className='text-gray-400'>
                    Foto de Ariane Silva Sorrindo Um novo homem, mais disposto e
                    com muita saúde. Diminuiu os níveis de açúcar no sangue,
                    abaixou o colesterol e hoje está bonitão como vocês podem
                    ver na foto
                  </p>
                  <p className='font-bold'>
                    Marcos de Souza , 29 anos. Eliminou mais de 10kg com o
                    programa
                  </p>
                </div>
              </div>
            </div>
            <h3 className='text-xl font-semibold mt-8'>
              Se elas conseguem, você também pode!
            </h3>
            <p className='text-sm mt-2 text-gray-400'>
              Atenção: os resultados poderão variar de pessoa para pessoa{' '}
            </p>
          </div>
        </section>
        <section className='w-full bg-cricut-green py-28 px-4 text-white italic clip-right text-center'>
          <div className='container mx-auto'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-8'>
              QUEM PRECISA DESTE GUIA PASSO-A-PASSO?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <article>
                <p>
                  Nós recomendamos ele para todas as pessoas que estão cansadas
                  e frustradas com os mais diversos métodos que tem por ai que
                  dizem que você vai ficar com o corpo magro e bonito, mas nada
                  disso acontece.
                </p>
                <br />
                <p>
                  Para qualquer mulher que precisa de ajuda para transformar o
                  corpo. Talvez você já tenha tentado academia, alguma dieta, ou
                  não tenha tentado nada antes porque não acreditava em nada que
                  via na frente, nós sabemos como é isso.
                </p>
                <br />
                <p>
                  Temos certeza que você só queira algo que dê resultado mais
                  rápido e duradouro, sem enganação, então agora chegou a sua
                  vez de ter o resultado que tanto busca há anos!
                </p>
                <br />
                <p>
                  Você só precisa estar decidida e seguir nossas orientações
                  durante o programa, combinado?
                </p>
              </article>
              <div className='w-full md:w-2/3 mx-auto'>
                <Image src={BalancaImage} alt='Mpesa Icon' />
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-4 px-4 text-center'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-8 text-center'>
              O que você vai receber adquirindo o Programa <br /> Receitas Para
              Secar em 30 Dias
            </h2>
            <p className='mt-3 text-xl font-light'>
              Serão 2 e-books complementares!
            </p>
            <p className='mt-3 text-xl font-light'>
              Receba imediatamente e acesse agora mesmo no seu computador ou
              celular
            </p>
            <div className='flex flex-col md:flex-row gap-8 mt-16'>
              <div className='md:w-64 md:mx-16 w-full md:px-0 px-12 flex justify-center'>
                <Image objectFit='contain' src={Ebook1} alt='Mpesa Icon' />
              </div>
              <div className=''>
                <h3 className='text-2xl font-semibold text-center'>
                  O E-book Receitas para secar em 30 dias:
                </h3>
                <p className='mt-4'>
                  E nele você encontrará mais de 100 páginas e muita receitas
                  que vão te fazer triturar toda a gordura acumulada em seu
                  corpo!
                </p>
                <ul className='mt-4 flex flex-col gap-4'>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <MiniCheckIcon />
                    </div>
                    <span>
                      A Receita Secreta do Chá mais PODEROSO do Brasil
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <MiniCheckIcon />
                    </div>
                    <span>
                      Receitas de Bebidas Bomba para perder peso em 2 semanas de
                      uso
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <MiniCheckIcon />
                    </div>
                    <span>
                      Sugestões de cardápios fit para você comer de forma
                      saudável no seu dia a dia
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <MiniCheckIcon />
                    </div>
                    <span>
                      Receitas de Doces Fit e séries de Circuito Funcional para
                      queimar gordura mesmo dormindo
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-8 mt-16'>
              <div className='md:w-80 md:mx-16 w-full md:px-0 px-12 flex justify-center'>
                <Image objectFit='contain' src={Ebook2} alt='Mpesa Icon' />
              </div>
              <div className=''>
                <h3 className='text-2xl font-semibold text-center'>
                  E mais! O E-book do Desafio de 30 Dias:
                </h3>
                <p className='mt-4'>
                  Um cronograma completo e passo a passo desde o zero para você
                  começar ir desde o seu primeiro dia de reeducação alimentar,
                  até atingir o seu corpo desejado!
                </p>
                <ul className='mt-4 flex flex-col gap-4'>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <MiniCheckIcon />
                    </div>
                    <span>
                      O passo a passo completo do que comer e beber durante os
                      30 dias
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <MiniCheckIcon />
                    </div>
                    <span>
                      Entenderá como funcionam as Receitas para secar e quando
                      usá-las.
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <MiniCheckIcon />
                    </div>
                    <span>
                      Será guiada por todas as refeições diárias com base nas
                      sugestões de cardápios.
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <GiftIcon />
                    </div>
                    <span>
                      ACESSO AO NOSSO GRUPO VIP NO FACEBOOK COM MAIS DE 75 MIL
                      PESSOAS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full bg-cricut-green py-12 px-4 text-white italic clip-right text-center'>
          <div className='container mx-auto'>
            <h2 className='text-2xl md:text-3xl font-semibold'>
              Um e-book complementa o outro. Você irá usar os 2 juntos para
              expulsar de 5 a 10kg em 30 dias!
            </h2>
          </div>
        </section>
        <section className='w-full py-16 px-4 text-center'>
          <div className='container mx-auto'>
            <h3 className='text-xl font-bold mt-4'>
              Veja no vídeo acima você vai entender melhor como funciona o
              programa na prática
            </h3>
            <p className='mt-8'>
              Ao adquirir o programa você receberá o seu material você vai
              abri-lo e entrar na terceira página e clicar no botão para ser
              redirecionada para o nosso Grupo Vip. A partir esse momento você
              será acompanhada por nós e estará juntas com as outras meninas.
            </p>
            <p className='mt-8 text-2xl'>
              Um programa 100% animado com milhares de pessoas buscando os
              mesmos objetivos que os seus. Será incrível, motivador e essa
              semana está com um valor mais barato que um Hambúrguer...
            </p>
          </div>
        </section>
        <section className='w-full py-16 px-4'>
          <div className='container mx-auto'>
            <section className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
              <article>
                <p className='mb-4 text-gray-400 text-lg font-light tracking-wide'>
                  Risco zero para você!
                </p>
                <h2 className='text-3xl font-semibold'>
                  <span className='text-cricut-green'>7 dias </span> de Garantia
                  incondicional
                </h2>
                <div className='h-1 w-1/5 my-4 bg-cricut-green rounded clip-right'></div>
                <p className='mb-1'>
                  Simples! Compre agora e tenha direito de arrependimento de até
                  7 dias.
                </p>
                <p>
                  Se você não gostar ou não se adaptar ao nosso método, basta
                  enviar um e-mail para desafio19dias.contato@gmail.com dentro
                  do período de garantia e cancelamos sua compra, reembolsando
                  100% do valor pago sem burocracias. Esse é o nosso compromisso
                  com você!
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
              <span className='bg-white text-cricut-green px-2'>
                HOJE É O ULTIMO DIA
              </span>
            </h2>
            {/* <p className='text-xl text-white max-w-xl mt-4 mb-2'></p> */}
            <div className='my-4'>
              <p className='text-xl font-semibold text-white  line-through'>
                <span className='text-base'>antes </span>997,00MT
              </p>
              <p className='text-2xl md:text-3xl font-semibold text-white'>
                <span className='text-base'>hoje </span>497,00MT
              </p>
            </div>
            <div className='max-w-md'>
              <Image
                objectFit='contain'
                height={350}
                src={Ebook1}
                alt='Cricut explore air 2 image'
              />
            </div>
            <p className='text-2xl md:text-3xl mb-4'>⬇️⬇️⬇️</p>
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
            </div>
          </div>
        </section>
        <FAQ />
        <section className='w-full bg-cricut-green text-white py-24 px-4 text-center clip-right'>
          <div className='container flex flex-col items-center mx-auto'>
            <Timer />
            <h2 className='text-2xl md:text-3xl font-semibold mt-8'>
              NÃO ESTÁ ACOSTUMADA A COMPRAR PELA INTERNET?
            </h2>
            <p className='text-2xl md:text-3xl mb-8'>
              Fique tranquila, comprar o nosso programa é 100% confiável
            </p>
            <div className='text-xl flex flex-col gap-4 text-left mb-8'>
              <div className='flex gap-4 items-center'>
                <div className='w-12'>
                  <PersonIcon />
                </div>
                <p>
                  Dados pessoais seguros e não são compartilhados, fique
                  tranquila.
                </p>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-12'>
                  <SecurityIcon />
                </div>
                <p>
                  Pagamento automático, rápido e com segurança. Usamos Anti
                  Clone no nosso sistema.
                </p>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-12'>
                  <CheckIcon />
                </div>
                <p>
                  Você irá receber o ebook assim que o pagamento cair no
                  sistema, no cartão ou mpesa o valor cai na hora e por
                  transferência pode levar até 2 dias úteis.
                </p>
              </div>
            </div>
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
            </div>
          </div>
        </section>
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
      <Toaster />
    </>
  );
};

export default LandingPage;
