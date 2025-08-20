import { MainNavItemInterface } from "../interfaces/NavInterfaces";


export const NavLinksData: MainNavItemInterface[] = [
  {id: 1, title: "Home", href:"/", css: "hover:text-amber-400", hasDropdown: false},
  {id: 2, title: "About Us", css: "hover:text-amber-400", href:"/about", hasDropdown: false},
  {id: 2, title: "Awards & Media", css: "hover:text-amber-400", href:"/awards-media", hasDropdown: false},
  {id: 3, title: "Contact Us", css: "hover:text-amber-400", href:"/contact", hasDropdown: false},
  /* {id: 4, title: "Insight & News", css: "hover:text-amber-400", href:"/news-insight", hasDropdown: false}, */
]



export const FooterLinksData: MainNavItemInterface[] = [
  {id: 1, title: "Home", href:"/", hasDropdown: false},
  {id: 2, title: "About Us", href:"/about", hasDropdown: false},
  {id: 2, title: "Awards & Media", href:"/awards-media", hasDropdown: false},
  {id: 3, title: "Contact Us", href:"/contact", hasDropdown: false},
  /* {id: 4, title: "Insight & News", href:"#news", hasDropdown: false}, */
]


export const SocialLinksData = [
  {id: 1, name: "Facebook", href:"#"},
  {id: 1, name: "LinkedIn", href:"#"},
  {id: 1, name: "Instagram", href:"#"},
  {id: 1, name: "Twitter", href:"#"},
]