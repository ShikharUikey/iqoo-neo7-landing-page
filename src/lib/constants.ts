// ─── Frame Sequence Constants ───────────────────────────────
export const TOTAL_FRAMES = 163;
export const FRAME_PATH_PREFIX = '/frames/ezgif-frame-';

/**
 * Returns the padded frame path for a given index.
 * e.g., getFramePath(1)  → '/frames/ezgif-frame-001.jpg'
 *        getFramePath(42) → '/frames/ezgif-frame-042.jpg'
 */
export function getFramePath(index: number): string {
  const padded = String(index).padStart(3, '0');
  return `${FRAME_PATH_PREFIX}${padded}.jpg`;
}

// ─── Scroll Story Phases ────────────────────────────────────
export interface ScrollStoryPhase {
  id: string;
  startPercent: number;
  endPercent: number;
  headline: string;
  subtext: string;
}

export const scrollStory: ScrollStoryPhase[] = [
  {
    id: 'intro',
    startPercent: 0,
    endPercent: 0.15,
    headline: 'Power Beyond Limits.',
    subtext:
      'Flagship performance engineered for gamers, creators, and everyday power users.',
  },
  {
    id: 'design',
    startPercent: 0.15,
    endPercent: 0.3,
    headline: 'Crafted With Precision.',
    subtext: 'Every detail is designed with purpose.',
  },
  {
    id: 'performance',
    startPercent: 0.3,
    endPercent: 0.45,
    headline: 'Flagship Performance.',
    subtext:
      'Powered by the 4nm MediaTek Dimensity 8200 for exceptional speed, efficiency, and sustained performance.',
  },
  {
    id: 'cooling',
    startPercent: 0.45,
    endPercent: 0.6,
    headline: 'Cool Under Pressure.',
    subtext:
      'Large Vapor Chamber Cooling keeps temperatures under control during intense gaming sessions.',
  },
  {
    id: 'display',
    startPercent: 0.6,
    endPercent: 0.75,
    headline: 'Every Frame Matters.',
    subtext:
      'Ultra-smooth 120Hz scrolling. Rich colors. Flagship brightness. Instant touch response.',
  },
  {
    id: 'camera',
    startPercent: 0.75,
    endPercent: 0.9,
    headline: 'Capture Every Moment.',
    subtext:
      '64MP OIS Camera. Night photography. AI scene optimization. Ultra stable recording.',
  },
  {
    id: 'finale',
    startPercent: 0.9,
    endPercent: 1.0,
    headline: 'Built To Perform.',
    subtext: 'Every component working in perfect harmony.',
  },
];

// ─── Navigation Items ───────────────────────────────────────
export interface NavItem {
  label: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', id: 'hero' },
  { label: 'Performance', id: 'performance' },
  { label: 'Display', id: 'display' },
  { label: 'Camera', id: 'camera' },
  { label: 'Cooling', id: 'cooling' },
  { label: 'Battery', id: 'battery' },
  { label: 'Specs', id: 'specs' },
];

// ─── Spec Highlights ────────────────────────────────────────
export interface Highlight {
  title: string;
  value: string;
  unit: string;
}

export const HIGHLIGHTS: Highlight[] = [
  { title: 'Dimensity 8200', value: '4', unit: 'nm' },
  { title: '120Hz AMOLED', value: '120', unit: 'Hz' },
  { title: '120W FlashCharge', value: '120', unit: 'W' },
  { title: '5000mAh Battery', value: '5000', unit: 'mAh' },
  { title: 'VC Cooling', value: 'Large', unit: '' },
  { title: '64MP OIS Camera', value: '64', unit: 'MP' },
  { title: 'Dual Speakers', value: 'Stereo', unit: '' },
  { title: '5G', value: 'Sub-6', unit: '' },
];

// ─── Full Specifications ────────────────────────────────────
export interface SpecEntry {
  label: string;
  value: string;
}

export interface SpecCategory {
  [category: string]: SpecEntry[];
}

export const SPECS: SpecCategory = {
  'Processor & Memory': [
    { label: 'Chipset', value: 'MediaTek Dimensity 8200 (4nm)' },
    { label: 'CPU', value: 'Octa-core (1x 3.1 GHz Cortex-A78 & 3x 2.6 GHz Cortex-A78 & 4x 2.0 GHz Cortex-A55)' },
    { label: 'GPU', value: 'Mali-G610 MC6' },
    { label: 'RAM', value: '8GB / 12GB LPDDR5' },
    { label: 'Storage', value: '128GB / 256GB UFS 3.1' },
  ],
  'Display': [
    { label: 'Type', value: '6.78" AMOLED, 120Hz' },
    { label: 'Resolution', value: '2400 x 1080 pixels (FHD+)' },
    { label: 'Brightness', value: '1300 nits (peak)' },
    { label: 'HDR', value: 'HDR10+' },
    { label: 'Touch Sampling', value: '360Hz' },
    { label: 'Protection', value: 'Schott Xensation Glass' },
  ],
  'Camera': [
    { label: 'Main', value: '64MP, f/1.89, OIS, AF' },
    { label: 'Ultra-Wide', value: '8MP, f/2.2, 120° FOV' },
    { label: 'Macro', value: '2MP, f/2.4' },
    { label: 'Front', value: '16MP, f/2.45' },
    { label: 'Video', value: '4K @ 30fps, 1080p @ 60fps, Gyro EIS' },
    { label: 'Features', value: 'Night Mode, AI Scene, Super Macro, Panorama' },
  ],
  'Battery & Charging': [
    { label: 'Capacity', value: '5000 mAh' },
    { label: 'Charging', value: '120W FlashCharge' },
    { label: 'Charge Time', value: '0-100% in ~25 minutes' },
    { label: 'Port', value: 'USB Type-C' },
  ],
  'Connectivity': [
    { label: 'Network', value: '5G (Sub-6 GHz), 4G LTE' },
    { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax)' },
    { label: 'Bluetooth', value: '5.3' },
    { label: 'NFC', value: 'Yes' },
    { label: 'Location', value: 'GPS, GLONASS, BeiDou, Galileo' },
  ],
  'Design & Build': [
    { label: 'Dimensions', value: '164.8 x 76.8 x 8.5 mm' },
    { label: 'Weight', value: '193.6 g' },
    { label: 'Build', value: 'Glass front, Plastic frame' },
    { label: 'Colors', value: 'Fearless Flame, Interstellar Black, Maverick Orange' },
  ],
  'Audio & Haptics': [
    { label: 'Speakers', value: 'Dual Stereo Speakers' },
    { label: 'Hi-Res Audio', value: 'Yes' },
    { label: 'Headphone Jack', value: 'No (USB-C adapter)' },
    { label: 'Haptics', value: 'X-axis Linear Motor' },
  ],
  'Software': [
    { label: 'OS', value: 'Android 13' },
    { label: 'UI', value: 'Funtouch OS 13' },
    { label: 'Updates', value: '2 major OS updates, 3 years security patches' },
  ],
};
