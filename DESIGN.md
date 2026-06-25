# Mirayaa Design System

## Overview
Mirayaa uses an oxidised-metal visual system: near-black surfaces, champagne text, restrained antique gold, sharp editorial edges, and product-led portrait imagery. Motion is tactile and purposeful, with the signature tarnish reveal reserved for hero and collection/product image moments.

## Color
Tokens use OKLCH in code while preserving the master prompt's hex intent.

- Void: near-black warm metal, primary page background.
- Surface: dark brown-black, used for navigation, drawers, admin panels, and form surfaces.
- Border: low-contrast oxidised edge.
- Gold: antique highlight for price, focus, CTAs, and rules.
- Champagne/Ivory: readable text on dark.
- Blush: limited warmth for collection badges and soft highlights.
- Success/Error: muted status colors only.

## Typography
- Display: Cormorant Garamond via `next/font/google`, only for hero headlines, collection titles, and product names.
- Body: DM Sans via `next/font/google`, for UI and readable copy.
- Mono: JetBrains Mono via `next/font/google`, only prices, IDs, and compact operational labels.

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
