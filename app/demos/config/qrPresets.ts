export interface QRPreset {
  name: string;
  category: "url" | "contact" | "email" | "text";
  template: string;
  defaultFg: string;
  defaultBg: string;
  description: string;
}

export const qrPresets: QRPreset[] = [
  {
    name: "Portfolio Link",
    category: "url",
    template: "https://gradiate.co.za",
    defaultFg: "000000",
    defaultBg: "ffffff",
    description: "Link to your portfolio",
  },
  {
    name: "Contact vCard",
    category: "contact",
    template:
      "BEGIN:VCARD\nVERSION:3.0\nFN:Thandululo Nengovhela\nTEL:+27665509434\nEMAIL:thandululo99@gmail.com\nEND:VCARD",
    defaultFg: "1f2937",
    defaultBg: "ffffff",
    description: "Contact info (vCard format)",
  },
  {
    name: "Email",
    category: "email",
    template: "mailto:thandululo99@gmail.com",
    defaultFg: "000000",
    defaultBg: "fef3c7",
    description: "Email link",
  },
  {
    name: "GitHub Profile",
    category: "url",
    template: "https://github.com/25001502",
    defaultFg: "1f2937",
    defaultBg: "ffffff",
    description: "GitHub profile link",
  },
];

export interface QRAdvancedOptions {
  errorCorrection: "L" | "M" | "Q" | "H";
  border: number;
}

export const qrAdvancedDefaults: QRAdvancedOptions = {
  errorCorrection: "M",
  border: 1,
};

export function getQRPreset(name: string): QRPreset | undefined {
  return qrPresets.find((p) => p.name === name);
}
