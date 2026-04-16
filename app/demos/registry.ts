export type DemoEntry = {
  slug:
    | "payment-integration"
    | "ai-chat-assistant"
    | "tic-tac-toe"
    | "experience-3d"
    | "particle-effects"
    | "audio-visualizer"
    | "qr-code-generator"
    | "terminal-emulator";
  title: string;
  description: string;
};

export const demos: DemoEntry[] = [
  {
    slug: "payment-integration",
    title: "Payment Integration",
    description:
      "Demo payment flow with Paystack-inspired UX. Test checkout interactions and transaction states.",
  },
  {
    slug: "ai-chat-assistant",
    title: "AI Chat Assistant",
    description:
      "Conversational assistant demo with contextual replies and realistic chat interactions.",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "Classic game with an AI opponent that blocks, wins, and adapts its move strategy.",
  },
  {
    slug: "experience-3d",
    title: "3D Experience",
    description:
      "Interactive perspective playground with controllable tilt, depth, and animated visual layers.",
  },
  {
    slug: "particle-effects",
    title: "Particle Effects",
    description:
      "Canvas-based particle system with motion, bounce physics, and pointer interaction.",
  },
  {
    slug: "audio-visualizer",
    title: "Audio Visualizer",
    description:
      "Microphone-powered realtime frequency bars rendered on canvas with Web Audio API.",
  },
  {
    slug: "qr-code-generator",
    title: "QR Code Generator",
    description:
      "Create styled QR codes instantly and open the generated image in a new tab.",
  },
  {
    slug: "terminal-emulator",
    title: "Terminal Emulator",
    description:
      "Browser terminal simulation with command parsing and scripted command output.",
  },
];

export function getDemoBySlug(slug: string) {
  return demos.find((demo) => demo.slug === slug);
}
