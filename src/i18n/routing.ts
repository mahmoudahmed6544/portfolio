import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import { i18nOptions } from '@/app/resources/config';
import { IconType } from 'react-icons';
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter, FaBehance } from 'react-icons/fa6';
import { HiChevronUp, HiChevronDown, HiChevronRight, HiChevronLeft, HiOutlineArrowPath, HiArrowUpRight, HiCheck, HiMiniQuestionMarkCircle, HiInformationCircle, HiExclamationTriangle, HiExclamationCircle, HiCheckCircle, HiEnvelope, HiMiniGlobeAsiaAustralia, HiMiniXMark, HiOutlineLink, HiCalendarDays } from 'react-icons/hi2';
import { PiUserCircleDuotone, PiGridFourDuotone, PiBookBookmarkDuotone, PiHouseDuotone, PiImageDuotone } from 'react-icons/pi';
 
export const routing = defineRouting({
  locales: i18nOptions.locales,
 
  defaultLocale: i18nOptions.defaultLocale,

  // Won't display `defaultLocale` in routes
  localePrefix: 'as-needed'
});
 
export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);
export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
	chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	arrowUpRight: HiArrowUpRight,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	email: HiEnvelope,
	globe: HiMiniGlobeAsiaAustralia,
	person: PiUserCircleDuotone,
	grid: PiGridFourDuotone,
	book: PiBookBookmarkDuotone,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	calendar: HiCalendarDays,
	home: PiHouseDuotone,
	inspiration: PiImageDuotone,
	discord: FaDiscord,
	github: FaGithub,
	linkedin: FaLinkedin,
	x: FaXTwitter,
	Behance: FaBehance,
};
