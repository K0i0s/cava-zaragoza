export interface Wine {
    id: string;
    name: string;
    grapes: string;
    vintage?: string;
    badge?: string;
    badgeColor?: 'gold' | 'burgundy' | 'olive';
    description: string;
    notes: string[];
    image: string;
    imageAlt: string;
}

export const wines: Wine[] = [
    {
        id: 'malbec',
        name: 'Malbec',
        grapes: 'Malbec 100%',
        description: 'Un vino de cuerpo pleno con estructura elegante, expresión del terruño del Valle de Guadalupe.',
        notes: ['Ciruela madura', 'Violetas', 'Especias suaves', 'Final persistente'],
        image: '/images/malbec.webp',
        imageAlt: 'Botella de Malbec - Cava Zaragoza',
    },
    {
        id: 'cabernet-grenache',
        name: 'Cabernet Sauvignon / Grenache',
        grapes: 'Cabernet Sauvignon • Grenache',
        vintage: '2019',
        badge: 'Cosecha Especial',
        badgeColor: 'gold',
        description: 'Ensamble que captura la profundidad del Cabernet con la redondez frutal del Grenache.',
        notes: ['Cassis', 'Cedro', 'Frutos rojos', 'Taninos sedosos'],
        image: '/images/cavernet_sauvignon_grenache.webp',
        imageAlt: 'Botella Cabernet Sauvignon Grenache - Cava Zaragoza',
    },
    {
        id: 'sauvignon-blanc-chardonnay',
        name: 'Mezcla de Blancos',
        grapes: 'Sauvignon Blanc • Chardonnay',
        badge: 'Vino Joven',
        badgeColor: 'olive',
        description: 'Frescura mediterránea con notas cítricas y florales. Perfecto para el clima del Valle.',
        notes: ['Cítricos frescos', 'Flores blancas', 'Manzana verde', 'Final mineral'],
        image: '/images/sauvignon-blanc-chardonnay.webp',
        imageAlt: 'Botella Mezcla de Blancos - Cava Zaragoza',
    },
    {
        id: 'tempranillo',
        name: 'Tempranillo',
        grapes: 'Tempranillo 100%',
        description: 'La uva española que encontró un nuevo hogar. Equilibrio entre tradición y nuevo mundo.',
        notes: ['Cereza', 'Vainilla', 'Cuero fino', 'Roble equilibrado'],
        image: '/images/tempranillo.webp',
        imageAlt: 'Botella de Tempranillo - Cava Zaragoza',
    },
    {
        id: 'syrah-grenache',
        name: 'Syrah / Grenache',
        grapes: 'Syrah • Grenache',
        vintage: '2017',
        badge: 'Reserva',
        badgeColor: 'burgundy',
        description: 'Nuestra Reserva insignia. Complejo, estructurado y con un potencial de guarda excepcional.',
        notes: ['Pimienta negra', 'Mora', 'Carne ahumada', 'Chocolate oscuro'],
        image: '/images/cavernet_sauvignon_grenache.webp',
        imageAlt: 'Botella Syrah Grenache Reserva - Cava Zaragoza',
    },
    {
        id: 'rosado',
        name: 'Vino Rosado',
        grapes: 'Grenache • Syrah',
        badge: 'Vino Joven',
        badgeColor: 'olive',
        description: 'Elegante y refrescante, un rosado de carácter que celebra la vibrante vida del Valle.',
        notes: ['Fresa', 'Rosa', 'Sandía', 'Final fresco y largo'],
        image: '/images/yocelin_rose.webp',
        imageAlt: 'Botella Vino Rosado - Cava Zaragoza',
    },
];
