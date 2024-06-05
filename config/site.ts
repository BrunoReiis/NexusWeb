export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NexusFT Web",
  nameNormal: 'NexusFt',
  description: "A Website for Nexus",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/sobre",
    },
    {
      label: "Equipe",
      href: "/equipe",
    },
    {
      label: "Login",
      href: "/login",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/sobre",
    },
    {
      label: "Login",
      href: "/login",
    },
  ],
  links: {
    github: "https://github.com/brunoreiis",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/J2VNMcPakP",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
