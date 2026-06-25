# Mirayaa Design System

## Overview
Mirayaa uses an Ivory Daylight visual system: true ivory grounds, smoked pearl surfaces, oxidised ink text, restrained antique gold, sharp editorial edges, and product-led portrait imagery. Motion is tactile and purposeful, with the signature tarnish reveal reframed as a silver-polish reveal reserved for hero and collection/product image moments.

## Color
Tokens use OKLCH in code while preserving the master prompt's hex intent.

- Void: true ivory/off-white, primary page background.
- Surface: smoked pearl/champagne, used for navigation, drawers, admin panels, and form surfaces.
- Border: oxidised taupe linework.
- Gold: antique highlight for price, focus, CTAs, and rules.
- Ivory: deep oxidised ink for primary text.
- Champagne: muted metal-brown for body text.
- Blush: limited warmth for collection badges and soft highlights.
- Success/Error: muted status colors only.

## Typography
- Display: Cormorant Garamond stack, only for hero headlines, collection titles, and product names.
- Body: DM Sans stack, for UI and readable copy.
- Mono: JetBrains Mono stack, only prices, IDs, and compact operational labels.

## Layout
- Max content width: 1400px.
- Page padding: 24px mobile, 48px tablet, 80px desktop.
- Product imagery: 3:4 portrait.
- Product grid: 2 columns mobile, 3 tablet, 4 desktop.
- Border radius cap: 6px.
- Cards are avoided unless they represent a real item or admin surface.

## Motion
- Signature tarnish reveal uses `clip-path: inset()` with a strong ease-out curve.
- UI interactions stay under 300ms and animate transform/opacity.
- Buttons scale subtly on press.
- Product image hover swaps are opacity-based with a tiny scale.
- Reduced motion disables wipes, marquee movement, and large transforms.

## Components
- Buttons: sharp pill-like inline controls with gold border or filled gold.
- Product cards: image-led, no shadow, bottom border, hover add-to-cart reveal on fine pointers.
- Cart drawer: fixed overlay, full-screen on mobile, right drawer on desktop.
- Admin: utilitarian dark product UI using the same tokens with denser spacing.
