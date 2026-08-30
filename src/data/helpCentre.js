export const HELP_CENTRE_DUMMY_EMAIL = "alex.demo@scomm.ai";

export const HELP_CATEGORIES = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Install the app, add your account, and send your first message.",
    defaultArticleTitles: [
      "How to install scomm.ai",
      "Connecting your email account",
      "Setting up encryption",
      "First steps guide",
    ],
  },
  {
    id: "account-settings",
    title: "Account & Settings",
    description: "Manage your account, storage, and notifications.",
    defaultArticleTitles: [
      "Managing your account",
      "Changing password",
      "Storage settings",
      "Notification preferences",
    ],
  },
  {
    id: "security-privacy",
    title: "Security & Privacy",
    description: "Encryption, backups, and keeping your mail private.",
    defaultArticleTitles: [
      "Understanding encryption",
      "Backup and recovery",
      "Privacy settings",
      "Security best practices",
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Fix common issues and find out how to get more help.",
    defaultArticleTitles: [
      "Common issues and solutions",
      "Email sync problems",
      "Performance issues",
      "Contact support",
    ],
  },
];

export function slugifyHelpTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Static Help Centre articles.
 *
 * Add a new article by appending an object to HELP_ARTICLES. Place screenshots
 * in public/help-centre/<slug>/ and reference them from each step's `image`.
 *
 * Use HELP_CENTRE_DUMMY_EMAIL in screenshots and examples instead of a real address.
 *
 * Example:
 * {
 *   slug: "connect-your-email",
 *   title: "Connect your email account",
 *   categoryId: "getting-started",
 *   summary: "Link Gmail or Outlook in a few short steps.",
 *   intro: "You will need the inbox you want to add, for example alex.demo@scomm.ai.",
 *   steps: [
 *     {
 *       instruction: "Open scomm.ai and choose Add account.",
 *       image: {
 *         src: "/help-centre/connect-your-email/step-1.png",
 *         alt: "Add account screen",
 *         caption: "Choose Add account.",
 *       },
 *     },
 *   ],
 * }
 */
export const HELP_ARTICLES = [];

export function getHelpArticles() {
  return HELP_ARTICLES;
}

export function getHelpArticleBySlug(slug) {
  return HELP_ARTICLES.find((article) => article.slug === slug) ?? null;
}

export function getHelpArticlesByCategory(categoryId) {
  return HELP_ARTICLES.filter((article) => article.categoryId === categoryId);
}

export function getHelpCategoryById(categoryId) {
  return HELP_CATEGORIES.find((category) => category.id === categoryId) ?? null;
}
