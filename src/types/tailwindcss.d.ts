declare module 'tailwindcss/lib/util/flattenColorPalette' {
    import { FlattenColorPalette } from 'tailwindcss/types/config'; // Sesuaikan dengan tipe yang sesuai jika ada
    const flattenColorPalette: (colors: Record<string, any>) => Record<string, string>;
    export default flattenColorPalette;
  }