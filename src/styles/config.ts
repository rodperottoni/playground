import { createFont, createTamagui, createTokens, isWeb } from "tamagui";
import { createAnimations } from "@tamagui/animations-moti";

// To work with the tamagui UI kit styled components (which is optional)
// you'd want the keys used for `size`, `lineHeight`, `weight` and
// `letterSpacing` to be consistent. The `createFont` function
// will fill-in any missing values if `lineHeight`, `weight` or
// `letterSpacing` are subsets of `size`.
const systemFont = createFont({
  // family: isWeb ? "Helvetica, Arial, sans-serif" : "System",
  // size: {
  //   1: 12,
  //   2: 14,
  //   3: 18,
  //   4: 24,
  // },
  // weight: {
  //   1: "300",
  //   3: "600",
  // },
  // letterSpacing: {
  //   1: 0,
  //   2: -1,
  // },
  // (native only) swaps out fonts by face/style
  // face: {
  //   300: { normal: "InterLight", italic: "InterItalic" },
  //   600: { normal: "InterBold" },
  // },
});

const size = {
  0: 4,
  1: 8,
  2: 12,
  3: 16,
  4: 20,
  5: 24,
  6: 28,
  7: 32,
  8: 36,
  9: 40,
  10: 44,
  true: 8,
};

export const tokens = createTokens({
  size,
  space: { ...size, "-1": -4, "-2": -8 },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: "#fff",
    black: "#000",
  },
});

export const tamaguiConfig = createTamagui({
  // fonts: {
  //   // heading: systemFont,
  //   // body: systemFont,
  // },
  tokens,

  themes: {
    light: {
      bg: "#f2f2f2",
      color: tokens.color.black,
    },
    dark: {
      bg: "#111",
      color: tokens.color.white,
    },
  },

  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  },

  // Shorthands
  // Adds <View m={10} /> to <View margin={10} />
  // See Settings section on this page to only allow shorthands
  // Be sure to have `as const` at the end
  shorthands: {
    px: "paddingHorizontal",
    py: "paddingVertical",
    mx: "marginHorizontal",
    my: "marginVertical",
    f: "flex",
    m: "margin",
    w: "width",
  } as const,

  animations: createAnimations({
    fast: {
      type: "spring",
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
    medium: {
      type: "spring",
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    slow: {
      type: "spring",
      damping: 20,
      stiffness: 60,
    },
  }),
});

type AppConfig = typeof tamaguiConfig;

// Enables correct prop types for the tamagui components
declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}
