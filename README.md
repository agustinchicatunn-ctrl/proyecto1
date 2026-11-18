# Landing Moderna — tema de Shopify

Tema de Shopify (Online Store 2.0) con una landing de una sola página como inicio:
hero, cinta animada, productos destacados, beneficios, historia, testimonios, FAQ y newsletter.
Incluye además las páginas básicas de la tienda (producto, colección, carrito, búsqueda, blog, 404, contraseña).

Todo el contenido (textos, imágenes, colores, orden de secciones) se edita desde
**Shopify → Tienda online → Temas → Personalizar**.

## Deploy automático a Shopify (cada push se sube solo)

1. En Shopify: **Tienda online → Temas → Agregar tema → Conectar desde GitHub**.
2. Autorizá la app de GitHub de Shopify y elegí la cuenta `agustinchicatunn-ctrl`.
3. Seleccioná el repo `proyecto1` y la rama que querés sincronizar.
4. El tema aparece en tu biblioteca. Revisalo con **Vista previa** y, cuando te guste, **Publicar**.

Desde ese momento, cada commit en esa rama se sincroniza automáticamente con el tema en Shopify,
y los cambios que hagas en el editor de Shopify se suben como commits a la misma rama.

## Estructura

```
layout/     theme.liquid, password.liquid
sections/   secciones de la landing + header/footer
snippets/   tarjeta de producto, variables de color
templates/  index.json (landing) y páginas de la tienda
assets/     base.css, theme.js
config/     ajustes globales (colores, ancho, bordes)
locales/    traducciones
```
