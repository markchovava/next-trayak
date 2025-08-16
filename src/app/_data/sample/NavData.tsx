import { MainNavItemInterface } from "../interfaces/NavInterfaces";


export const NavLinksData: MainNavItemInterface[] = [
  {id: 1, title: "Home", href:"#", css: "hover:text-amber-400", hasDropdown: false},
  {id: 2, title: "About Us", css: "hover:text-amber-400", href:"#about", hasDropdown: false},
  {id: 3, title: "Our Solutions", css: "hover:text-amber-400", href:"#solution", hasDropdown: true},
  {id: 4, title: "Insight & News", css: "hover:text-amber-400", href:"#news", hasDropdown: false},
]