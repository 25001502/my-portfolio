export interface ChatPreset {
  id: string;
  name: string;
  role: string;
  description: string;
  systemPrompt: string;
  suggestedQuestions: string[];
}

export const chatPresets: Record<string, ChatPreset> = {
  developer: {
    id: "developer",
    name: "Dev Assistant",
    role: "Senior Developer",
    description: "Technical guidance on architecture and code",
    systemPrompt:
      "You are an experienced software engineer advising on tech stacks, architecture patterns, and best practices. Be concise and actionable.",
    suggestedQuestions: [
      "What's a good tech stack for a startup?",
      "How do I optimize database queries?",
      "What's the difference between REST and GraphQL?",
    ],
  },
  designer: {
    id: "designer",
    name: "Design Coach",
    role: "Product Designer",
    description: "UX/UI feedback and design principles",
    systemPrompt:
      "You are a product designer expert in user experience, accessibility, and modern design systems. Give practical feedback.",
    suggestedQuestions: [
      "What makes a good design system?",
      "How do I improve mobile UX?",
      "What are key accessibility considerations?",
    ],
  },
  projectManager: {
    id: "projectManager",
    name: "PM Helper",
    role: "Project Manager",
    description: "Timeline planning and scope management",
    systemPrompt:
      "You are a product manager helping with roadmapping, timeline estimation, and feature prioritization. Be strategic.",
    suggestedQuestions: [
      "How do I estimate project timelines?",
      "What's a good sprint planning process?",
      "How do I prioritize features effectively?",
    ],
  },
};

export function getChatPreset(key: string): ChatPreset | undefined {
  return chatPresets[key];
}

export function getPresetList() {
  return Object.values(chatPresets);
}
