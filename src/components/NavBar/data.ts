import { url } from "inspector";
import { NavBarItem } from "../../interfaces/navBar";

export const data: NavBarItem[] = [
  {
    type: "list",
    title: "About",
    navBarItemList: [
      {
        title: "About Aurora",
        icon: "about.svg",
        url: "/about",
      },
      {
        title: "News & Updates",
        icon: "newsupdates.svg",
        url: "/blog",
      },
      {
        title: "Videos",
        icon: "videos.svg",
        url: "/videos",
      },
    ],
    btnButton: [
      [
        {
          title: "Press Kit",
          icon: "download.svg",
          url: "https://www.datocms-assets.com/50156/1659953812-aurora-media-kit.zip",
        },
      ],
    ],
  },
  {
    type: "list",
    title: "Ecosystem",
    navBarItemList: [
      {
        title: "Ecosystem Apps",
        icon: "ecosystem.svg",
        url: "/ecosystem",
      },
      {
        title: "Tokens",
        icon: "tokens.svg",
        url: "/tokens",
      },
      {
        title: "Grants",
        icon: "grants.svg",
        url: "/grants",
      },
      {
        title: "Aurora DAO",
        icon: "dao.svg",
        url: "/dao",
      },
      {
        title: "AURORA Token",
        icon: "tokenomics.svg",
        url: "/tokenomics",
      },
      {
        title: "AURORA Futures Token",
        icon: "futures.svg",
        url: "/futures",
      },
      {
        title: "Faucet",
        icon: "faucet.svg",
        url: "/faucet",
      },
    ],
    btnButton: [
      [
        {
          title: "Rainbow Bridge",
          icon: "rainbow.svg",
          url: "https://rainbowbridge.app",
        },
      ],
    ],
  },
  {
    type: "list",
    title: "Community",
    navBarItemList: [
      {
        title: "Discord",
        icon: "discord.svg",
        url: "/https://discord.gg/dEFJBz8HQV",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
      {
        title: "Discussion Forum",
        icon: "forum.svg",
        url: "https://forum.aurora.dev/",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
      {
        title: "Telegram",
        icon: "telegram.svg",
        url: "https://t.me/auroraisnear",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
      {
        title: "Twitter",
        icon: "twitter.svg",
        url: "https://twitter.com/auroraisnear",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
      {
        title: "Youtube",
        icon: "youtube.svg",
        url: "https://www.youtube.com/channel/UC5inYyvUO10iL65hBPFtpvg",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
      {
        title: "GitHub",
        icon: "github.svg",
        url: "https://github.com/aurora-is-near",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
      {
        title: "Instagram",
        icon: "instagram.svg",
        url: "https://www.instagram.com/auroraisnear/",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
      {
        title: "Medium",
        icon: "medium.svg",
        url: "https://medium.com/@auroraisnear",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
      {
        title: "Facebook",
        icon: "facebook.svg",
        url: "https://www.facebook.com/auroraisnear",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
    ],
  },
  {
    type: "list",
    title: "Developers",
    navBarItemList: [
      {
        title: "Documentation",
        subtitle: "Start developing on Aurora.",
        icon: "documentation.svg",
        url: "https://doc.aurora.dev/",
        nextIcon: "arrowpoint.svg",
        nextIconStyle: "hidden group-hover:block",
      },
      {
        title: "Block Explorer",
        subtitle: "Find and explore your Aurora transactions",
        icon: "explorer.svg",
        url: "https://aurorascan.dev",
        nextIcon: "arrowpoint.svg",
        nextIconStyle: "hidden group-hover:block",
      },

      {
        title: "Faucet",
        subtitle: "Use our faucet to get Aurora ETH.",
        icon: "faucet.svg",
        url: "https://aurora.dev/faucet",
        nextIcon: "arrowpoint.svg",
        nextIconStyle: "hidden group-hover:block",
      },

      {
        title: "Testnet Bridge",
        subtitle: "Move tokens between Aurora & Ethereum testnets.",
        icon: "tesnet.svg",
        url: "https://testnet.rainbowbridge.app",
        nextIcon: "arrowpoint.svg",
        nextIconStyle: "hidden group-hover:block",
      },
      {
        title: "Documentation",
        subtitle: "Start developing on Aurora.",
        icon: "discord.svg",
        url: "/https://discord.gg/dEFJBz8HQV",
        nextIcon: "arrowpoint.svg",
        nextIconStyle: "hidden group-hover:block",
      },
      {
        title: "Audits",
        subtitle: "Audit reports of our smart contracts.",
        icon: "audits.svg",
        url: "https://aurora.dev/audits",
        nextIcon: "arrowpoint.svg",
        nextIconStyle: "hidden group-hover:block",
      },
      {
        title: "Aurora Discord",
        subtitle: "Chat with us and get support.",
        icon: "discord.svg",
        url: "https://discord.gg/dEFJBz8HQV",
        nextIcon: "arrowpoint.svg",
        nextIconStyle: "hidden group-hover:block",
      },
    ],
    btnButton: [
      [
        {
          title: "GitHub",
          icon: "github.svg",
          url: "https://github.com/aurora-is-near",
        },
        {
          title: "Twitter",
          icon: "twitter.svg",
          url: "https://twitter.com/auroraisnear",
        },
      ],
      [
        {
          title: "Bug Bounty Program",
          icon: "bugbounty.svg",
          url: "https://immunefi.com/bounty/aurora",
        },
      ],
    ],
  },
  {
    type: "list",
    title: "Support",
    navBarItemList: [
      {
        title: "Get Help",
        icon: "help.svg",
        url: "https://aurora.dev/help",
      },
      {
        title: "Knowledge Base",
        icon: "knowledgebase.svg",
        url: "https://help.aurora.dev/",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
      {
        title: "Telegram",
        icon: "telegram.svg",
        url: "https://t.me/AuroraSupport_bot",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
      {
        title: "Discord",
        icon: "discord.svg",
        url: "https://discord.gg/dEFJBz8HQV",
        nextIcon: "diagonalarrow.svg",
        nextIconStyle:
          "-rotate-45 opacity-30 group-hover:opacity-100",
      },
    ],
    btnButton: [
      [
        {
          title: "Contact",
          icon: "chat.svg",
        },
      ],
    ],
  },
  {
    type: "url",
    title: "Blog",
    url: "https://aurora.dev/blog",
  },
];
