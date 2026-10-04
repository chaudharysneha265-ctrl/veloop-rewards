# VELOOP Rewards

## Project Overview
VELOOP Rewards is a responsive React + Vite reward interface designed around five core reward experiences: Refer & Earn, Swap Center, Bonus VEs, Captcha Tasks, and Exchange Center. The interface uses a premium fintech-inspired visual language with a deep navy background, soft blue and gold accents, large feature visuals, interactive CTAs, and responsive layouts.

## Live Demo
https://veloop-rewards-vert.vercel.app/

## GitHub Repository
https://github.com/chaudharysneha265-ctrl/veloop-rewards

## Features
- Five full-width reward banners
- Refer & Earn interaction with sharing/copy feedback
- Swap Center amount input and swap interaction
- Bonus VEs progress and claim interaction
- Captcha Tasks start interaction
- Exchange Center redemption-option selection
- Clear value proposition and CTA for every banner
- Large feature-specific visual treatment
- Hover, active, and keyboard focus-visible states
- Responsive desktop, tablet, and mobile layouts
- Smooth CSS animations with prefers-reduced-motion support
- Accessible semantic buttons, labels, and status feedback

## Banner Details

### 1. Refer & Earn
Explains the referral reward experience and provides a share/referral CTA with feedback.

### 2. Swap Center
Communicates conversion between supported reward balances. The interaction accepts a VE amount and presents a swap result.

### 3. Bonus VEs
Highlights opportunities to receive additional VEs and includes progress feedback plus a claim interaction.

### 4. Captcha Tasks
Provides an eligible task-start interaction and task status feedback.

### 5. Exchange Center
Focuses on redeeming earned VEs through supported options. The interface distinguishes redemption from the Swap Center conversion flow.

## Technology Stack
- React 19
- Vite 8
- JavaScript (ES modules)
- Bootstrap 5.3
- CSS Modules
- React Icons
- React Hooks (useState)
- CSS transitions and keyframe animations
- ESLint

## Responsive Design
The banners use 100% of their parent width and are designed around the assignment viewport ranges.

- Desktop/laptop: 410–450px target banner height
- Tablet: 380–540px target banner height
- Mobile: 330–520px target banner height
- Tested design targets: 1366x768, 1440x900, 1920x1080, 768x1024, 820x1180, 375x812, 390x844, and 430x932
- Main page background: #161827

## Animation Details
- Banner hover uses a subtle lift and shadow transition.
- Feature visuals use restrained floating motion.
- Accent glows and decorative dots use low-intensity motion.
- Bonus progress animates when the bonus state is shown.
- CTA feedback messages enter with a short transition.
- prefers-reduced-motion reduces animation and transition duration for users who request less motion.

## Accessibility
- Semantic headings and buttons are used for interactive controls.
- Form input has an associated label.
- Interactive controls include visible keyboard focus states.
- Exchange options expose their selected state with aria-pressed.
- Decorative visual elements are hidden from assistive technology where appropriate.
- Status and success feedback is presented as part of the interface.
- Touch-friendly CTA sizing is used on responsive layouts.

## Project Structure
```text
veloop-rewards/
├── src/
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── eslint.config.js
└── README.md
```

## Installation
```bash
git clone https://github.com/chaudharysneha265-ctrl/veloop-rewards.git
cd veloop-rewards
npm install
npm run dev
```

## Production Build
```bash
npm run build
```

## Preview Production Build
```bash
npm run preview
```

## Lint
```bash
npm run lint
```

## Screenshots
Final submission screenshots should cover:

- Desktop overview
- Tablet overview
- Mobile overview
- Refer & Earn banner
- Swap Center banner
- Bonus VEs banner
- Captcha Tasks banner
- Exchange Center banner

Recommended screenshot folder:
```text
docs/
└── screenshots/
    ├── desktop.png
    ├── tablet.png
    ├── mobile.png
    ├── refer-earn.png
    ├── swap-center.png
    ├── bonus-ves.png
    ├── captcha-tasks.png
    └── exchange-center.png
```

## Notes
- Reward values and interactions are demo/sample UI behavior and should not be treated as official VELOOP reward claims.
- The project keeps the existing React/Vite structure and improves the working reward sections rather than rebuilding the project from scratch.

## Author
Repository owner: `chaudharysneha265-ctrl`

## Submission Links
- Live Demo: https://veloop-rewards-vert.vercel.app/
- GitHub: https://github.com/chaudharysneha265-ctrl/veloop-rewards