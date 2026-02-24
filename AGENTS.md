# Prompt para Desarrollo de Landing Page - Cava Zaragoza

## Contexto del Proyecto
Desarrollar una landing page moderna, elegante y de alto rendimiento para Cava Zaragoza, una cava boutique artesanal ubicada en Valle de Guadalupe, Baja California. La página actual tiene problemas graves de diseño, carece de HTTPS, no es responsive y tiene SEO deficiente. Esta renovación busca atraer clientes potenciales y reflejar la calidad premium de sus vinos.

## Stack Tecnológico
- **Framework:** Astro 5.17
- **Estilos:** Tailwind CSS
- **Hosting:** Cloudflare Pages (plan gratuito con SSL incluido)
- **Optimización:** SEO-first, mobile-first, performance-oriented

### Generic Skills
|Skill|Description|URL|
|-----|-----------|---|
|`frontend-design`|Create distinctive, production-grade frontend interfaces with high design quality.| [SKILL.md](./.agents/skills/frontend-design/SKILL.md)|
|`seo`| Optimize content for search engines to improve visibility and ranking. | [SKILL.md](./.agents/skills/programmatic-seo/SKILL.md)|
|`tailwindcss`| Generate Tailwind CSS classes for styling. | [SKILL.md](./.agents/skills/tailwind-design-system/SKILL.md)|
|`astro`| Generate Astro components for styling. | [SKILL.md](./.agents/skills/astro/SKILL.md)|

## Información de la Cava

### Historia y Propuesta de Valor
El Sr. Zaragoza, originario del Valle de Guadalupe, soñaba con crear su propia marca de vinos con experiencias de nuevo mundo. Construyó la cava en el patio de su casa ubicada dentro del pueblo, manteniendo el toque tradicional del Valle de Guadalupe. La orientación es producir vinos de calidad para entrar en el mundo del vino con autenticidad y pasión artesanal.

### Productos Disponibles
**Vinos en catálogo:**
1. Malbec
2. Blend
3. Cabernet Sauvignon Grenache
4. Sauvignon Blanc Chardonnay
5. Syrah/Grenache
6. Tempranillo

**Etiquetas iniciales destacadas:**
- Reserva 2017 Syrah/Grenache
- Cabernet Sauvignon/Grenache 2019
- Mezcla de Blancos (vino joven)
- Vino Rosado (vino joven)

**Reconocimientos:** La cava cuenta con valoraciones de una revista especializada (incluir en sección de credibilidad).

### Modelo de Negocio
- Venta local y a socios
- Público objetivo: Entusiastas del vino, empresas, socios empresariales
- Abiertos a público general mediante contacto directo
- Modelo semi-exclusivo que transmite calidad y exclusividad

### Información de Contacto
**Dirección:**
Calle Ágata, Col. 14 de Febrero
Valle de Guadalupe 22750
Ensenada, Península de Baja California, México

**Contacto:**
- Email: vinos@cavazaragoza.com.mx
- Teléfono: 664 217 8375

**Horario de atención:**
- Lunes a Jueves: Cerrado
- Viernes: 4:00 PM - 8:00 PM
- Sábado: 12:00 PM - 8:00 PM
- Domingo: 12:00 PM - 4:00 PM
- *Nota: El horario podría cambiar

## Diseño UI/UX

### Paleta de Colores
**Colores principales:**
- Borgoña/Vino tinto profundo: #722F37, #8B1538
- Dorado/Champagne (acentos de lujo): #D4AF37, #F4E4C1
- Negro/Gris carbón: #1F1F1F, #2D2D2D
- Blanco/Crema: #FAFAFA, #F5F5DC
- Verde oliva oscuro (terciario): #3D4F2F

### Tipografía
- **Títulos:** Serif elegante (Playfair Display, Cormorant Garamond, o Crimson Text)
- **Cuerpo:** Sans-serif limpia y legible (Montserrat, Inter, o Work Sans)
- Jerarquía clara con contraste apropiado

### Estructura de la Landing Page

#### 1. Hero Section (Above the fold)
- **Objetivo:** Impacto visual inmediato
- **Elementos:**
  - Imagen/video de fondo de alta calidad (cava, viñedos, o Valle de Guadalupe)
  - Overlay sutil para legibilidad
  - Headline principal: "Vinos Artesanales del Valle de Guadalupe"
  - Subheadline: Breve mención del sueño del Sr. Zaragoza
  - CTA principal: "Descubre Nuestra Selección" (scroll suave a catálogo)
  - CTA secundario: "Contáctanos" o "Programa tu Visita"
- **Animaciones:** Fade-in suave, parallax ligero en scroll

#### 2. Nuestra Historia
- **Objetivo:** Conectar emocionalmente
- **Elementos:**
  - Título: "Nuestra Historia" o "El Sueño de Don Zaragoza"
  - Narrativa breve (2-3 párrafos) sobre el origen
  - Destacar: "Vinos de nuevo mundo con alma del Valle de Guadalupe"
  - Imagen de la cava en el patio (si está disponible)
  - Layout: Texto + imagen side-by-side (responsive a stack en mobile)

#### 3. Nuestros Vinos (Catálogo)
- **Objetivo:** Showcase de productos con elegancia
- **Elementos:**
  - Grid responsivo de cards (3 columnas desktop, 2 tablet, 1 mobile)
  - Cada card incluye:
    - Imagen de botella (fotografía profesional crucial)
    - Nombre del vino
    - Tipo de uva/blend
    - Año de cosecha (si aplica)
    - Notas de cata breves (2-3 líneas)
    - Hover effect elegante
  - Destacar con badges: Reserva, Edición Especial, etc.
- **Interacción:** Hover revela más detalles, posible modal con información completa

#### 4. Reconocimientos y Credibilidad
- **Objetivo:** Social proof y confianza
- **Elementos:**
  - Título: "Reconocimientos" o "Valoraciones"
  - Destacar valoraciones de la revista especializada (citas textuales si es posible)
  - Badges o iconos de premios
  - Layout: Cards horizontales o testimonial-style
  - Tipografía elegante para las citas

#### 5. Valle de Guadalupe (Contexto y Terruño)
- **Objetivo:** Educar y diferenciar
- **Elementos:**
  - Breve sección sobre la importancia del terruño
  - "Proceso artesanal" o "Hecho a mano con pasión"
  - Imágenes del valle, viñedos, proceso de elaboración
  - 2-3 puntos clave sobre calidad y tradición

#### 6. Visítanos / Contacto
- **Objetivo:** Conversión y acción directa
- **Elementos:**
  - Dos columnas: Formulario de contacto + Información
  - **Formulario:**
    - Nombre
    - Email
    - Teléfono
    - Mensaje
    - CTA: "Solicitar Información" o "Agendar Visita"
  - **Información:**
    - Dirección completa
    - Mapa embebido (Google Maps)
    - Horarios de atención (destacar días abiertos)
    - Email y teléfono con iconos
    - Opcional: Enlace a WhatsApp
  - **CTA adicional:** "Conviértete en Socio" (si aplica)

#### 7. Footer
- **Elementos:**
  - Logo de Cava Zaragoza
  - Enlaces rápidos (Inicio, Vinos, Historia, Contacto)
  - Redes sociales (si tienen)
  - Copyright
  - Diseño minimalista y elegante

## Requerimientos Técnicos

### SEO
- **Title:** "Cava Zaragoza | Vinos Artesanales del Valle de Guadalupe"
- **Meta Description:** "Descubre vinos artesanales de calidad en Valle de Guadalupe. Cava boutique con Malbec, Cabernet Sauvignon, Syrah y más. Visítanos en Ensenada, Baja California."
- **Keywords:** Valle de Guadalupe, vinos artesanales, cava boutique, vinos Baja California, Malbec, Cabernet Sauvignon, Ensenada
- **Schema Markup:**
  - LocalBusiness
  - Product (para cada vino)
  - Review (para valoraciones de revista)
- **Open Graph y Twitter Cards** para compartir en redes
- **Sitemap.xml y robots.txt**
- **URLs semánticas y limpias**

### Performance
- **Objetivo:** 95+ en PageSpeed Insights
- **Optimizaciones:**
  - Imágenes en formato WebP/AVIF con fallbacks
  - Lazy loading para imágenes
  - Preload de fuentes críticas
  - Minificación de CSS/JS
  - Critical CSS inline
  - Astro View Transitions para navegación fluida

### Responsive Design
- **Breakpoints:**
  - Mobile: 320px - 640px
  - Tablet: 641px - 1024px
  - Desktop: 1025px+
- **Mobile-first approach**
- Touch-friendly en móviles
- Hamburger menu elegante

### Accesibilidad
- Contraste WCAG AA mínimo
- Textos alternativos en imágenes
- Navegación por teclado
- Labels en formularios
- Semántica HTML5 correcta

### Animaciones y Microinteracciones
- **Biblioteca sugerida:** Astro View Transitions + Tailwind transitions
- **Efectos:**
  - Fade-in al hacer scroll (Intersection Observer)
  - Parallax sutil en hero
  - Hover effects en cards y botones
  - Smooth scroll
  - Transiciones de página fluidas
- **Principio:** Sutileza y elegancia, sin abrumar

## Assets Necesarios (Pendientes)

1. **Fotografías profesionales:**
   - Botellas de cada vino (fondo blanco/neutro, alta resolución)
   - Cava/instalaciones
   - Viñedos del Valle de Guadalupe
   - Proceso de elaboración (opcional)
   - Sr. Zaragoza (opcional, para historia)

2. **Logo:**
   - Logo de Cava Zaragoza en formato vectorial (SVG)
   - Versiones: color, blanco, negro

3. **Contenido:**
   - Notas de cata detalladas para cada vino
   - Texto exacto de valoraciones de revista
   - Premios o reconocimientos adicionales

## Consideraciones Especiales

### Tono y Voz de Marca
- **Elegante pero accesible**
- **Auténtico y personal** (historia del Sr. Zaragoza)
- **Profesional sin ser pretencioso**
- **Lenguaje que evoca tradición y calidad**

### Diferenciadores Clave a Destacar
1. Producción artesanal (hecho a mano)
2. Ubicación en Valle de Guadalupe (terruño mexicano)
3. Historia personal y auténtica del fundador
4. Calidad sobre cantidad
5. Modelo semi-exclusivo (socios)
6. Valoraciones de revista especializada

### CTAs Estratégicos
- Primario: "Descubre Nuestros Vinos" / "Ver Selección"
- Secundario: "Contáctanos" / "Agenda tu Visita"
- Terciario: "Conviértete en Socio" (si aplica)

## Entregables

1. **Código fuente:**
   - Repositorio Astro 5 + Tailwind
   - Componentes reutilizables
   - Código limpio y comentado

2. **Configuración:**
   - Setup de Cloudflare Pages
   - Configuración SSL/HTTPS
   - Variables de entorno (si aplica)

3. **Documentación:**
   - README con instrucciones de instalación
   - Guía de actualización de contenido
   - Mejores prácticas para agregar nuevos vinos

4. **Testing:**
   - Pruebas en diferentes navegadores
   - Pruebas responsive (mobile/tablet/desktop)
   - Validación de formularios
   - Lighthouse audit (Performance, SEO, Accessibility)

## Referencias de Inspiración
- Landing pages de vinicolas internacionales con diseño elegante
- Paletas relacionadas con uva y vino
- Diseños minimalistas y sofisticados
- Enfoque en fotografía de producto de alta calidad

## Notas Finales
- **Prioridad 1:** Performance y SEO (para atraer clientes)
- **Prioridad 2:** Diseño elegante que refleje calidad premium
- **Prioridad 3:** Facilidad de mantenimiento y actualización
- El sitio debe transmitir exclusividad pero ser acogedor
- Fotografía de calidad es CRÍTICA para el éxito
- Considerar futuro blog para SEO de contenido (opcional)