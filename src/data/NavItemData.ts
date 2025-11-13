type NavItem = {
    id: string,
    label: string
} //creating a NavItem type

const NavItems: NavItem[] = [
    {id: 'home', label: 'Home'},
    {id: 'about', label: 'About'},
    {id: 'skills', label: 'Skills'},
    {id: 'internship', label: 'Internship'},
    {id: 'projects', label: 'Projects'},
    {id: 'contact', label: 'Contact'},
    {id: 'resume', label: 'Resume'},
]

export default NavItems;