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
            titulo: '10 Razões para Migrar para Kotlin!',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Manuel Ernesto',
            descricaoOrador: 'Engenheiro de Software',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/adilsonCamacho.png',
            titulo: 'Gerenciamento de projetos em tecnologia',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Adilson Camacho',
            descricaoOrador: 'Consultor de TI',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/beneditoMonteiro.png',
            titulo: 'Como implementar o ERP Opensource Odoo em sua Empresa?',
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
            titulo: 'Software livre – Tirando o máximo de proveito',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Patrick Matenda',
            descricaoOrador: 'Entusiasta de código aberto e transformação digital',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/luísRita.png',
            titulo: 'Do Código à Produção: Acelerando o Desenvolvimento com CI/CD e DevSecOps',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Luís Rita',
            descricaoOrador: 'Engenheiro de Software',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/walterAngolar.png',
            titulo: 'Arquitetura de Microsserviços',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Walter Angolar',
            descricaoOrador: 'Especialista em Tecnologia',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/anita-ihuman.jpg',
            titulo: 'Construindo um programa DevRel próspero para projetos OSS',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Anita Ihuman',
            descricaoOrador: 'Developer Advocate, Technical writer',
          },
          {
            tipo: 'Palestra',
            foto: '/speakers/carmen-de-rafael-mateia.jpg',
            titulo: 'Mulheres na Tecnologia: Como criar, gerir e sustentar uma comunidade feminina de tecnologia',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Carmen de Rafel Mateia',
            descricaoOrador: 'Fundador Associado e Membro do Conselho da Associação Agitadores Culturais',
          },
          {
            tipo: 'BOOTCAMP',
            foto: '/speakers/adilsonfuta.jpg',
            titulo: 'BOOTCAMP DE DESENVOLVIMENTO WEB COM TECNOLOGIAS OPEN-SOURCE',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Adilson Futa',
            descricaoOrador: 'FullCycle Engineer na Jupiter Systems & Solutions',
          }
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
