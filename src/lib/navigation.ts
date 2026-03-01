export interface NavLink {
    href: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { href: "/", label: "Inicio" },
    { href: "/historia", label: "Historia" },
    { href: "/vinos", label: "Nuestros Vinos" },
    { href: "/contacto", label: "Contacto" },
    { href: "/reservar", label: "Reservar" },
]