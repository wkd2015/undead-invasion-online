/**
 * 首页 FAQ 条目数据源。
 * 被 UndeadInvasionArticle 消费，用于页面可见 FAQ 内容。
 */
export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "h3-faq-free",
    question: "Is Undead Invasion Online free to play in the browser?",
    answer:
      "Yes. Undead Invasion Online is distributed as a free-to-play HTML5 browser game. There are no mandatory purchases or installers to start the base survival loop, though host portals may display advertising around the embedded iframe.",
  },
  {
    id: "h3-faq-plugin",
    question: "Do I need to install a plugin or launcher to play Undead Invasion Online?",
    answer:
      "No plugins or launchers are required. Undead Invasion Online runs on modern HTML5, so any evergreen desktop or mobile browser (Chrome, Edge, Firefox, Safari) handles rendering, audio, and input natively without Flash or extensions.",
  },
  {
    id: "h3-faq-save",
    question: "Can I save my progress in Undead Invasion Online?",
    answer:
      "Undead Invasion Online is a permadeath survival shooter with no mid-run checkpoints. When you die the run resets, but meta-progress such as random roguelike upgrades earned after matches can carry between sessions depending on the build. Always look for the in-game settings panel for any available save or cloud sync options.",
  },
  {
    id: "h3-faq-browsers",
    question: "Which browsers and devices are supported?",
    answer:
      "Undead Invasion Online targets the latest two versions of Chrome, Edge, Firefox, and Safari on desktop. Mobile play is supported in portrait and landscape on recent Android Chrome and iOS Safari builds, using on-screen controls or an external keyboard/mouse when available. Older Internet Explorer and Flash-era browsers are not supported.",
  },
  {
    id: "h3-faq-unblocked",
    question: "Is Undead Invasion Online an unblocked version?",
    answer:
      "The HTML5 build is commonly listed as Undead Invasion unblocked because it loads directly in the browser without plugins or installers, which makes it easier to use on school or office networks that whitelist generic game portals. Network policies still vary, so check with your administrator before relying on access in a managed environment.",
  },
  {
    id: "h3-faq-death",
    question: "What happens when I die during an Undead Invasion Online run?",
    answer:
      "Runs reset to day one without a checkpoint. You keep hard-won knowledge such as spawn patterns, upgrade priorities, and trap synergies, but the world state goes back to the start. That one-more-run loop is why Undead Invasion Online rewards discipline: every wasted bullet, misplaced barricade, or greedy reload shows up in the final day you reach.",
  },
];
