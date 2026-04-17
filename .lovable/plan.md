
# Romantic Birthday Surprise Website

## Overview
A single-page, mobile-first romantic birthday website with animated intro, photo gallery, love message, video section, and gift reveal — all wrapped in a soft pink/beige/white aesthetic with floating hearts animation.

## Sections & Flow

### 1. Intro Screen (Full-screen)
- Full-screen "Happy Birthday" message with elegant serif font (Playfair Display)
- Soft gradient background: light pink → white → soft peach
- Floating hearts/rose petals animation (CSS keyframes, ~15 hearts drifting across screen)
- After 2 seconds, a "Tap to Open Your Surprise ❤️" button fades in with a gentle pulse
- Tapping the button smoothly transitions (fade out intro, scroll to content)

### 2. Memory Gallery Section
- "Our Beautiful Memories" heading
- Auto-sliding photo carousel with fade transitions (every 4 seconds)
- Placeholder images (user can replace with real photos later)
- Rounded card with soft shadow, navigation dots
- Optional background music: muted autoplay with a floating unmute/mute button (speaker icon)

### 3. Love Message Section
- Elegant card with the heartfelt paragraph provided
- Decorative heart dividers above and below
- Text fades in on scroll (intersection observer)

### 4. Video Message Section
- "A Message Just For You" heading
- Embedded video player (HTML5 `<video>` tag with controls)
- Placeholder — user can replace the video source file
- Rounded card styling

### 5. Final Section
- "Now open your gift box ❤️" text with animated gift box icon
- Subtle bounce animation on the gift emoji

### 6. Footer
- "Made with love, just for you" text with a heart

## Design System
- **Colors**: Light pink (#FFE4E6, #FFF1F2), beige/peach (#FDE8D8), white (#FFFFFF), accent rose (#F43F5E)
- **Font**: Playfair Display (headings) + Inter (body) via Google Fonts
- **Rounded corners**: `rounded-2xl` on cards
- **Soft shadows**: `shadow-lg` with pink tint
- **Animations**: CSS keyframe floating hearts, fade-in on scroll, button pulse

## Technical Notes
- Single page, no routing needed beyond Index
- All animations pure CSS + React state (no heavy libraries)
- Mobile-first with responsive breakpoints
- Placeholder assets for photos and video (easy to swap)
