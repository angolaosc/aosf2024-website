import gup16 from '../../../public/Group 16.png';
import gup22 from '../../../public/Group 22.png';

const locales = {
  en: {
    translations: {
      nav: {
        link_1: 'Event',
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
        button1: 'Purchase a Ticket',
        button2: 'Watch Online',
        date: {
          line_1: '30 of November 2024',
          line_2: 'Date',
        },
        spotlights: [
          {
            icon: gup16,
            title: 'Specialized Workshops',
            description: 'Learn from experts in practical, interactive sessions.',
            className: '',
          },
          {
            icon: gup22,
            title: 'Powerful Network',
            description: 'Learn from experts in practical, interactive sessions.',
            className: '',
          },
          {
            icon: gup16,
            title: 'Specialized Workshops',
            description: 'Learn from experts in practical, interactive sessions.',
            className: '',
          },
        ],
      },

      section_2: {
        details_List: [
          {
            icon: gup16,
            title: 'PROJECT',
            description:
              "The Angola Open-Source Fest is a project that annually brings together professionals, students and technology enthusiasts in a space dedicated to exchanging knowledge and experiences about open source software. The event includes a series of activities such as lectures, workshops, hackathons, and practical sessions, all focused on empowering participants and promoting the development of innovative technological solutions.",
          },
          {
            icon: gup22,
            title: 'MISSION',
            description:
              "The mission of Angola Open-Source Fest is to foster a culture of collaboration and technological innovation in Angola, promoting the use and development of free and open source software. The festival seeks to democratize access to technological knowledge, empower the local community, and encourage the creation of sustainable solutions that respond to the country's specific needs.",
          },
        ],
        detailStar: {
          title: 'VALUES',
          description: 'The Angola Open-Source Fest is an event that stands out as an important milestone for the technology community in Angola, bringing together developers, designers, engineers, and technology enthusiasts to celebrate and promote the use of free and open source software. This festival is not only a platform to share technical knowledge, but also a space that strengthens the fundamental values ​​that guide the open-source community in Angola.'
,
        },
      },

    
      

      section_3: {
        title: 'Innovation and Technological Trends',
        description: 'Quinta-feira, 30 de Novembro - 2024',
        state: {
          done: 'Done',
          canceled: 'Canceled'
        },
        topics: [
          {
            done: true,
            titulo: 'Introduction to Artificial Intelligence',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Dr. Maria Silva',
            descricaoOrador: 'CEO - TECHGENIUS',
          },
          {
            done: false,
            titulo: 'Introduction to Artificial Intelligence',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Dr. Maria Silva',
            descricaoOrador: 'CEO - TECHGENIUS',
          },
          {
            done: true,
            titulo: 'Introduction to Artificial Intelligence',
            tempo: '09:00 - 10:30 GMT + 1',
            orador: 'Dr. Maria Silva',
            descricaoOrador: 'CEO - TECHGENIUS',
          },
        ],
      },

      section_4: {
        title: 'Other events',
        
      },

      section_5: {
        title: 'Our Partners',
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
        },
      },
    },
  },
};

export { locales as english };
