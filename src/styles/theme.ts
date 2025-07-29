export const theme = {
  colors: {
    "neutral-100": "#ffffffff",
    "neutral-200": "#d3d3d3ff",
    "neutral-300": "#bbbbbbff",
    "neutral-400": "#a7a7a7ff",
    "neutral-500": "#7c7c7cff",
    "neutral-600": "#535353ff",
    "neutral-700": "#383838ff",
    "neutral-800": "#242424ff",
    "neutral-900": "#000000ff",
    "light-red": "#ff0000ff",
    "pastel-red": "#dd2929ff",
    "dark-blue": "#00025aff",
  },
  spacing: {
    minimum: "2px",
    fly: "4px",
    "super-fly": "6px",
    bantam: "8px",
    "super-bantam": "10px",
  },
  radius: {
    less: "10px",
    default: "16px",
    full: "999px",
  },
  font: {
    body: "'Inter', sans-serif",
    crazy: "'Bitcount Prop Single',sans-serif",
  },
};
export type ThemeType = typeof theme;
