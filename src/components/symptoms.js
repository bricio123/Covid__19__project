import React from "react";
import { Container, Col, Row, Image, Modal, Button } from "react-bootstrap";
import ImgSymptoms from "../assets/sick.png";
import ImgSymptomsCircle from "../assets/Circle.svg";
import "../components/symptoms.scss";
import Nurse from "../assets/nurse.svg";
const Symptoms = () => (
  <Container>
    <Col className="py-5">
      <Col className="text-right m-5">
        <h2 className="m-5">Sintomas do COVID-19</h2>
      </Col>
      <Row className="d-flex align-items-center">
        <Col className="text-left" lg={3}>
          <section classsName="icons__symptons ">
            <AppCe />
          </section>

          <section classsName="icons__symptons ">
            <AppTo />
          </section>

          <section classsName="icons__symptons ">
            <AppFe />
          </section>
        </Col>
        <Col
          className="img__symptoms  d-flex align-items-center justify-content-center "
          lg={6}
        >
          <Image src={ImgSymptomsCircle} className="img__circle" />
          <Image src={ImgSymptoms} />
        </Col>
        <Col className="text-right" lg={3}>
          <section classsName="icons__symptons">
            <AppDi />
          </section>
          <section classsName="icons__symptons">
            <AppMu />
          </section>
          <section classsName="icons__symptons">
            <AppPe />
          </section>
        </Col>
      </Row>
    </Col>
  </Container>
);

//primeiro item
const One = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
        Entenda!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4 className="text-dark">O que é Cefaleia tensional?</h4>
      <p className="text-dark">
        A cefaleia tensional é geralmente uma dor difusa, de leve a moderada
        intensidade na sua cabeça, muitas vezes descrita como a sensação de uma
        faixa apertando o crânio. A cefaleia tensional é o tipo mais comum de
        dor de cabeça, e suas causas não são bem compreendidas. De acordo com a
        Sociedade Brasileira de Cefaleia, cerca de 38% a 74% dos brasileiros
        sofrem com cefaleia tensional.
      </p>
      <Image src={Nurse} className="nurse__img" />
      <h6 className="text-dark">Causas</h6>
      <p className="text-dark">
        {" "}
        Não há uma causa única para dor de cabeça tensional. Este tipo de dor de
        cabeça não é uma característica hereditária que ocorre em famílias. Em
        algumas pessoas, dores de cabeça de tensão são causados pela contração
        involuntária e crônica de músculos na parte de trás do pescoço e do
        couro cabeludo. Essa tensão muscular pode ser causada por:
        <ul>
          <li> Repouso insuficiente </li>
          <li> Má postura </li>
          <li> Estresse emocional ou mental, incluindo</li>
          <li> depressão </li>
          <li> Ansiedade </li>
          <li> Cansaço </li>
          <li> Fome </li>
          <li> Excesso de exercícios. </li>
        </ul>
        Dores de cabeça tensionais são geralmente desencadeadas por algum tipo
        de estresse de origem externa ou interna. Exemplos de fatores de
        estresse incluem: Ter problemas em casa / vida familiar difícil Estar
        esperando um filho ou filha Preparar-se para testes ou exames Voltar de
        férias Iniciar um novo trabalho Perder um emprego Estar insatisfeito com
        o próprio corpo Prazos no trabalho Competição em esportes ou outras
        atividades Ser perfeccionista Não dormir o suficiente Se envolver em
        muitas atividades / organizações. A cefaleia tensional episódica
        geralmente acontece por uma situação estressante isolada ou um acúmulo
        de estresse. Estar exposto ao estresse diariamente pode levar à cefaleia
        tensional crônica.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

function AppCe() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setModalShow(true)} className="icons__symptoms">
        Cefalea
      </button>

      <One show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

//segundo item de opção
const Tow = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
        Entenda!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4 className="text-dark my-2">O que é Tosse?</h4>
      <p className="text-dark">
        Há dois tipos de tosse: a seca e a produtiva. É a presença ou não de
        muco que estabelece a diferença. Na tosse produtiva a secreção se
        movimenta e é eliminada; na seca, esse catarro parece não existir. É
        importante avaliar se a tosse é realmente seca, ou se a secreção não
        flui por desidratação ou tratamento incorreto.
      </p>
      <Image src={Nurse} className="nurse__img" />
      <h6 className="text-dark mt-5">Causas da Tosse</h6>
      <p className="text-dark">
        O fumo é a principal causa, porque aumenta o volume de muco produzido
        pelos brônquios; causa irritação física e química das mucosas; destrói
        os cílios que cobrem o revestimento interno dos brônquios; facilita o
        acúmulo de material estranho às vias aéreas. Outras causas importantes
        são a sinusite, principalmente em crianças, a síndrome do gotejamento
        pós-nasal, a asma, o refluxo gastroesofágico, infecções respiratórias,
        bronquite crônica e medicamentos para controle da hipertensão.
        <h6 className="my-4">RECOMENDAÇÕES EM CASO DE TOSSE</h6>
        <ul>
          <li>
            {" "}
            Beba bastante água. A água é o melhor antitussígeno que se conhece,
            pois facilita a movimentação do muco sobre a camada de cílios;{" "}
          </li>
          <li>
            {" "}
            Dê preferência aos líquidos quentes, que costumam trazer alívio
            sintomático, como os chás de nossas avós: chá com limão e mel, de
            camomila, erva cidreira, erva doce, entre outros. Chá-preto e
            chá-mate devem ser evitados por causa do alto teor de cafeína;{" "}
          </li>
          <li>
            {" "}
            Mantenha a cabeça elevada à noite, usando travesseiros extras ou
            levantando a cabeceira da cama com calços;
          </li>
          <li> Mantenha os ambientes bem ventilados;</li>
          <li>
            {" "}
            Aumente o teor de umidade do ar com umidificadores ou vaporizadores.
            Tome banhos quentes prolongados para respirar bastante vapor;
          </li>
          <li>
            {" "}
            Não tome remédios por conta própria. Procure assistência médica para
            diagnóstico e tratamento.
          </li>
        </ul>
        Dores de cabeça tensionais são geralmente desencadeadas por algum tipo
        de estresse de origem externa ou interna. Exemplos de fatores de
        estresse incluem: Ter problemas em casa / vida familiar difícil Estar
        esperando um filho ou filha Preparar-se para testes ou exames Voltar de
        férias Iniciar um novo trabalho Perder um emprego Estar insatisfeito com
        o próprio corpo Prazos no trabalho Competição em esportes ou outras
        atividades Ser perfeccionista Não dormir o suficiente Se envolver em
        muitas atividades / organizações. A cefaleia tensional episódica
        geralmente acontece por uma situação estressante isolada ou um acúmulo
        de estresse. Estar exposto ao estresse diariamente pode levar à cefaleia
        tensional crônica.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

function AppTo() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setModalShow(true)} className="icons__symptoms">
        Tosse
      </button>

      <Tow show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

//terceiro
const Three = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
        Entenda!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4 className="text-dark my-2">O que é Febre?</h4>
      <p className="text-dark">
        A febre é um dos sinais clínicos mais comuns no ser humano e se
        caracteriza por uma elevação acima da média da temperatura corporal. A
        febre é tão comum que a maioria de nós nunca parou para pensar no seu
        real significado. PUBLICIDADE Geralmente associada à infecção, a febre
        também pode ocorrer em diversas outras situações, como em caso de
        tumores, doenças autoimunes, reação a medicamentos, etc. O corpo humano
        apresenta uma temperatura normal entre 36 e 37,5ºC. Ela sofre alterações
        ao longo do dia, estando mais próxima de 36ºC durante a madrugada e mais
        para 37,5ºC no final da tarde. Esta variação é chamada de ciclo
        circadiano da temperatura corporal. Uma temperatura de 37,5ºC no início
        da manhã tem muito mais relevância do que esta mesma temperatura no
        final do dia. Algumas pessoas têm naturalmente temperaturas um pouco
        mais elevadas que outras, podendo apresentar algo em torno de 37,5ºC ao
        final do dia sem que isso tenha qualquer significado clínico. Por outro
        lado, há aqueles que possuem temperatura basal mais baixa, às vezes
        próximo de 35,5ºC. Nestes, uma temperatura de 37,5ºC é algo bem acima do
        seu normal. Portanto, antes de se diagnosticar uma febre, é importante
        saber qual a temperatura habitual do paciente. Consideramos febre a
        elevação da temperatura corporal acima da média do paciente. Como muitas
        vezes não temos um histórico da variação habitual da temperatura de cada
        indivíduo, usamos os valores médios encontrados em estudos para definir
        os limites de temperatura que indicam febre. É importante termos em
        mente também que o modo como medirmos a temperatura corporal pode
        fornecer resultados diferentes. Quanto mais próximo do centro do corpo,
        maior será a temperatura.
      </p>
      <Image src={Nurse} className="nurse__img" />
      <h6 className="text-dark mt-5">
        Quais são as principais causas de febre?
      </h6>
      <p className="text-dark">
        As causas mais comuns de febre são as infecções. Doenças como pneumonia,
        meningite, pielonefrite e endocardite (infecção das válvulas do coração)
        costumam vir acompanhadas de febre alta e debilidade física. Gripe, ao
        contrário do resfriado, também pode ser causa de febre alta (leia:
        Diferenças entre gripe e resfriado). Quadros de febre prolongada,
        normalmente por volta dos 38ºC, às vezes intermitentes ou somente
        noturna, associada à perda de peso, em geral indicam infecções como
        tuberculose ou AIDS. Câncer, leucemia e linfoma podem causar febre baixa
        ou febrículas prolongadas. Doenças autoimunes, como lúpus, artrite
        reumatoide também causam febre. Vários medicamentos podem causar febre,
        incluindo antibióticos e anti-inflamatórios, por mais paradoxal que isso
        possa parecer. Normalmente são reações individuais aos componentes da
        droga, em um processo semelhante a uma alergia. Algumas causas menos
        comuns de febre incluem:
        <ul>
          <li>Hipertireoidismo.</li>
          <li>Excesso de exposição solar.</li>
          <li>Cirurgias.</li>
          <li> Traumas.</li>
          <li>Feocromocitoma.</li>
          <li>Embolia pulmonar.</li>
          <li>Desidratação.</li>
          <li>AVC (com lesão do hipotálamo).</li>
          <li>Hepatite por álcool.</li>
        </ul>
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

function AppFe() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setModalShow(true)} className="icons__symptoms">
        Febre
      </button>

      <Three show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

//quarta
const Four = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
        Entenda!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4 className="text-dark my-2">O que é Dispneia?</h4>
      <p className="text-dark">
        Dispneia é a sensação de falta de ar, dificuldade de respirar ou
        respiração incompleta. Geralmente essa sensação é originada por doenças
        cardíacas e/ou pulmonares, mas pode ser causada por diversas outras
        condições. A dispneia pode ser classificada em aguda, crônica, dispneia
        de esforço, de repouso e suspirosa.
      </p>
      <Image src={Nurse} className="nurse__img" />
      <h6 className="text-dark mt-5">Causas de dispneia</h6>
      <ul className="text-dark">
        <li>
          Baixa concentração de oxigênio no ar, como em grandes altitudes;
        </li>
        <li>Obstrução das vias aéreas;</li>
        <li>Doença cardíaca;</li>
        <li> Problemas no pulmão;</li>
        <li>Doenças neurológicas;</li>
        <li>Medicamentos;</li>
        <li>
          Entre outras que levam a incapacidade do sangue carrear o oxigênio
          pelo corpo, como na anemia grave, sangramentos e doenças
          hematológicas.
        </li>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

function AppDi() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setModalShow(true)} className="icons__symptoms">
        Dispneia
      </button>

      <Four show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

//quinta
const Five = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
        Entenda!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-dark">
      <h4 className="my-2">O que é Dor muscular?</h4>
      <p className="">
        A dor muscular (CID 10 M79. 1) é comum e pode envolver mais de um
        músculo. Ela pode, também, envolver ligamentos, tendões e fáscias, os
        tecidos moles que conectam os músculos e ossos. Pode acontecer em muitas
        partes do corpo como perna, coxa, ombro, costas, pescoço, entre outros.
      </p>
      <Image src={Nurse} className="nurse__img" />
      <h6 className="mt-5">Causas</h6>
      <p>
        A dor muscular está mais frequentemente relacionada a tensão, uso
        excessivo ou lesão muscular por exercício ou trabalho fisicamente
        desgastante. Nessas situações, a dor tende a envolver músculos
        específicos e começa durante ou logo após a atividade. Em geral a
        atividade que está causando a dor muscular é óbvia. Porém, muitas vezes
        o exercício ou postura que a desencadeiam é difícil de ser de ser
        reconhecido. A dor muscular também pode ser um sinal de condições que
        afetam todo seu corpo, como algumas infecções (incluindo a gripe). Uma
        causa comum que muitas vezes é confundida com dor muscular é a
        fibromialgia, uma condição que modifica o sistema que reconhece a dor
        causando dores muitas vezes generalizadas, distúrbio do sono, fadiga e
        dor de cabeça. Mas inúmeras causas podem levar à dor muscular. Veja
        algumas:
      </p>
      <ul className="">
        <li>
          Baixa concentração de oxigênio no ar, como em grandes altitudes;
        </li>
        <li>Obstrução das vias aéreas;</li>
        <li>Doença cardíaca;</li>
        <li> Problemas no pulmão;</li>
        <li>Doenças neurológicas;</li>
        <li>Medicamentos;</li>
        <li>
          Entre outras que levam a incapacidade do sangue carrear o oxigênio
          pelo corpo, como na anemia grave, sangramentos e doenças
          hematológicas.
        </li>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

function AppMu() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setModalShow(true)} className="icons__symptoms">
        Dor Muscular
      </button>

      <Five show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

//sexta
const Six = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
        Entenda!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-dark">
      <h4 className="my-2">O que é Dor no Peito?</h4>
      <p className="">
        Dor no peito (CID 10 - R07) é o desconforto ou dor que uma pessoa sente
        na parte frontal do corpo, geralmente abaixo do pescoço e acima do
        abdômen superior. Nem sempre é sintoma de infarto, podendo ser sintoma
        de outras doenças e condições. Além disso, pode vir acompanhado de falta
        de ar, tontura, entre outros. A dor no peito pode atingir diferentes
        intensidades e migrar para outras partes do corpo, como as costas, o
        pescoço e ambos os braços. Os sintomas da dor no peito variam de acordo
        com a causa da dor. Majoritariamente, a dor no peito é relacionada a
        algum problema no coração. Nesses casos, os sintomas mais comuns são:
      </p>
      <ul>
        <li>Sensação de aperto no coração</li>
        <li>
          Dor que se espalha pelo corpo, em regiões como costas, pescoço, nuca,
          ombros e braços (especialmente o esquerdo)
        </li>
        <li>
          Dor recorrente, que dura por alguns minutos, desaparece e retorna,
          variando sempre de intensidade
        </li>
        <li>Pode vir junto com falta de ar, tontura, náusea e sudorese.</li>
      </ul>
      <h6>Alguns sintomas sugerem ser não cardíacos, como:</h6>
      <ul>
        <li>Gosto amargo na boca</li>
        <li>Dificuldade de deglutição</li>
        <li>Dor que varia de intensidade conforme você muda de posição</li>
        <li>Dor que se agrava quando você respira fundo ou tosse</li>
        <li>Sensibilidade na região do peito.</li>
      </ul>
      <Image src={Nurse} className="nurse__img" />
      <h6 className="mt-5">Causas</h6>
      <p>
        Existem diversas causas possíveis para a dor no peito. Ela também pode
        estar diretamente relacionada a alguns órgãos.
      </p>
      <p>Causas ligadas ao coração:</p>
      <ul className="">
        <li>Infarto </li>
        <li>Angina</li>
        <li>Dissecção aórtica</li>
        <li>Pericardite.</li>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

function AppPe() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setModalShow(true)} className="icons__symptoms">
        Dor no Peito
      </button>

      <Six show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default Symptoms;
