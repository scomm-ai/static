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
    description: "Manage your account, storage, language, and shortcuts.",
    defaultArticleTitles: [
      "Managing your account",
      "Changing password",
      "Storage settings",
      "Notification preferences",
    ],
  },
  {
    id: "sentria",
    title: "Sentria & AI",
    description: "Use Sentria with your local Ollama server for on-device email AI.",
    defaultArticleTitles: [],
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
export const HELP_ARTICLES = [
  {
    slug: "set-up-ollama-for-sentria",
    title: "Set up Ollama for Sentria",
    categoryId: "sentria",
    summary:
      "Install and run a local Ollama server so Sentria can process email on your device.",
    intro:
      "Sentria is the AI Email Agent built into scomm.ai. It connects to a local Ollama server on your computer — email content stays on your device. Complete these steps so the status shows Ollama online.",
    steps: [
      {
        title: "Install Ollama",
        instruction:
          "Download Ollama from the official site for your operating system (Windows, macOS, or Linux). Run the installer and finish setup until Ollama is running in the background.",
      },
      {
        title: "Start the local server",
        instruction:
          "Confirm Ollama is listening. By default Sentria expects the server at http://127.0.0.1:11434. Leave Ollama running while you use scomm.ai.",
      },
      {
        title: "Pull a model",
        instruction:
          "In a terminal, pull a model you want Sentria to use (for example: ollama pull llama3:latest or ollama pull gemma3:4b). Wait until the download finishes before continuing.",
      },
      {
        title: "Open Set up Ollama from Sentria",
        instruction:
          "Open Sentria chat in scomm.ai. At the top, open the device menu (This Device). Under My devices, choose Set up Ollama if you still need to connect or reconfigure the local server.",
        image: {
          src: "/help-centre/set-up-ollama-for-sentria/set-up-ollama-menu.png",
          alt: "Sentria My devices menu with This Device and Set up Ollama",
          caption: "Open This Device → Set up Ollama to connect your local server.",
        },
      },
      {
        title: "Confirm Ollama online",
        instruction:
          "When the connection works, the Sentria header shows Ollama online with a blue status dot. You can then pick a model and start chatting.",
      },
    ],
  },
  {
    slug: "enable-sentria-byoai",
    title: "Enable Sentria (bring your own AI)",
    categoryId: "sentria",
    summary:
      "Turn on Sentria so it uses your local Ollama server for summaries, drafts, and chat.",
    intro:
      "Sentria is AI built into your mailbox. With bring-your-own-AI (BYOAI), email content goes only to your local Ollama URL — not to a cloud AI service. Use this after Ollama is installed and running.",
    steps: [
      {
        title: "Open the Meet Sentria window",
        instruction:
          "When you open scomm.ai with Ollama available, the Meet Sentria window introduces the assistant: summarize threads, draft replies, and manage your inbox through your local Ollama server.",
        image: {
          src: "/help-centre/enable-sentria-byoai/meet-sentria.png",
          alt: "Meet Sentria window describing on-device email AI with Ollama",
          caption: "Meet Sentria — AI built into your mailbox.",
        },
      },
      {
        title: "Review local-first status",
        instruction:
          "Confirm the status box says Ollama is ready and lists your connection URL (usually http://127.0.0.1:11434). Local-first processing means email content is sent only to that URL on your device.",
      },
      {
        title: "Enable Sentria",
        instruction:
          "Choose Enable Sentria. You can tick Don’t show again if you do not want the intro window next time. Choose Not now if you prefer to enable it later from Settings.",
      },
      {
        title: "Use the Sentria menu",
        instruction:
          "With Sentria enabled, open the Sentria menu from the mailbox. You can Summarize thread, Extract tasks, Draft reply, or Open Sentria chat. Use ↑ and ↓ to move, Enter to choose, and Esc to close.",
        image: {
          src: "/help-centre/enable-sentria-byoai/sentria-menu.png",
          alt: "Sentria menu with Summarize thread, Extract tasks, Draft reply, and Open Sentria chat",
          caption: "Sentria actions: summarize, extract tasks, draft, or open chat.",
        },
      },
      {
        title: "Review before you send",
        instruction:
          "AI can make mistakes. Always review summaries, extracted tasks, and drafts before you send a message or confirm an action.",
      },
    ],
  },
  {
    slug: "use-sentria-chat",
    title: "Use Sentria chat",
    categoryId: "sentria",
    summary:
      "Open the AI Email Agent, choose a model and tone, and run suggested email commands.",
    intro:
      "Sentria chat is the AI Email Agent panel in scomm.ai. You can compose, reply, forward, delete, star, search, and filter mail with natural-language commands — or tap a suggested action.",
    steps: [
      {
        title: "Open Sentria chat",
        instruction:
          "From the mailbox Sentria menu, choose Open Sentria chat. The header should show Ollama online when your local server is connected.",
      },
      {
        title: "Choose a model",
        instruction:
          "Open the model menu at the top (gear icon). Pick a model such as llama3:latest or gemma3:4b, or choose Refresh models if you recently pulled a new one in Ollama.",
        image: {
          src: "/help-centre/use-sentria-chat/choose-model.png",
          alt: "Sentria model menu listing gpt-oss, llama3, and gemma3 with Refresh models",
          caption: "Select the Ollama model Sentria should use.",
        },
      },
      {
        title: "Set the reply tone",
        instruction:
          "Open the tone menu next to the model. Choose Concise, Balanced, or Expressive so drafts and replies match how you want to sound.",
        image: {
          src: "/help-centre/use-sentria-chat/choose-tone.png",
          alt: "Sentria tone menu with Concise, Balanced, and Expressive",
          caption: "Pick Concise, Balanced, or Expressive for Sentria’s writing style.",
        },
      },
      {
        title: "Confirm This Device",
        instruction:
          "Open the device menu and keep This Device selected when you want Sentria to use the Ollama server on the machine you are using. Choose Set up Ollama if you need to reconnect.",
        image: {
          src: "/help-centre/use-sentria-chat/my-devices.png",
          alt: "Sentria My devices menu with This Device selected and Set up Ollama",
          caption: "My devices — use This Device or open Set up Ollama.",
        },
      },
      {
        title: "Try a suggested action",
        instruction:
          "Under AI Email Agent, tap a suggestion such as Summarize this email, Draft a polite reply, Star this email, Extract action items, or Delete this email. You can also type your own request in Ask anything or give a command… and press Send.",
      },
      {
        title: "Review before confirming",
        instruction:
          "Check every draft or action Sentria proposes before you send, star, or delete. AI can make mistakes.",
      },
    ],
  },
  {
    slug: "change-language-and-install-language-pack",
    title: "Change your language and install a language pack",
    categoryId: "account-settings",
    summary:
      "Switch the scomm.ai display language and install an optional language pack.",
    intro:
      "You can change the language used in the scomm.ai interface and install a language pack when you need translations that are not included by default.",
    steps: [
      {
        title: "Open Settings",
        instruction:
          "In scomm.ai, select the gear icon in the top-right corner to open Settings.",
      },
      {
        title: "Open Language",
        instruction:
          "In Settings, open Language (or Language & region). You will see the current display language and any installed language packs.",
      },
      {
        title: "Change the display language",
        instruction:
          "Choose your preferred language from the list. Apply the change. If prompted, restart scomm.ai so menus, buttons, and system text update fully.",
      },
      {
        title: "Install a language pack",
        instruction:
          "If your language needs an extra pack, choose Install language pack (or Download). Select the pack, wait for the download to finish, then set it as your display language.",
      },
      {
        title: "Confirm the change",
        instruction:
          "Return to your inbox and check that labels, folders, and menus appear in the new language. If anything still shows the old language, quit scomm.ai completely and open it again.",
      },
    ],
  },
  {
    slug: "connecting-your-email-account",
    title: "Connecting your email account",
    categoryId: "getting-started",
    summary:
      "Add a Gmail, Microsoft, or IMAP mailbox in scomm.ai and switch between accounts.",
    intro:
      "Link your email so scomm.ai can sync your inbox on this device. You can connect Google, Microsoft work or school, Microsoft personal, or IMAP. Examples use alex.demo@scomm.ai — connect your own address for real mail.",
    steps: [
      {
        title: "Open Switch account",
        instruction:
          "In the left sidebar, select your current account. The menu shows Switch account. Add account sits above all of your mailboxes — use it to link another inbox, or pick an account below to switch.",
        image: {
          src: "/help-centre/connecting-your-email-account/switch-account.png",
          alt: "Switch account menu with Add account above the mailbox list and an active account checked",
          caption: "Add account appears above all mailboxes in Switch account.",
        },
      },
      {
        title: "Choose Add account",
        instruction:
          "From that same menu, choose Add account (above the account list) to open the Add Account window.",
        image: {
          src: "/help-centre/connecting-your-email-account/add-account.png",
          alt: "scomm.ai account menu with Switch account and Add account",
          caption: "Choose Add account above your mailbox list.",
        },
      },
      {
        title: "Enter your mailbox address",
        instruction:
          "In the Add Account window, type your mailbox address. scomm.ai detects your provider when it can. You can still pick another sign-in method below.",
        image: {
          src: "/help-centre/connecting-your-email-account/add-account-modal.png",
          alt: "Add Account window with mailbox address field and Continue with Google, Microsoft, or IMAP",
          caption: "Add Account — continue with Google, Microsoft, or IMAP.",
        },
      },
      {
        title: "Continue with your provider",
        instruction:
          "Choose Continue with Google, Continue with work or school, Continue with Microsoft (Personal), or Continue with IMAP. Complete the sign-in or permission steps so scomm.ai can access that mailbox.",
      },
      {
        title: "Wait for the first sync",
        instruction:
          "After the account is linked, scomm.ai starts syncing mail. Larger mailboxes can take longer the first time. You can keep using the app while sync runs.",
      },
      {
        title: "Switch to another mailbox",
        instruction:
          "Open Switch account again. Your mailboxes appear under Add account. Select the one you want — a checkmark shows the active account. Folders and Compose use that mailbox.",
      },
    ],
  },
  {
    slug: "add-a-second-mailbox",
    title: "Add a second mailbox and switch between them",
    categoryId: "getting-started",
    summary:
      "Link another email account in scomm.ai and move between mailboxes from the sidebar.",
    intro:
      "scomm.ai can hold more than one mailbox. Add a second Gmail, Outlook, or Hotmail account, then switch accounts from the sidebar without leaving the app. Use a test address such as alex.demo@scomm.ai only in examples — connect your own accounts for real mail.",
    steps: [
      {
        title: "Open Switch account",
        instruction:
          "In the left sidebar, open your account menu. Add account appears above all mailboxes. Choose Add account to link another inbox, or select a mailbox below to switch.",
        image: {
          src: "/help-centre/connecting-your-email-account/switch-account.png",
          alt: "Switch account menu with Add account above the mailbox list",
          caption: "Add account sits above all accounts in the switch menu.",
        },
      },
      {
        title: "Choose Add account",
        instruction:
          "Select Add account at the top of the list to open the Add Account window.",
        image: {
          src: "/help-centre/connecting-your-email-account/add-account.png",
          alt: "scomm.ai account menu with Switch account and Add account",
          caption: "Choose Add account under Switch account.",
        },
      },
      {
        title: "Sign in to the second mailbox",
        instruction:
          "In Add Account, enter the address and choose Continue with Google, Microsoft, or IMAP. Complete sign-in so scomm.ai can sync that inbox on this device.",
        image: {
          src: "/help-centre/connecting-your-email-account/add-account-modal.png",
          alt: "Add Account window with provider buttons for Google, Microsoft, and IMAP",
          caption: "Pick a provider to connect the second mailbox.",
        },
      },
      {
        title: "Wait for the first sync",
        instruction:
          "After the account is linked, scomm.ai starts syncing mail. Larger mailboxes can take longer the first time. You can keep using your first mailbox while sync runs.",
      },
      {
        title: "Switch between mailboxes",
        instruction:
          "Open Switch account again. Pick the mailbox under Add account. The checkmark marks the active account. Folders (Inbox, Sent, Drafts, and the rest) update to that account.",
      },
      {
        title: "Compose from the right account",
        instruction:
          "Before you send, confirm the active account in the sidebar. New mail from Compose is sent from the mailbox you currently have selected.",
      },
    ],
  },
  {
    slug: "keyboard-shortcuts",
    title: "Keyboard shortcuts and how to remap them",
    categoryId: "account-settings",
    summary:
      "See the default keyboard shortcuts in scomm.ai and change bindings that conflict with your workflow.",
    intro:
      "Keyboard shortcuts help you move through mail and Sentria without reaching for the mouse. You can view every binding and remap most actions from Settings.",
    steps: [
      {
        title: "Open the shortcuts list",
        instruction:
          "Press ? (question mark) while the inbox is focused, or open Settings → Keyboard shortcuts. The list shows the current key for each action.",
      },
      {
        title: "Mail and navigation (defaults)",
        instruction:
          "C — Compose\n/ — Focus search\nJ / K — Newer / older conversation\nEnter — Open selected message\nEsc — Close panel or dialog\nR — Reply\nA — Reply all\nF — Forward\nE — Archive\n# — Delete\nS — Star or unstar\nU — Mark unread\nG then I — Go to Inbox\nG then S — Go to Sent\nG then D — Go to Drafts",
      },
      {
        title: "Sentria (defaults)",
        instruction:
          "Open the Sentria menu from the mailbox, then:\n↑ / ↓ — Move between Sentria actions\nEnter — Run the selected action (Summarize thread, Extract tasks, Draft reply, or Open Sentria chat)\nEsc — Close the Sentria menu",
      },
      {
        title: "Remap a shortcut",
        instruction:
          "In Settings → Keyboard shortcuts, select the action you want to change. Press the new key combination, then save. If the keys are already used, scomm.ai asks you to replace the existing binding or pick another combination.",
      },
      {
        title: "Reset to defaults",
        instruction:
          "To undo custom bindings, open Keyboard shortcuts and choose Reset to defaults. Confirm when prompted. Your mail and Sentria shortcuts return to the list above.",
      },
    ],
  },
];

export function getHelpArticles() {
  return HELP_ARTICLES;
}

/** Params for static export. Must never be empty or `next build` fails. */
export function getHelpStaticParams() {
  const fromArticles = HELP_ARTICLES.map((article) => ({ slug: article.slug }));
  const articleSlugs = new Set(fromArticles.map((item) => item.slug));

  const fromDefaults = HELP_CATEGORIES.flatMap((category) =>
    (category.defaultArticleTitles || [])
      .map((title) => slugifyHelpTitle(title))
      .filter((slug) => slug !== "contact-support" && !articleSlugs.has(slug))
      .map((slug) => ({ slug }))
  );

  const combined = [...fromArticles, ...fromDefaults];
  return combined.length > 0 ? combined : [{ slug: "help-centre" }];
}

export function getHelpArticleOrStub(slug) {
  const article = getHelpArticleBySlug(slug);
  if (article) return article;

  for (const category of HELP_CATEGORIES) {
    const title = (category.defaultArticleTitles || []).find(
      (item) => slugifyHelpTitle(item) === slug
    );
    if (!title) continue;

    return {
      slug,
      title,
      categoryId: category.id,
      summary: category.description,
      intro:
        "This article is coming soon. Check back shortly for a full walkthrough.",
      steps: [],
      comingSoon: true,
    };
  }

  return null;
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
