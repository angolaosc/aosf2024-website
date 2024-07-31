import { type PropsType } from './interface'
import { i18n } from '@/translate/i18n'

export const MENU: PropsType[] = [
  {
    id: 0,
    content: i18n.t('nav.link_1'),
    target: '/',
  },
  {
    id: 1,
    content: i18n.t('nav.link_2'),
    target: '#schedule',
  },
  {
    id: 2,
    content: i18n.t('nav.link_3'),
    target: '#information',
  },
  {
    id: 3,
    content: i18n.t('nav.link_4'),
    target: '#partner',
  },
  {
    id: 4,
    content: i18n.t('nav.link_5'),
    target: '#contact',
  },
]
