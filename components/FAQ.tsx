import Image from 'next/image';
import Collapsible from 'react-collapsible';
import Entidade2Icon from '../assets/image/entidade2.png';
import Transfer2Icon from '../assets/image/transfer2.png';
import MpesaIcon from '../assets/image/mpesa.png';
import {
  ENTIDADE,
  MOZA,
  MPESA_NAME,
  MPESA_NUMBER,
  NIB,
  REFERENCIA,
} from '../constants';

const FAQ = () => (
  <section className='w-full py-16 px-4'>
    <div className='container flex flex-col items-center mx-auto'>
      <h2 className='text-3xl text-cricut-green text-center font-semibold'>
        Perguntas frequentes
      </h2>
      <section className='flex flex-col gap-4 mt-4'>
        <Collapsible
          trigger='COMO IREI RECEBER O PRODUTO?'
          triggerClassName='font-semibold'
          contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
        >
          <p>
            Geralmente você recebe a maquina em 2 dias após a confirmação do
            pagamento. A ENTREGA É GRATUITA (para Maputo e Matola), então você
            não precisa se preocupar com isso.
          </p>
          <p>
            <span className='font-semibold'>NOTA:</span> Em casos em que não
            temos a encomenda em stock, a encomenda leva de 3 a 7 dias para ser
            entregue a você mas sempre receberá atualizações pelo whatsapp sobre
            a entrega da maquina
          </p>
        </Collapsible>

        <Collapsible
          trigger='QUAIS SÃO AS FORMAS DE PAGAMENTO DISPONÍVEIS?'
          triggerClassName='font-semibold'
        >
          <section className='grid grid-cols-1 sm:grid-cols-3 text-center border-t-2 border-cricut-green border-opacity-50 py-8 gap-4'>
            <article className='shadow-md rounded-xl p-2'>
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
            <article className='shadow-md rounded-xl p-2'>
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
            <article className='shadow-md rounded-xl p-2'>
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
            <article className='sm:col-span-3 font-semibold'>
              <span className='text-cricut-green'>NOTA:</span> Após fazer o
              pagamento, por favor Envie o comprovativo do pagamento via
              WhatsApp ou e-mail.
            </article>
          </section>
        </Collapsible>
        <Collapsible
          trigger='ENTREGA PARA OUTRAS PROVÍNCIAS?'
          triggerClassName='font-semibold'
          contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
        >
          <p>
            Sim, nós entregamos o produto para qualquer ponto do país através do
            portador diário sobre custos adicionais. Consulte o nosso suporte
            para saber os custos{' '}
            <a className='underline text-cricut-green' href='tel:+258851755378'>
              AQUI
            </a>
          </p>
        </Collapsible>
        <Collapsible
          trigger='NÃO SEI DESENHAR E NEM ENTENDO DE DESIGN, CONSIGO USAR A MÁQUINA?'
          triggerClassName='font-semibold'
          contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
        >
          <p>
            Sim! A software da maquina é muito simples de usar, tem alguns
            projetos prontos e você receberá uma lista de video aulas que vão te
            guiar a usar melhor a maquina. Além disso, a Print Flow ofereço uma
            aula gratis presencial.
          </p>
        </Collapsible>
        <Collapsible
          trigger='COMO FAÇO PARA COMPRAR ESSE PRODUTO? É SEGURO?'
          triggerClassName='font-semibold'
          contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
        >
          <p>
            Para realizar a compra basta clicar em qualquer botão verde desse
            site e efetuar os passos para o pagamento do produto e enviar o
            comprovativo. A empresa é totalmente confiável, trabalhando na área
            a mais de 2 anos.
          </p>
        </Collapsible>
      </section>
    </div>
  </section>
);
export default FAQ;
