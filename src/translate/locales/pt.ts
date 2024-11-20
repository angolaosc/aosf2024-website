import gup16 from '../../../public/Group 16.png';
import gup22 from '../../../public/Group 22.png';

const locales = {
  pt: {
    translations: {
      nav: {
        link_1: 'Inicio',
        link_2: 'Informações',
        link_3: 'Agenda',
        link_4: 'Patrocinadores',
        link_5: 'Contacto',
        button: 'Patrocine',
      },
      section_1: {
        title: 'Angola Open-source Fest 2024',
        description:
          'Prepare-se para mergulhar em debates, workshops e descobertas que impulsionarão a inovação e o progresso na comunidade de programação de Angola. Junte-se a nós nessa jornada de aprendizado e colaboração.',
        button1: 'Comprar Ingresso',
        button2: 'Assistir AOSFest 2023 Online',
        toastMessage: 'Em breve estará disponível',
        closeButton: "Fechar",
        date: {
          line_1: '30 de Novembro 2024',
          line_2: 'Data',
        },
        spotlights: [
          {
            icon: gup16,
            title: 'Workshops Especializados',
            description: 'Aprenda com especialistas em sessões práticas e interativas.',
            className: '',
          },
          {
            icon: gup22,
            title: 'Network Poderoso',
            description: 'Conecte-se com uma Comunidade de Inovadores',
            className: '',
          },
          {
            icon: gup16,
            title: 'Workshops Especializados',
            description: 'Participe de Desafios Reais e Colabore com a Comunidade',
            className: '',
          },
        ],
        contagem : {
          title: 'Contagem Regressiva para o Evento!',
          days: 'Dias',
          hours: 'Horas',
          minutes: 'Minutos',
          seconds: 'Segundos'
        }
      },

      section_2: {
        detail: {
          firstP: 'O Angola Open Source Fest é um evento que celebra a inovação e a colaboração na área de tecnologia em Angola. Voltado para estudantes, profissionais e entusiastas de software livre, o festival promove palestras, oficinas e discussões sobre o desenvolvimento de software open source e sua aplicação no contexto angolano.',
          secondP: "É uma oportunidade para aprender, trocar conhecimentos e conectar-se com a comunidade, além de incentivar o uso de tecnologias acessíveis e seguras. O evento reforça o compromisso com a independência tecnológica e o fortalecimento do ecossistema digital em Angola."
        },
      },
      keynotes: [
        {
          Img : "/keynoteSpeakers/miguel-araujo.jpg",
          Nome: "Miguel Araújo",
          Descricao: "Kinsari - Sistemas de Informaçãoa"
        },
        {
          Img : "/keynoteSpeakers/daniel-homorodean.jpg",
          Nome: "Daniel Homorodean",
          Descricao: "Typo3 Association"
        },
        {
          Img : "/keynoteSpeakers/euclides-mfumu.jpg",
          Nome: "Euclides Mfumu",
          Descricao: "Data Science, Standard Bank Angola"
        },
        {
          Img : "/keynoteSpeakers/matias-perazoli.jpg",
          Nome: "Matias Perazoli",
          Descricao: "ETIC"
        }
      ],
      section_3: {
        title: 'Nossos Palestrantes',
        description: 'Sábado, 30 de Novembro - 2024',
        state: {
          done: 'Realizado',
          canceled: 'Cancelado'
        },
        topics: [
          {
            tipo: 'Palestra',
            foto: '/speakers/jeferson-fernando.png',
            titulo: 'Engenharia de plataforma: entregando infraestrutura como um produto com Terraform',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Jeferson Fernando',
            descricaoOrador: 'Fundador LINUXtips',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/manuelErnesto.png',
            titulo: '10 razões para migrar para Kotlin!',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Manuel Ernesto',
            descricaoOrador: 'Engenheiro de software',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/adilsonCamacho.png',
            titulo: 'Gestão de projetos em tecnologia',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Adilson Camacho',
            descricaoOrador: 'Consultor de TI',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/beneditoMonteiro.png',
            titulo: 'Como implementar o ERP Opensource Odoo na sua empresa?',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Benedito Monteiro',
            descricaoOrador: 'Consultor de Sistema Odoo',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/VijayValaboju.png',
            titulo: 'Aprendizagem por reforço na educação de código aberto: avançando na aprendizagem contínua e no desenvolvimento de habilidades',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Vijay Valaboju',
            descricaoOrador: 'Engenheiro de software sênior na Microsoft',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/patrickMatenda.png',
            titulo: 'Software free – Making the most of it',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Patrick Matenda',
            descricaoOrador: 'Entusiasta de código aberto e transformação digital',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/luísRita.png',
            titulo: 'Software gratuito – Aproveitando ao máximo',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Luís Rita',
            descricaoOrador: 'Engenheiro de software',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/walterAngolar.png',
            titulo: 'Microservices Architecture',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Walter Angolar',
            descricaoOrador: 'Especialista em Tecnologia',
          },
          {
            tipo: 'BOOTCAMP',
            foto: '/speakers/adilsonfuta.jpg',
            titulo: 'WEB DEVELOPMENT BOOTCAMP WITH OPEN-SOURCE TECHNOLOGIES',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Adilson Futa',
            descricaoOrador: 'Engenheiro FullCycle na Jupiter Systems & Solutions',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/machado-antonio.jpg',
            titulo: 'Java na Era Cloud-Native - Desenvolvendo Aplicações Escaláveis e Resilientes',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Machado Antonio',
            descricaoOrador: 'Tis - Analista Funcional',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/elisio-mualumene.jpg',
            titulo: 'Soluções AWS para armazenamento e bancos de dados',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Elísio Mualumene',
            descricaoOrador: 'Arquiteto de soluções em nuvem e engenheiro de software',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/ildeberto-vasconcelos.jpg',
            titulo: 'Flutter Add-to-App e interoperabilidade com Native',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Ildeberto Vasconcelos',
            descricaoOrador: 'Desenvolvedor Flutter | Contribuidor de código aberto',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/carmen-de-rafael-mateia.jpg',
            titulo: 'Mulheres na Tecnologia: Como criar, gerenciar e sustentar uma comunidade feminina de tecnologia',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Carmen de Rafel Mateia',
            descricaoOrador: 'Fundador Associado e Membro do Conselho da Associação Agitadores Culturais',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/gustavo-mota.jpg',
            titulo: 'Estratégias de recuperação de desastres na nuvem: como o Azure Site Recovery pode salvar sua empresa',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Gustavo Mota',
            descricaoOrador: 'Arquiteto de Nuvem | 8x Certificado Azure | Escritor | Criador de Conteúdo de Tecnologia | Chefe de nuvem e infraestrutura na Forward Computers | Fundador da Comunidade @gugacloud',
          },
          
          {
            tipo: 'Palestra',
            foto: '/speakers/domingos-dias-francisco.jpg',
            titulo: 'Orquestração de processos com automação e IA',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Domingos Dias Francisco',
            descricaoOrador: 'SELENIUM, Desenvolvedor',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/gideao-ferreira.jpg',
            titulo: 'Desenvolvimento Eficiente com Laravel: best praticies para projetos Escaláveis',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Gideão Ferreira',
            descricaoOrador: 'Devtest, desenvolvedor',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/joao-afonso-katombela.jpg',
            titulo: 'Desenvolvimento de software',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Joao Afonso Katombela',
            descricaoOrador: 'Desenvolvedor FullStack @RCS Angola',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/jovany-azevedo.jpg',
            titulo: 'Licenças no mundo Open Source',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Jovany Azevedo',
            descricaoOrador: 'Informática e Serviços Automáticos, Técnico de Sistemas de T.I',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/martins-gouveia.jpg',
            titulo: 'Aplicativos multiplataforma com Swift e SwiftUI',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Martins Gouveia',
            descricaoOrador: 'Desenvolvedor de software @Directv',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/miguel-gaieta-de-almeida.jpg',
            titulo: 'Implementação de Multitenancy com Laravel',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Miguel Gaieta de Almeida',
            descricaoOrador: 'Desenvolvedor Backend | CTO ',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/matias-fernandes-hashirama.jpg',
            titulo: 'Dev Shinobi: Cap. 1 - Evangelista de API : API: A Verdadeira Interface de Usuário para o Programador ',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Matias Fernandes Hashirama',
            descricaoOrador: 'Desenvolvedor Backend',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/nagarjuna-malladi.jpg',
            titulo: 'Construindo Sistemas Resilientes de Código Aberto: Práticas Avançadas de Engenharia de Confiabilidade de Sites',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Nagarjuna Malladi',
            descricaoOrador: 'Engenheiro de Software Principal SRE na Oracle America, Inc.',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/nerias-de-almeida.png',
            titulo: 'Cloud Computing e o seu impacto no desenvolvimento, ecossistema empresarial angolano',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Nerias de Almeida',
            descricaoOrador: 'IDIMA TECH SOLUTIONS - ENG. INFORMATICO',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/otoniel-emanuel.jpg',
            titulo: 'Minimalismo no Design Web',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Otoniel Emanuel',
            descricaoOrador: 'Desenvolvedor front-end e entusiasta de código aberto',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/tilson-mateus.jpg',
            titulo: 'Explorando os Super Poderes do Laravel',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Tilson Mateus',
            descricaoOrador: 'FullStack Developer @TilsonM17',
          },
        ],
      },

      section_4: {
        title: 'Outros eventos',
        
      },

      section_5: {
        title: 'Patrocinadores',
      },
      section_6: {
        title: 'Patrocinadores',
        description: 'Conheça os nossos patrocinadores',
        button: 'Seja um Patrocinador',
      },
      footer: {
        focus: {
          title: 'Associação de programamdores Angolanos',
          description: `O Angola Open-Source Fest é um evento inovador que reúne apaixonados por tecnologia, programadores e especialistas em um ambiente de aprendizado e colaboração. Prepare-se para uma experiência única, repleta de debates inspiradores, workshops especializados e hackathons desafiadores que visam promover o progresso e a inovação na comunidade de programação de Angola.`,
        },
        title_1: 'Navegação',
        title_2: 'contacto',
      },

      page_2: {
        nav: {
          link_1: 'Inicio',
          link_2: 'Benefícios',
          link_3: 'Guia',
          link_4: 'Contacto',
        },
        title: 'Torne-se um Patrocinador',
        description:
          'Faça parte da revolução tecnológica em Angola. Seja um patrocinador e impulsione a inovação conosco',
        button: 'Baixe o Prospectus',
        prescription: 'Continue lendo',
        benefit: {
          title: 'Benefícios',
          description: 'Conheça os benefícios de patrocinar',
          card_1: {
            title: 'Visibilidade de Marca',
            description:
              'Os patrocinadores têm a oportunidade de aumentar sua visibilidade entre um público altamente segmentado. Sua marca será destacada nos materiais de marketing do evento, incluindo site, redes sociais, materiais promocionais e durante o próprio evento, gerando reconhecimento e alcance',
          },
          card_2: {
            title: 'Networking Estratégico',
            description:
              'Ao patrocinar o evento, as empresas têm acesso a uma rede exclusiva de profissionais da indústria, líderes de pensamento e potenciais parceiros de negócios. Isso proporciona oportunidades valiosas para estabelecer conexões significativas e explorar colaborações futuras',
          },
          card_3: {
            title: 'Demonstração de Apoio à Comunidade',
            description:
              'O apoio a eventos locais e à comunidade de programação demonstra o comprometimento da empresa com o crescimento e desenvolvimento do setor tecnológico. Isso pode aumentar a reputação da marca como uma empresa que valoriza e investe no avanço da tecnologia e na formação de profissionais qualificados',
          },
        },
        sponsor: {
          headline: 'Navegação',
          nav: {
            link_1: 'Home',
            link_2: 'Benefícios',
            link_3: 'Guia',
            link_4: 'Contactos',
          },
          title: 'Patrocine agora mesmo',
          description: 'Veja abaixo como podes patrocinar e ajudar-nos neste grande propósito!',
          step_1: {
            title: 'Baixe o nosso Prespectus',
            description: {
              part_1: 'Baixe o nosso ',
              link: 'prespectus ',
              part_3: 'e leia os termos e propostas',
            },
          },
          
          step_2: {
            title: 'Envie-nos um email',
            description: {
              part_1: 'Envie-nos um email para ',
              link: 'apaconference@gmail.com ',
              part_2: 'com os ',
              part_3: 'dados da empresa como nome, email, telefone e foto!',
            },
          },
          buttonSend: "Enviar"
        },
      },
    },
  },
};

export { locales as portuguese };
