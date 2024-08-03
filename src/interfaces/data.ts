import { StaticImageData } from "next/image"

interface PropsTypeActivity {
  id: number
  title: string
  specialGuest: string
  state: string
  date: string
}

export interface PropsTypeEvent {
  id: number
  headerTitle: string
  position: number
  activities: PropsTypeActivity[]
}

interface PropsTypeDetails {
  id: number
  Icon: any
  content: string
}

export interface PropsTypeCardInformation {
  id: number
  urlVideo: string
  date: string
  Icon: any
  title: string
  details: PropsTypeDetails[]
}

export interface PropsTypeEventInformation {
  id: number
  title: string
  paragraph: string
}

export interface PropsTypeSponsor {
  id: number
  logo: string
  href: string
}

export interface PropsTypeSponsors {
  id: number
  typeSponsors: string
  sponsors: PropsTypeSponsor[]
}

export interface PropsTypeProfessional {
  id: number
  src?: any
  name: string
  stack?: string
  Icon?: any
  href: string
}

export interface PropsTypeVolunteerProfessionals {
  title: string
  children: PropsTypeProfessional[]
}

export interface PropsTypeSocialMedia {
  id: number
  Icon: any
  href: string
}

export interface SpotlightCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  className: string;
}

export interface EventDetailsCard {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface EventTopicCard {
  title: String;
  date: string;
  done:Boolean;
}