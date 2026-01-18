# DnD Dice Roller Web App - Specification Document

**Project Title:** DnD Dice Roller by Tuladhars  
**Version:** 1.0  
**Date:** January 17, 2026

---

## 1. Project Overview

A web-based DnD dice roller application that provides an intuitive, realistic dice rolling experience for both desktop and mobile browsers. The app will feature visual representations of the seven standard DnD dice (d4, d6, d8, d10, d12, d20, d100) with interactive selection, animated rolling, and roll history tracking.

### 1.1 Core Technologies
- **Frontend:** Pure HTML5 + CSS3
- **Scripting:** Minimal JavaScript (only for interactivity: dice selection, roll simulation, sound playback)
- **Backend Logic (if needed):** Python (for any server-side requirements, though app is primarily client-side)
- **Target Platforms:** Desktop and mobile browsers (responsive design)

---

## 2. Functional Requirements

### 2.1 Dice Set
The app displays all seven standard DnD dice:
- **d4** (4-sided die)
- **d6** (6-sided die)
- **d8** (8-sided die)
- **d10** (10-sided die - numbered 0-9)
- **d12** (12-sided die)
- **d20** (20-sided die)
- **d100** (percentile die - numbered 00-90 in increments of 10)

### 2.2 Dice Selection
- [x] Users can click/tap individual dice to select them
- [x] Multiple dice can be selected simultaneously
- [x] Selected dice show visual feedback (highlight, border, glow, or state change)
- [x] Users can deselect dice by clicking/tapping again

### 2.3 Roll Mechanism
- [x] "Roll" button triggers the dice roll for all selected dice
- [x] Dice roll animation simulates realistic tumbling/spinning
- [x] Dice roll sound effect plays during animation
- [x] After animation completes, final numbers are highlighted/displayed prominently
- [x] If no dice are selected, Roll button is disabled or shows a prompt

### 2.4 Results Display
- [x] Rolled numbers are clearly visible on each die after animation
- [x] Visual highlighting emphasizes the result
- [x] Individual die results are distinguishable

### 2.5 Roll History
- [x] Bottom section displays chronological history of all rolls
- [x] Each history entry shows:
  - Timestamp or roll number
  - Which dice were rolled (e.g., "1d20 + 2d6")
  - Individual results for each die
  - Total sum (optional - see clarification questions)
- [x] History persists during the session
- [x] Option to clear history (optional - see clarification questions)

---

## 3. UI/UX Design Requirements

### 3.1 Visual Design
- [x] Realistic 3D-like dice representation using CSS (gradients, shadows, transforms)
- [x] Each die type has distinct visual characteristics matching its geometry
- [x] Color scheme: flexible, but should evoke tabletop gaming aesthetic
- [x] Typography: clear, readable, thematic to DnD/fantasy gaming

### 3.2 Layout
- [x] Header: App title "DnD Dice Roller by Tuladhars"
- [x] Main area: Dice display grid/flex layout
- [x] Control area: Roll button (prominent, accessible)
- [x] Footer/Bottom area: Roll history section
- [x] Responsive design adapts to mobile (portrait/landscape) and desktop

### 3.3 Interactions
- [x] Hover states for dice (desktop)
- [x] Active/pressed states for touch (mobile)
- [x] Smooth animations for roll sequence
- [x] Audio feedback (dice roll sound)
- [x] Visual feedback for all interactive elements

### 3.4 Accessibility
- [x] Semantic HTML structure
- [x] Keyboard navigation support
- [x] ARIA labels where appropriate
- [x] Sufficient color contrast
- [x] Focus indicators for interactive elements

---

## 4. Technical Implementation Plan

### Phase 1: Structure & Layout
- [x] Create HTML structure with semantic elements
- [x] Set up CSS custom properties for theming
- [x] Implement responsive grid/flexbox layout
- [x] Create basic dice containers with proper aspect ratios

### Phase 2: Dice Visualization
- [x] Design CSS-based dice faces for each die type
- [x] Implement 3D transforms and perspective
- [x] Add realistic shading, highlights, and textures
- [x] Create selected/unselected visual states
- [x] Ensure dice are visually distinct and recognizable

### Phase 3: Interactivity (JavaScript)
- [x] Implement dice selection/deselection logic
- [x] Create roll animation sequences
- [x] Generate random numbers for each die type
- [x] Display rolled results on dice faces
- [x] Play audio on roll trigger

### Phase 4: Roll History
- [x] Create history display component
- [x] Implement data structure to store roll results
- [x] Format and display roll entries
- [x] Add scroll behavior for long histories
- [x] (Optional) Add clear history function

### Phase 5: Polish & Testing
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [x] Optimize animations for performance
- [x] Refine visual details and transitions
- [ ] Add loading states if needed
- [x] Validate accessibility features

### Phase 6: Sound Assets
- [x] Source or create dice roll sound effect (using Web Audio API)
- [x] Implement audio loading and playback
- [x] Add mute/unmute option (optional)

---

## 5. UI/UX Design Decisions

### Confirmed Specifications

1. **Dice Visual Style:** ✓ CONFIRMED
   - **Realistic 3D dice** with depth and dimension
   - **Classic color scheme:** White/ivory dice with black numbers
   - All dice same color (not color-coded by type)

2. **Dice Selection Indicator:** ✓ CONFIRMED
   - **Subtle glow effect** around selected dice
   - No "Select All" / "Deselect All" option (one die of each type only)

3. **Roll Animation:** ✓ CONFIRMED
   - **Duration:** 1.5 seconds
   - Dice tumble in place (no movement around screen)
   - All dice animate simultaneously

4. **Roll History Display:** ✓ CONFIRMED
   - **Individual die results only** (no total sum calculation)
   - **Last 10 rolls visible** before scrolling required
   - Clear History button included
   - Simple list format (no expandable/collapsible entries)

5. **Roll Button Behavior:**
   - Standard "Roll" button
   - No "Roll Again" feature needed (user can keep same selection)
   - No counter display needed (limited to one of each die type)

6. **Additional Features:**
   - **No modifier field** in v1.0
   - **No preset roll configurations** in v1.0
   - **No multiple instances** of same die (one of each type maximum)
   - **No save/share functionality** in v1.0

7. **Mobile Considerations:**
   - Responsive grid layout (adjusts from 3-4 columns on desktop to 2-3 on tablet to 2 on mobile)
   - Roll history always visible (not collapsible)
   - Touch-optimized tap targets

8. **Aesthetic Direction:** ✓ CONFIRMED
   - **Fantasy/medieval theme**
   - **Dark theme** with aged parchment/leather textures
   - Medieval-inspired typography
   - Warm color palette with gold accents

9. **Sound Options:** ✓ CONFIRMED
   - **Sound ON by default** with mute toggle button
   - One generic dice roll sound for all dice types

10. **Performance:**
    - Target: Load in under 2 seconds on 4G connection
    - Smooth 60fps animations on modern devices
    - Graceful degradation for older devices (simpler animations if needed)

---

## 6. Visual Design Specifications

### 6.1 Color Palette
- **Background:** Dark parchment texture (#2a2318 to #1a1410 gradient)
- **Accent/Borders:** Aged gold (#c9a961, #8b7355)
- **Dice:** Ivory/off-white (#f5f1e8) with subtle texture
- **Text on Dice:** Deep black (#1a1410)
- **Text (UI):** Warm off-white (#e8dcc8)
- **Selected Glow:** Warm golden glow (rgba(201, 169, 97, 0.6))

### 6.2 Typography
- **Title Font:** Medieval/fantasy display font (e.g., Cinzel Decorative, MedievalSharp)
- **Body/Labels:** Readable serif or clean font (e.g., Cinzel, Crimson Text)
- **Dice Numbers:** Bold, clear sans-serif for legibility

### 6.3 Textures & Effects
- Subtle paper/parchment texture on background
- Leather-like texture on UI panels (optional accent)
- Soft shadows and depth for 3D dice effect
- Noise/grain overlay for aged appearance
- Ornamental borders or corner decorations (subtle)

### 6.4 Animation Details
- **Dice Roll:** 1.5 second rotation animation with easing (ease-in-out)
- **Selection:** Smooth glow transition (0.3s)
- **Hover:** Subtle lift/scale effect (1.05x)
- **Button Press:** Quick scale down then up feedback

### 6.5 Enhanced Dice Representation

**Challenge:** Initial flat appearance of dice shapes needs realistic 3D depth.

**CSS is NOT a limitation** - Multiple approaches available for realistic 3D effects:

#### **Approach 1: CSS 3D Transforms with Multiple Faces (Most Realistic)**

Build actual 3D dice using `transform-style: preserve-3d` with visible faces.

**Implementation:**
- Create 3D object structure with multiple div faces for each die
- Position faces using `rotateX()`, `rotateY()`, `translateZ()`
- Apply `perspective` to parent container (800-1200px)
- Each face shows different numbers
- True 3D rotation during roll animation

**Pros:**
- Authentic 3D appearance with proper perspective
- Natural rotation in 3D space during animation
- Multiple faces can show different numbers
- Most realistic visual result

**Cons:**
- More complex HTML structure (6 faces for d6, 20 faces for d20)
- Requires careful mathematical positioning
- Higher CSS complexity

**Best for:** d6, d8, d10 (simpler polyhedra with manageable face counts)

---

#### **Approach 2: Advanced Lighting & Shadows (Recommended)**

Enhance current 2D shapes with sophisticated shading to simulate 3D depth.

**Key Techniques:**

1. **Multi-layered Box Shadows (4-5 layers):**
   ```css
   box-shadow: 
       inset -3px -3px 6px rgba(0,0,0,0.25),      /* Inner shadow (bottom-right) */
       inset 3px 3px 6px rgba(255,255,255,0.8),   /* Inner highlight (top-left) */
       0 6px 12px rgba(0,0,0,0.3),                 /* Drop shadow */
       0 12px 24px rgba(0,0,0,0.15),               /* Diffuse shadow */
       0 1px 0 rgba(255,255,255,0.4) inset;       /* Edge highlight */
   ```

2. **Gradient Overlays (Simulated Lighting):**
   ```css
   background: 
       radial-gradient(ellipse at 30% 30%, #ffffff 0%, transparent 50%),
       linear-gradient(135deg, #f5f1e8 0%, #e8dcc8 50%, #cbb899 100%);
   ```

3. **Beveled Edges with Pseudo-elements:**
   ```css
   .die::before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       height: 50%;
       background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
       border-radius: inherit;
   }
   ```

4. **3D Perspective Transform:**
   ```css
   transform: perspective(800px) rotateX(-8deg) rotateY(8deg);
   transform-style: preserve-3d;
   ```

5. **Subtle Surface Texture:**
   - CSS `background-image` with noise pattern
   - Or SVG pattern overlay for paper/ivory texture

**Pros:**
- Simpler implementation than true 3D
- Excellent visual results with less complexity
- Works well for all dice types
- Maintains current HTML structure
- Better browser compatibility

**Cons:**
- Not "true" 3D (fixed viewing angle)
- Lighting doesn't change with rotation

**Best for:** All dice types, especially complex polyhedra (d12, d20, d100)

---

#### **Approach 3: CSS + SVG Filters**

Use SVG filters for advanced surface effects.

**Techniques:**
- `<feTurbulence>` for realistic surface texture
- `<feSpecularLighting>` for glossy highlights and reflections
- `<feDiffuseLighting>` for matte surface lighting
- `<feDisplacementMap>` for subtle surface irregularities

**Implementation:**
```css
.die {
    filter: url(#dice-surface-filter);
}
```

**Pros:**
- Highly realistic surface effects
- Professional appearance
- Fine-grained control over lighting

**Cons:**
- Requires SVG definition in HTML
- Can impact performance on mobile
- Browser support variations

**Best for:** Desktop experience, hero dice animations

---

#### **Approach 4: Hybrid Approach (RECOMMENDED FOR THIS PROJECT)**

Combine techniques strategically based on die complexity:

**Simple Dice (d4, d6, d8):**
- Approach 2 (Advanced Lighting & Shadows)
- Quick implementation, excellent results
- Multiple box-shadows + gradients + perspective transform

**Complex Dice (d10, d12, d20, d100):**
- Approach 2 with enhanced details
- Focus on shadow depth and gradient sophistication
- Optional: SVG texture overlay for premium feel

**Selection State Enhancement:**
- Larger, softer outer glow (10-15px blur)
- Brighter inner glow for "magical" effect
- Slight scale-up (1.08x) with `translateZ(10px)` for lift
- Shadow grows during hover to simulate floating

**Roll Animation Enhancement:**
- 3D rotation: combine `rotateX()`, `rotateY()`, `rotateZ()`
- Scale pulse (0.95x → 1.1x → 1.0x) to simulate tumbling
- Dynamic shadow that grows/shrinks synchronized with scale
- Blur effect during mid-roll for motion

---

#### **Implementation Specifications**

**General CSS Pattern for All Dice:**

```css
.die {
    /* Base 3D setup */
    transform-style: preserve-3d;
    perspective: 800px;
    
    /* Lighting simulation */
    background: 
        radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 50%),
        linear-gradient(135deg, var(--dice-light) 0%, var(--dice-base) 50%, var(--dice-dark) 100%);
    
    /* Multi-layer shadows for depth */
    box-shadow: 
        inset -3px -3px 6px rgba(0,0,0,0.25),
        inset 3px 3px 6px rgba(255,255,255,0.8),
        0 6px 12px rgba(0,0,0,0.3),
        0 12px 24px rgba(0,0,0,0.15),
        0 1px 0 rgba(255,255,255,0.4) inset;
    
    /* Subtle 3D tilt */
    transform: perspective(800px) rotateX(-8deg) rotateY(8deg);
    
    /* Smooth transitions */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover state */
.die:hover {
    transform: perspective(800px) rotateX(-8deg) rotateY(8deg) translateZ(10px) scale(1.05);
    box-shadow: 
        inset -3px -3px 6px rgba(0,0,0,0.25),
        inset 3px 3px 6px rgba(255,255,255,0.8),
        0 10px 20px rgba(0,0,0,0.4),
        0 20px 40px rgba(0,0,0,0.2);
}

/* Selected state with golden glow */
.die.selected {
    box-shadow: 
        0 0 20px rgba(201, 169, 97, 0.6),
        0 0 40px rgba(201, 169, 97, 0.4),
        inset -3px -3px 6px rgba(0,0,0,0.25),
        inset 3px 3px 6px rgba(255,255,255,0.8),
        0 10px 20px rgba(0,0,0,0.4);
    transform: perspective(800px) rotateX(-8deg) rotateY(8deg) translateZ(8px) scale(1.08);
}

/* Edge highlight pseudo-element */
.die::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
    border-radius: inherit;
    pointer-events: none;
}

/* Number emboss effect */
.die-number {
    text-shadow: 
        1px 1px 2px rgba(255,255,255,0.8),
        -1px -1px 1px rgba(0,0,0,0.3);
}
```

**CSS Variables for Consistent Theming:**

```css
:root {
    --dice-light: #f5f1e8;
    --dice-base: #e8dcc8;
    --dice-dark: #cbb899;
    --dice-shadow: rgba(0,0,0,0.3);
    --glow-gold: rgba(201, 169, 97, 0.6);
}
```

**Roll Animation with 3D Effect:**

```css
@keyframes diceRoll {
    0% {
        transform: perspective(800px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
    }
    25% {
        transform: perspective(800px) rotateX(180deg) rotateY(90deg) rotateZ(45deg) scale(0.95);
    }
    50% {
        transform: perspective(800px) rotateX(360deg) rotateY(180deg) rotateZ(180deg) scale(1.1);
    }
    75% {
        transform: perspective(800px) rotateX(540deg) rotateY(270deg) rotateZ(315deg) scale(0.98);
    }
    100% {
        transform: perspective(800px) rotateX(720deg) rotateY(360deg) rotateZ(360deg) scale(1);
    }
}

.die.rolling {
    animation: diceRoll 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

#### **Die-Specific Adjustments**

**d4 (Triangle):**
- Steeper perspective angle: `rotateX(-12deg)`
- Sharper shadows on base
- Clip-path for precise triangular shape

**d6 (Square):**
- Standard cube treatment
- Rounded corners: `border-radius: 8-12px`
- Even lighting distribution

**d8 (Diamond):**
- Rotate 45deg for diamond orientation
- Enhanced edge highlights on four points

**d10 (Pentagon):**
- Unique gradient pattern following pentagonal geometry
- Shadow emphasizes bottom point

**d12 (Pentagon):**
- Similar to d10 but larger
- More complex shadow pattern

**d20 (Hexagon):**
- Hexagonal clip-path or border
- Prominent central highlight
- Wider shadow base

**d100 (Circle):**
- Radial gradient from center
- Circular shadow with gaussian blur
- Glossy highlight on top third

---

#### **Additional Depth Enhancements**

1. **Cast Shadows on Background:**
   - Each die casts shadow on the parchment surface
   - Shadow darkens/moves during roll animation

2. **Number Engraving Effect:**
   ```css
   .die-number {
       text-shadow: 
           1px 1px 2px rgba(255,255,255,0.8),
           -1px -1px 1px rgba(0,0,0,0.3),
           0 2px 4px rgba(0,0,0,0.2);
   }
   ```

3. **Micro-texture:**
   ```css
   .die::after {
       content: '';
       position: absolute;
       inset: 0;
       background-image: url('data:image/svg+xml,...'); /* Noise pattern */
       opacity: 0.05;
       mix-blend-mode: overlay;
   }
   ```

---

#### **Performance Considerations**

- Use `will-change: transform` for animated dice
- Limit simultaneous animations to 7 dice maximum
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `box-shadow` directly; use pseudo-elements if needed
- Test on mid-range mobile devices (60fps target)

---

#### **FINAL RECOMMENDATION: Approach 2 (Enhanced Shadows & Lighting)**

**Rationale:**
- Balances visual quality with implementation simplicity
- Works excellently across all 7 dice types
- Maintains current HTML structure (minimal refactoring)
- Excellent browser compatibility
- Strong performance on mobile devices
- Can be enhanced incrementally with SVG filters later

**Expected Result:**
- Realistic 3D appearance rivaling true 3D implementations
- Consistent aesthetic across all dice
- Smooth, performant animations
- Professional, polished visual quality
---

## 7. Success Criteria

- [ ] App loads and functions correctly on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] App loads and functions correctly on mobile browsers (iOS Safari, Chrome Mobile)
- [ ] Dice selection works intuitively with visual feedback
- [ ] Roll animation is smooth and realistic
- [ ] Sound plays correctly on user interaction
- [ ] Results are clearly visible and accurate
- [ ] History tracks all rolls correctly
- [ ] Responsive design works from 320px to 1920px+ width
- [ ] No JavaScript errors in console
- [ ] Meets basic accessibility standards (keyboard navigation, semantic HTML)

---

## 8. Out of Scope (v1.0)

- User authentication / accounts
- Saving roll history across sessions (localStorage)
- Multiplayer / sharing results with others
- Complex roll formulas (e.g., "3d6 drop lowest")
- Virtual tabletop integration
- Custom dice creation
- Statistics/analytics on roll results
- Backend server requirements

---

## 9. File Structure

```
dnd-dice-roller/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling
├── script.js           # JavaScript for interactivity (includes Web Audio API sound)
├── SPEC.md             # This specification document
└── README.md           # Project documentation (optional)
```

---

## 10. Next Steps

1. ✓ **Specification reviewed** - All clarification questions answered
2. ✓ **Technical approach approved** - Pure HTML/CSS with minimal JS
3. ✓ **Aesthetic direction confirmed** - Fantasy/medieval dark theme
4. **Ready for implementation**

**Implementation Order:**
1. HTML structure with semantic markup
2. CSS styling with fantasy/medieval theme and parchment background
3. Dice 3D visualization using CSS transforms and shadows
4. JavaScript interactivity (selection, rolling, random number generation, history)
5. Sound integration with mute toggle
6. Mobile responsiveness testing
7. Cross-browser testing and polish

---

**Status:** ✓ APPROVED - Ready for development

---

**Notes:**
- This specification prioritizes simplicity and user experience
- Pure HTML/CSS approach with minimal JS keeps the app lightweight and fast
- Responsive design ensures usability across all devices
- Fantasy/medieval theme with realistic 3D dice creates immersive experience
- Can iterate and add features in future versions based on user feedback
