export const Sobre = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          A Empresa
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10">
          Na SÓ VIAGENS, acreditamos que viajar é mais do que apenas visitar
          novos lugares—é uma experiência transformadora que enriquece a alma e
          amplia os horizontes. Nossa missão é tornar cada jornada única,
          proporcionando momentos inesquecíveis e criando memórias que durarão
          para sempre.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="text-center">
            <div className="text-blue-700 text-5xl mb-4">
              📘
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Nossa filosofia
            </h2>
          </div>
          <div className="text-center">
            <div className="text-yellow-500 text-5xl mb-4">
              🏆
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Nossos prêmios
            </h2>
          </div>
          <div className="text-center">
            <div className="text-blue-900 text-5xl mb-4">
              👤
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Trabalhe conosco
            </h2>
          </div>
        </div>

        <div className="text-lg text-gray-700 leading-relaxed mb-10">
          <p className="mb-4">
            Fundada em 2010, a SÓ VIAGENS nasceu do sonho de conectar pessoas a
            destinos incríveis, facilitando o acesso a experiências autênticas e
            personalizadas. Somos uma equipe apaixonada por explorar o mundo e
            dedicada a compartilhar essa paixão com nossos clientes. Nossa sede
            está localizada no coração de Natal, mas nosso alcance é global,
            atendendo viajantes de todas as partes do Brasil e do mundo.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Nossa Filosofia
        </h2>
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Acreditamos que cada cliente é único, e por isso nos dedicamos a
            oferecer um atendimento personalizado e de alta qualidade. Desde o
            primeiro contato até o retorno da sua viagem, nossa equipe está
            sempre disponível para garantir que tudo saia perfeito. Prezamos
            pela transparência, pela ética e, acima de tudo, pela satisfação dos
            nossos clientes.
          </p>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Nossos prêmios
        </h2>
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Ao longo dos anos, a SÓ VIAGENS tem sido reconhecida por sua
            excelência no atendimento e pela dedicação em proporcionar
            experiências de viagem inesquecíveis. Recebemos diversos prêmios na
            indústria do turismo, incluindo o Prêmio de Excelência em
            Atendimento ao Cliente e o Melhor Agência de Viagens Personalizadas,
            reforçando nosso compromisso em oferecer serviços de alta qualidade
            e consolidando nossa posição como líder no mercado de turismo. Esses
            reconhecimentos são uma prova do nosso esforço contínuo em superar
            as expectativas dos nossos clientes e parceiros.
          </p>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Trabalhe conosco
        </h2>
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Você é apaixonado por viagens e busca uma carreira que permita
            transformar sonhos em realidade? Na SÓ VIAGENS, estamos sempre em
            busca de profissionais talentosos, dinâmicos e dedicados que
            compartilham da nossa paixão por explorar o mundo e criar
            experiências inesquecíveis para nossos clientes. Como parte da nossa
            equipe, você terá a oportunidade de trabalhar em um ambiente
            colaborativo e inovador, onde cada dia traz novos desafios e
            aprendizados. Valorizamos o desenvolvimento pessoal e profissional,
            oferecendo treinamento contínuo e possibilidades reais de
            crescimento dentro da empresa. Se você é criativo, proativo e tem o
            desejo de fazer a diferença na vida das pessoas, queremos conhecer
            você! Envie seu currículo e venha fazer parte da equipe da SÓ
            VIAGENS, onde o próximo destino de sucesso pode ser o seu. Envie seu
            currículo para:
            <br />
            <a
              href="mailto:recrutamento@soviagens.com.br"
              className="text-blue-500 underline hover:text-blue-700"
            >
              recrutamento@soviagens.com.br
            </a>
            <br />
            Junte-se a nós e ajude a criar histórias que serão lembradas para
            sempre!
          </p>
        </div>
      </div>
    </div>
  );
};
