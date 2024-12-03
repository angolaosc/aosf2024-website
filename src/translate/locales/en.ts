import gup16 from '../../../public/Group 16.png';
import gup22 from '../../../public/Group 22.png';

const locales = {
  en: {
    translations: {
      nav: {
        link_1: 'Home',
        link_2: 'Information',
        link_3: 'Schedule',
        link_4: 'Sponsors',
        link_5: 'Contacts',
        button: 'Sponsor',
      },
      section_1: {
        title: 'Angola Open-source Fest 2024',
        description:
          'Get ready to dive into debates, workshops, and discoveries that will drive innovation and progress in the Angolan programming community. Join us on this journey of learning and collaboration.',
        button1: 'View photos',
        button2: 'View presentations',
        toastMessage: 'Coming soon',
        closeButton: "Close",
        date: {
          line_1: '30 of November 2024',
          line_2: 'Date',
        },
        spotlights: [
          {
            icon: gup16,
            title: 'Specialized Workshops',
            description: 'Learn from Experts in Practical and Interactive Sessions',
            className: '',
          },
          {
            icon: gup22,
            title: 'Powerful Networking',
            description: 'Connect with a Community of Innovators',
            className: '',
          },
          {
            icon: gup16,
            title: 'Challenging Hackathons',
            description: 'Engage in Real-World Challenges and Collaborate with the Community',
            className: '',
          },
        ],
        contagem : {
          speakers: 'Sessions',
          participants: 'Particants',
          partners: 'Partners'
        }
      },

      section_2: {
        detail: {
          firstP: 'The Angola Open Source Fest is an event that celebrates innovation and collaboration in technology within Angola. Aimed at students, professionals, and open-source enthusiasts, the festival offers talks, workshops, and discussions focused on the development and application of open-source software in the Angolan context',
          secondP: "It’s an opportunity to learn, share knowledge, and connect with the community, promoting the use of accessible and secure technologies. The event underscores a commitment to technological independence and the strengthening of Angola's digital ecosystem."
        },
      },
      
      keynotes: [
        /*{
          Img : "/keynoteSpeakers/euclides-mfumu.jpg",
          Nome: "Miguel Araújo",
          Descricao: "Kinsari - Sistemas de Informaçãoa"
        },*/
        {
          Img : "/keynoteSpeakers/matias-perazoli.jpg",
          Nome: "Matias Perazoli",
          Descricao: "ETIC"
        },
        {
          Img : "/keynoteSpeakers/euclides-mfumu.jpg",
          Nome: "Euclides Mfumu",
          Descricao: "Data Science, Standard Bank Angola"
        },
        {
          Img : "/keynoteSpeakers/mathias-bolt-lesniak.jpg",
          Nome: "Mathias Bolt Lesniak",
          Descricao: "TYPO3 Association Board Member"
        },
      ],
      keynotesDescription: "Highlights of the event, bringing a unique and innovative perspective",
    
      section_3: {
        title: 'Our Speakers',
        description: 'Saturday, 30 of Novembro - 2024',
        state: {
          done: 'Done',
          canceled: 'Canceled'
        },
        topics: [
          {
            tipo: 'Lecture',
            foto: '/speakers/jeferson-fernando.png',
            titulo: 'Platform Engineering: Delivering Infrastructure as a Product with Terraform',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Jeferson Fernando',
            descricaoOrador: 'Founder LINUXtips',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/manuelErnesto.png',
            titulo: '10 Reasons to Migrate to Kotlin!',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Manuel Ernesto',
            descricaoOrador: 'Software Engineer',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/adilsonCamacho.png',
            titulo: 'Project Management in Tech',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Adilson Camacho',
            descricaoOrador: 'IT Consultant',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/beneditoMonteiro.png',
            titulo: 'How to implement ERP Opensource Odoo in your Company?',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Benedito Monteiro',
            descricaoOrador: 'Odoo System Consultant',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/VijayValaboju.png',
            titulo: 'Reinforcement Learning in Open-Source Education: Advancing Continuous Learning and Skill Development',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Vijay Valaboju',
            descricaoOrador: 'Senior Software Engineer at Microsoft',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/patrickMatenda.png',
            titulo: 'Software free – Making the most of it',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Patrick Matenda',
            descricaoOrador: 'Open Source and Digital Transformation Enthusiast',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/luísRita.png',
            titulo: 'From Code to Production: Accelerating Development with CI/CD and DevSecOps',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Luís Rita',
            descricaoOrador: 'Software Engineer',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/walterAngolar.png',
            titulo: 'Microservices Architecture',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Walter Angolar',
            descricaoOrador: 'Technology Specialist',
          },
          {
            tipo: 'BOOTCAMP',
            foto: '/speakers/adilsonfuta.jpg',
            titulo: 'WEB DEVELOPMENT BOOTCAMP WITH OPEN-SOURCE TECHNOLOGIES',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Adilson Futa',
            descricaoOrador: 'FullCycle Engineer na Jupiter Systems & Solutions',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/machado-antonio.jpg',
            titulo: 'Java in the Cloud-Native Era - Developing Scalable and Resilient Applications',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Machado Antonio',
            descricaoOrador: 'Tis - Analista Funcional',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/elisio-mualumene.jpg',
            titulo: 'Soluções AWS para Armazenamento e Bancos de Dados',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Elísio Mualumene',
            descricaoOrador: 'Cloud Solution Architect & Software Engineer',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/ildeberto-vasconcelos.jpg',
            titulo: 'Flutter Add-to-App e Interoperabilidade com Nativo',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Ildeberto Vasconcelos',
            descricaoOrador: 'Flutter Developer | Open Source Contributor',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/carmen-de-rafael-mateia.jpg',
            titulo: 'Women in Technology: How to create, manage and sustain a female technology community',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Carmen de Rafel Mateia',
            descricaoOrador: 'Associate Founder and Board Member at Associação Agitadores Culturais',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/gustavo-mota.jpg',
            titulo: 'Cloud Disaster Recovery Strategies: How Azure Site Recovery Can Save Your Business',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Gustavo Mota',
            descricaoOrador: 'Cloud Architect | 8x Azure Certified | Writer | Technology Content Creator | Head of cloud and Infrastructure at Forward Computers | Founder of the @gugacloud Community',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/domingos-dias-francisco.jpg',
            titulo: 'Process orchestration with automation and AI',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Domingos Dias Francisco',
            descricaoOrador: 'SELENIUM, Developer',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/gideao-ferreira.jpg',
            titulo: 'Efficient Development with Laravel: best practices for Scalable projects',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Gideão Ferreira',
            descricaoOrador: 'Devtest, desenvolvedor',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/joao-afonso-katombela.jpg',
            titulo: 'Software Development',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Joao Afonso Katombela',
            descricaoOrador: 'FullStack Developer @RCS Angola',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/jovany-azevedo.jpg',
            titulo: 'Licenses in the Open Source world',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Jovany Azevedo',
            descricaoOrador: ' Computer e Automatic Services, Técnico de Sistemas de T.I ',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/martins-gouveia.jpg',
            titulo: 'Cross-platform apps com Swift e SwiftUI',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Martins Gouveia',
            descricaoOrador: 'Software Developer @Directv',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/miguel-gaieta-de-almeida.jpg',
            titulo: 'Implementing Multitenancy with Laravel',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Miguel Gaieta de Almeida',
            descricaoOrador: 'Backend Developer | CTO ',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/matias-fernandes-hashirama.jpg',
            titulo: 'Dev Shinobi: Chapter 1 - API Evangelist: API: The True User Interface for the Programmer',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Matias Fernandes Hashirama',
            descricaoOrador: 'Backend Developer',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/nagarjuna-malladi.jpg',
            titulo: 'Building Resilient Open-Source Systems: Advanced Site Reliability Engineering Practices',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Nagarjuna Malladi',
            descricaoOrador: 'Principal Software Engineer SRE at Oracle America, Inc.',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/nerias-de-almeida.png',
            titulo: 'Cloud Computing e seu impacto no desenvolvimento, ecosistema empresarial angolano',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Nerias de Almeida',
            descricaoOrador: 'IDIMA TECH SOLUTIONS - ENG. INFORMATICO',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/otoniel-emanuel.jpg',
            titulo: 'Minimalism in Web Design',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Otoniel Emanuel',
            descricaoOrador: 'Front-end developer and open source enthusiast',
          },
          {
            tipo: 'Lecture',
            foto: '/speakers/tilson-mateus.jpg',
            titulo: "Exploring Laravel's Super Powers",
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Tilson Mateus',
            descricaoOrador: 'FullStack Developer @TilsonM17',
          },
        ],
      },

      section_4: {
        title: 'Other events',
        
      },

      section_5: {
        title: 'Our Partners',
        community: 'Communities'
      },
      section_6: {
        title: 'Sponsors',
        description: 'Know partners and sponsors of the event',
        button: 'Become a Sponsor',
      },
      footer: {
        focus: {
          title: 'Angolan Programmers Association',
          description: `The Angola Open-Source Fest is an innovative event that brings together technology enthusiasts, programmers, and experts in a learning and collaborative environment. Get ready for a unique experience filled with inspiring debates, specialized workshops, and challenging hackathons aimed at fostering progress and innovation in the Angolan programming community.`,
        },
        title_1: 'Navigation',
        title_2: 'Contact us',
      },

      page_2: {
        title: 'Become a Sponsor',
        description: 'Be part of the technological revolution in Angola. Be a sponsor and boost innovation with us',
        button: 'Download the Prospectus now',
        prescription: 'Keep reading',
        benefit: {
          title: 'Benefits of Sponsoring',
          description: 'Know the benefits of sponsoring the event',
          card_1: {
            title: 'Showcase your brand',
            description:
              'Sponsors have the opportunity to increase their visibility among a highly targeted audience. Your brand will be highlighted in the event marketing materials, including website, social media, promotional materials, and during the event itself, generating recognition and reach',
          },
          card_2: {
            title: 'Strategic Networking',
            description:
              'By sponsoring the event, companies have access to an exclusive network of industry professionals, thought leaders, and potential business partners. This provides valuable opportunities to make meaningful connections and explore future collaborations',
          },
          card_3: {
            title: 'Support the community',
            description:
              'Supporting local events and the programming community demonstrates the company’s commitment to the growth and development of the technology sector. This can increase the brand’s reputation as a company that values and invests in the advancement of technology and the training of qualified professionals',
          },
        },
        sponsor: {
          headline: 'Navigation',
          nav: {
            link_1: 'Home',
            link_2: 'Benefits',
            link_3: 'Guide',
            link_4: 'Contacts',
          },
          title: 'Sponsor us',
          description: 'To become a sponsor, follow the steps below',
          step_1: {
            title: 'Download the Prospectus',
            description: {
              part_1: 'Download the ',
              link: 'prospectus ',
              part_3: 'and read the sponsorship packages available',
            },
          },
          step_2: {
            title: 'Send us an email',
            description: {
              part_1: 'Send us an email to ',
              link: 'apaconference@gmail.com ',
              part_2: 'along with ',
              part_3: 'your company logo and the sponsorship package you want to purchase',
            },
          },
          buttonSend: "Send"
        },
      },
    },
  },
};

export { locales as english };
