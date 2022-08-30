import Collapsible from 'react-collapsible';
const FAQ = () => (
  <section className='w-full py-16 px-4'>
    <div className='container flex flex-col items-center mx-auto'>
      <h2 className='text-3xl text-cricut-green text-center font-semibold'>
        Perguntas frequentes
      </h2>
      <section className='flex flex-col gap-4 mt-4'>
        <Collapsible
          trigger='Quais os maiores benefícios que o programa irá me proporcionar?'
          triggerClassName='font-semibold'
          contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
        >
          <p>
            Mais qualidade de vida, mais disposição, grande melhora na pele,
            intestino regulado e perca de peso de forma saudável.
          </p>
        </Collapsible>
        <Collapsible
          trigger='Tenho que pagar todos os meses para continuar participando?'
          triggerClassName='font-semibold'
          contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
        >
          <p>
            Não. Você faz apenas um único pagamento e poderá participar pelo
            tempo que quiser sem cobranças adicionais.
          </p>
        </Collapsible>
        <Collapsible
          trigger='Em quanto tempo eu posso começar a ver resultados?'
          triggerClassName='font-semibold'
          contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
        >
          <p>
            Os resultados vem logo nas primeiras semanas se você seguir o nosso
            passo a passo. Você vai perceber que suas roupas vão começar a ficar
            mais folgadas e você vai desinchar muito.
          </p>
        </Collapsible>
        <Collapsible
          trigger=' Meu dia é corrido e não tenho muito tempo. O programa vai me ajudar?'
          triggerClassName='font-semibold'
          contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
        >
          <p>
            Sim. Temos várias clientes que também trabalham o dia inteiro e
            ainda sim conseguem ter resultados excelentes.
          </p>
        </Collapsible>
        <Collapsible
          trigger='A partir do momento que eu compro,em quanto tempo eu recebo o conteúdo?'
          triggerClassName='font-semibold'
          contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
        >
          <p>
            Você vai receber o seu material imediatamente após a confirmação de
            sua compra.
          </p>
        </Collapsible>
        <Collapsible
          trigger='Eu nunca fiz uma reeducação alimentar antes, será que eu consigo?'
          triggerClassName='font-semibold'
          contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
        >
          <p>
            Definitivamente esse é o programa mais indicado para você, pois ele
            é a forma mais simplificada para ter resultados com saúde. Você vai
            amar participar e seguir o nosso programa.
          </p>
        </Collapsible>
      </section>
    </div>
  </section>
);
export default FAQ;
