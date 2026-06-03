---
name: Switchyard Lite Design System
colors:
  surface: '#161308'
  surface-dim: '#161308'
  surface-bright: '#3d392c'
  surface-container-lowest: '#110e05'
  surface-container-low: '#1f1b10'
  surface-container: '#231f14'
  surface-container-high: '#2e2a1e'
  surface-container-highest: '#393528'
  on-surface: '#eae2cf'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#eae2cf'
  inverse-on-surface: '#343024'
  outline: '#999077'
  outline-variant: '#4d4732'
  surface-tint: '#e9c400'
  primary: '#fff6df'
  on-primary: '#3a3000'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#705d00'
  secondary: '#b9c7df'
  on-secondary: '#233144'
  secondary-container: '#3c4a5e'
  on-secondary-container: '#abb9d1'
  tertiary: '#defcff'
  on-tertiary: '#00363a'
  tertiary-container: '#00f1ff'
  on-tertiary-container: '#006a70'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#79f5ff'
  tertiary-fixed-dim: '#00dbe8'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#161308'
  on-background: '#eae2cf'
  surface-variant: '#393528'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  technical-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
  technical-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '800'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-unit: 8px
  playfield-cell: 64px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  panel-padding: 24px
---

## Brand & Style

The design system is built on a "Precision Arcade" philosophy—merging the high-stakes clarity of a tactical rail simulator with the energetic feedback of a modern puzzle game. The brand personality is technical, urgent, and highly disciplined. It avoids visual clutter in favor of high-contrast signaling and industrial efficiency.

The visual style is **High-Contrast / Bold** with **Tactile** interactive elements. Every UI component is designed to feel like a physical control panel or an electronic signal box. The interface prioritizes "glanceability," ensuring that the state of the system is immediately obvious through color-coded status indicators and sharp, geometric forms.

## Colors

The palette is rooted in industrial safety standards. **Deep Charcoal (#121212)** serves as the "track bed," providing a low-energy canvas that allows active elements to pop. **Safety Yellow (#FFD700)** is the primary action color, reserved for moving trains, active switches, and primary user interactions.

**Industrial Gray (#475569)** represents the latent infrastructure—inactive tracks, locked switches, and background UI. **Signal Red** and **Success Green** are used strictly for status feedback: Red for collisions, blocked paths, or emergency stops; Green for cleared routes and mission success. All colors should maintain high saturation to ensure the arcade aesthetic remains vibrant against the dark backdrop.

## Typography

This design system utilizes a dual-font approach to balance readability with a technical aesthetic. **Inter** is used for the core UI hierarchy and body text, providing a clean, modern foundation. 

**JetBrains Mono** is utilized for all "data-driven" elements, including scores, timers, coordinate systems, and HUD labels. This monospaced font reinforces the tactical simulator feel, ensuring that changing digits don't cause layout shift and providing a distinctive "readout" appearance. Headlines should be set with tight tracking and heavy weights to command attention.

## Layout & Spacing

The layout is strictly **Grid-based**. The playfield follows a rigid square grid where the core interaction occurs. UI overlays and HUD panels are positioned at the screen periphery to maximize the "theatre of operations."

On **Mobile**, the HUD collapses into top and bottom bars with high-density icons. On **Desktop**, the HUD expands into lateral panels, mimicking a desktop terminal. All spacing is derived from a 8px base unit. UI components should maintain generous internal padding to ensure touch targets are accessible during fast-paced gameplay, while the gap between panels (gutters) remains tight (16px) to maintain a compact, "cockpit" feel.

## Elevation & Depth

This system avoids soft, ambient shadows in favor of **Tonal Layers** and **Inner Glows**. 

Depth is achieved through layering:
1.  **Level 0 (Floor):** Deep Charcoal background.
2.  **Level 1 (Infrastructure):** Industrial Gray tracks and non-interactive grid lines, slightly raised with a 1px border.
3.  **Level 2 (Interactive):** HUD panels and active controls. These use a slightly lighter slate background with a subtle inner "glow" (1px stroke) in the primary color to suggest they are powered on.
4.  **Level 3 (Alerts/Trains):** High-saturation elements that appear to sit "on top" of the system.

Interactive elements use a "pressed" state where the element shifts 2px downward and loses its bottom highlight, simulating a physical button throw.

## Shapes

The shape language is primarily **Soft (Level 1)**. Most containers and buttons use a 0.25rem (4px) corner radius. This choice avoids the aggressive sharpness of pure brutalism while maintaining an "engineered" feel that rounded or pill-shaped designs lack.

Larger cards or HUD panels may use `rounded-lg` (8px) for a slightly more framed look. Elements like progress bars or signal lights remain perfectly square or use 0px roundedness to denote their functional, non-decorative nature.

## Components

### Buttons
Buttons are tactile and "chunky." They feature a 2px solid bottom border (darker shade of the button color) to create a 3D effect. The active/hover state should increase the brightness of the primary color, and the "pressed" state should remove the bottom border and shift the label down 2px.

### HUD Panels
HUD panels are semi-opaque with a backdrop blur. They are framed with a thin (1px) border in a secondary gray. Labels inside HUDs should always use **JetBrains Mono** in uppercase.

### Input Fields & Selectors
Inputs use a "terminal" style: a dark background with a Safety Yellow cursor and text. Focus states are indicated by a 2px outer stroke in the primary color.

### Chips & Signals
Status chips (e.g., "ON TIME", "DELAYED") are rectangular with no rounding. They use inverted colors (dark text on colored background) for maximum impact.

### Settings Menu
The settings menu is a compact, centered overlay. It uses a "frosted glass" effect (glassmorphism) to keep the game state visible in the background but darkened by 40% to maintain focus on the controls.