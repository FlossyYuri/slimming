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
            Segredo brasileiro chega em mo??ambique
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
            Foi revelado o m??todo{' '}
            <span className='text-cricut-green font-semibold'>
              100% natural
            </span>{' '}
            usados por mais de 15.000 Pessoas no brazil para
            <span className='bg-cricut-green text-white px-4 mx-2'>
              eliminar gordura localizada e emagrecer de 4 a 10 kilos
            </span>
            <br /> em at?? 30 dias
          </h2>
          <YouTube
            className='my-4 video-container'
            iframeClassName='video'
            videoId='aOldf0UZICY'
            opts={opts}
            onReady={onPlayerReady}
          />
          <p className='text-base uppercase font-normal leading-tight mt-4'>
            Acesso vital??cio por apenas 497MT! <br /> Pague a vista por Mpesa ou
            Cart??o e <br /> receba instantaneamente. Compra 100% segura!
          </p>
        </section>
        <section className='w-full px-4 text-center'>
          <div className='container bg-slate-700 mx-auto p-8 text-white'>
            <h2 className='text-2xl font-bold mb-4'>
              6 Transforma????es Impactantes em Seu Corpo nas pr??ximas semanas:
            </h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 text-left'>
              <li className='flex gap-2'>
                <span className='w-6'>
                  <StarIcon />
                </span>
                <span className='text'>
                  Barriga diminue at?? 12cm por m??s&nbsp;
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
                  Redu????o de peso&nbsp; (de 5 a 10 quilos)
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
              ??LTIMAS HORAS COM VALOR PROMOCIONAL DISPON??VEL!
            </h2>
            <div className='grid grid-cols-1 lg:items-center sm:grid-cols-2 gap-4'>
              <div>
                <Image src={MenuImage} alt='Menu' />
              </div>
              <div className='px-8'>
                <ul className='text-left text-white list-disc flex flex-col gap-2'>
                  <li>Reeduca????o com Receitas</li>
                  <li>Aprenda a comer saud??vel</li>
                  <li>Receitas r??pidas e pr??ticas</li>
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
              O Programa ?? a base de que alimentos simples que voc?? tem em casa,
              s??o muitas receitas como:
            </h2>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              <Review
                title='Sucos Detox Para Desintoxicar'
                description='Os estudos apontaram que al??m de reduzir o colesterol o detox tamb??m elimina gordura pelas fezes e urina.'
                image={Bebida1}
              />
              <Review
                title='Sopas Milagrosas'
                description='A combina????o perfeita para queimar gordura em uma sopa super gostosa que substitui refei????es.'
                image={Bebida2}
              />
              <Review
                title='Shakes Funcionais'
                description='??tima bebida com bastante nutrientes para aumentar sua imunidade e saciar suas fome de preparo r??pido.'
                image={Bebida3}
              />
              <Review
                title='O ch?? mais poderoso do Brasil'
                description='Receita secreta de um dos ch??s mais procurados no Brasil quando o assunto ?? perca de peso. Incr??veis os Resultados.'
                image={Bebida4}
              />
              <Review
                title='Bebidas Bomba'
                description='Muitos problemas card??acos s??o causadas por problemas circulat??rios. O yoga ajuda a bombear o sangue e a circular o oxig??nio para todas as partes do corpo de forma saud??vel.'
                image={Bebida5}
              />
              <Review
                title='Card??pios Fit'
                description='Card??pios pr??ticos para a semana toda. Lembrando que n??o ?? uma dieta e sim uma reeduca????o. A nossa inten????o ?? que voc?? coma saud??vel.'
                image={Bebida6}
              />
            </div>
          </div>
        </section>
        <section className='w-full bg-cricut-green text-white py-24 px-4 text-center clip-right'>
          <div className='container flex flex-col items-center mx-auto'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-8 text-center'>
              Todas estas transforma????es agora est??o dispon??veis para voc?? o
              Ebook RECEITAS PARA SECAR EM 30 DIAS
            </h2>
            <p>
              Um passo a passo completo de 30 dias que vai mudar sua vida para
              sempre, voc?? n??o precisar?? mais de dietas malucas e de produtos em
              c??psula para chegar ao seu corpo dos sonhos, com o nosso programa
              voc?? come??ar?? a mudar seu corpo a partir de hoje!
            </p>
          </div>
        </section>
        <section className='w-full py-16 px-4'>
          <div className='container flex flex-col items-center mx-auto'>
            <div className='w-12 mb-2'>
              <ChatIcon />
            </div>
            <p className='text-sm my-2'>
              Leia alguns resultados de clientes que est??o participando, abaixo:
            </p>
            <p className='bg-cricut-green text-white px-2 text-lg'>
              Espa??o do Cliente
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
              que j?? tiveram resultados surpreendentes com as{' '}
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
              Veja a transforma????o que nosso programa trouxe na vida dessas
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
                    feliz quando mandou essa foto pra gente, ela viu a diferen??a
                    enorme em seu corpo e principalmente na regi??o do abd??men.
                    Ela perdeu mais de 10cm de barriga e est?? amando os
                    resultados, al??m do mais est?? 100% saud??vel depois do nosso
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
                    limitava dietas e mais dietas para emagrecer e s?? gastava
                    dinheiro e se privava muito. Ap??s o uso correto da
                    reeduca????o alimentar teve bastante resultado. Uma mulher que
                    j?? era feliz e ficou mais feliz ainda com o seu novo corpo.
                    Essa ?? a Iolanda!
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
                    com muita sa??de. Diminuiu os n??veis de a????car no sangue,
                    abaixou o colesterol e hoje est?? bonit??o como voc??s podem
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
              Se elas conseguem, voc?? tamb??m pode!
            </h3>
            <p className='text-sm mt-2 text-gray-400'>
              Aten????o: os resultados poder??o variar de pessoa para pessoa{' '}
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
                  N??s recomendamos ele para todas as pessoas que est??o cansadas
                  e frustradas com os mais diversos m??todos que tem por ai que
                  dizem que voc?? vai ficar com o corpo magro e bonito, mas nada
                  disso acontece.
                </p>
                <br />
                <p>
                  Para qualquer mulher que precisa de ajuda para transformar o
                  corpo. Talvez voc?? j?? tenha tentado academia, alguma dieta, ou
                  n??o tenha tentado nada antes porque n??o acreditava em nada que
                  via na frente, n??s sabemos como ?? isso.
                </p>
                <br />
                <p>
                  Temos certeza que voc?? s?? queira algo que d?? resultado mais
                  r??pido e duradouro, sem engana????o, ent??o agora chegou a sua
                  vez de ter o resultado que tanto busca h?? anos!
                </p>
                <br />
                <p>
                  Voc?? s?? precisa estar decidida e seguir nossas orienta????es
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
              O que voc?? vai receber adquirindo o Programa <br /> Receitas Para
              Secar em 30 Dias
            </h2>
            <p className='mt-3 text-xl font-light'>
              Ser??o 2 e-books complementares!
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
                  E nele voc?? encontrar?? mais de 100 p??ginas e muita receitas
                  que v??o te fazer triturar toda a gordura acumulada em seu
                  corpo!
                </p>
                <ul className='mt-4 flex flex-col gap-4'>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <MiniCheckIcon />
                    </div>
                    <span>
                      A Receita Secreta do Ch?? mais PODEROSO do Brasil
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
                      Sugest??es de card??pios fit para voc?? comer de forma
                      saud??vel no seu dia a dia
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <MiniCheckIcon />
                    </div>
                    <span>
                      Receitas de Doces Fit e s??ries de Circuito Funcional para
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
                  Um cronograma completo e passo a passo desde o zero para voc??
                  come??ar ir desde o seu primeiro dia de reeduca????o alimentar,
                  at?? atingir o seu corpo desejado!
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
                      Entender?? como funcionam as Receitas para secar e quando
                      us??-las.
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-8 mr-4'>
                      <MiniCheckIcon />
                    </div>
                    <span>
                      Ser?? guiada por todas as refei????es di??rias com base nas
                      sugest??es de card??pios.
                    </span>
                  </li>
                  {/* <li className='flex items-center'>
                      <div className='w-8 mr-4'>
                        <GiftIcon />
                      </div>
                      <span>
                        -
                      </span>
                    </li> */}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full bg-cricut-green py-12 px-4 text-white italic clip-right text-center'>
          <div className='container mx-auto'>
            <h2 className='text-2xl md:text-3xl font-semibold'>
              Um e-book complementa o outro. Voc?? ir?? usar os 2 juntos para
              expulsar de 5 a 10kg em 30 dias!
            </h2>
          </div>
        </section>
        <section className='w-full py-16 px-4 text-center'>
          <div className='container mx-auto'>
            <div
              className='wistia_responsive_padding relative'
              style={{ padding: '133.13% 0 0 0' }}
            >
              <div
                className='wistia_responsive_wrapper absolute top-0 left-0'
                style={{
                  height: '100%',
                  width: '100%',
                }}
              >
                <iframe
                  src='https://fast.wistia.net/embed/iframe/iyg0cs19cg?seo=false&videoFoam=true'
                  title='Receitas para emagrecer Video'
                  allow='autoplay; fullscreen'
                  frameBorder='0'
                  scrolling='no'
                  className='wistia_embed'
                  name='wistia_embed'
                  width='100%'
                  height='100%'
                ></iframe>
              </div>
            </div>
            <script
              src='https://fast.wistia.net/assets/external/E-v1.js'
              async
            ></script>
            <h3 className='text-xl font-bold mt-4'>
              Veja no v??deo acima voc?? vai entender melhor como funciona o
              programa na pr??tica
            </h3>
            <p className='mt-8'>
              Ao adquirir o programa voc?? receber?? o seu material
              automaticamente pelo seu email. Ao baixar-lo, nele ter?? as
              instru????es passo a passo para voc?? seguir com programa e garantir
              seus resultados.
            </p>
            <p className='mt-8 text-2xl'>
              Um programa 100% animado com milhares de pessoas buscando os
              mesmos objetivos que os seus. Ser?? incr??vel, motivador e essa
              semana est?? com um valor mais barato que uma Pizza...
            </p>
          </div>
        </section>
        <section className='w-full py-16 px-4'>
          <div className='container mx-auto'>
            <section className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
              <article>
                <p className='mb-4 text-gray-400 text-lg font-light tracking-wide'>
                  Risco zero para voc??!
                </p>
                <h2 className='text-3xl font-semibold'>
                  <span className='text-cricut-green'>7 dias </span> de Garantia
                  incondicional
                </h2>
                <div className='h-1 w-1/5 my-4 bg-cricut-green rounded clip-right'></div>
                <p className='mb-1'>
                  Simples! Compre agora e tenha direito de arrependimento de at??
                  7 dias.
                </p>
                <p>
                  Se voc?? n??o gostar ou n??o se adaptar ao nosso m??todo, basta
                  enviar um e-mail para desafio19dias.contato@gmail.com dentro
                  do per??odo de garantia e cancelamos sua compra, reembolsando
                  100% do valor pago sem burocracias. Esse ?? o nosso compromisso
                  com voc??!
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
                HOJE ?? O ULTIMO DIA
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
            <p className='text-2xl md:text-3xl mb-4'>??????????????????</p>
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
              N??O EST?? ACOSTUMADA A COMPRAR PELA INTERNET?
            </h2>
            <p className='text-2xl md:text-3xl mb-8'>
              Fique tranquila, comprar o nosso programa ?? 100% confi??vel
            </p>
            <div className='text-xl flex flex-col gap-4 text-left mb-8'>
              <div className='flex gap-4 items-center'>
                <div className='w-12'>
                  <PersonIcon />
                </div>
                <p>
                  Dados pessoais seguros e n??o s??o compartilhados, fique
                  tranquila.
                </p>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-12'>
                  <SecurityIcon />
                </div>
                <p>
                  Pagamento autom??tico, r??pido e com seguran??a. Usamos Anti
                  Clone no nosso sistema.
                </p>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-12'>
                  <CheckIcon />
                </div>
                <p>
                  Voc?? ir?? receber o ebook assim que o pagamento cair no
                  sistema, no cart??o ou mpesa o valor cai na hora e por
                  transfer??ncia pode levar at?? 2 dias ??teis.
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
        <title>Maquina de Corte Autom??tica - Cricut Explore Air 2</title>
        <link rel='icon' href={LogoIcon.src} />
        <meta
          name='description'
          content='Conhe??a a maquina de corte autom??tica que as papelarias personalizadas usam para fazer seus lindos artigos personalizados.'
        />
        <meta
          property='og:title'
          content='Maquina de Corte Autom??tica - Cricut Explore Air 2'
        />
        <meta
          property='og:description'
          content='Conhe??a a maquina de corte autom??tica que as papelarias personalizadas usam para fazer seus lindos artigos personalizados.'
        />
        <meta
          property='og:url'
          content='https://cricutexplore.flossyyuri.com/'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={LogoIcon.src} />
      </Head>
      <Footer />
      <MetaPixel />
      <Toaster />
    </>
  );
};

export default LandingPage;
