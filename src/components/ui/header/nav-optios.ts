import { User, Settings, LogOut } from "lucide-react";

export const menuOptions = [
  {
    label: "Meu Perfil",
    icon: User,
    href: "/perfil",
  },
  {
    label: "Configurações",
    icon: Settings,
    href: "/configuracoes",
  },
  {
    label: "Sair",
    icon: LogOut,
  },
];

export const navOptions = {
  lp: [
    {
      label: "Vagas",
      href: "/vagas",
    },
    {
      label: "Empresas",
      href: "/",
    },
    {
      label: "Marketplace de serviços",
      href: "/servicos-marketplace",
    },
    {
      label: "Sobre",
    },
  ],
  platform: [
    {
      label: "Início",
      href: "/ps/feed",
    },
    {
      label: "Vagas",
      href: "/vagas",
    },
    {
      label: "Serviços",
      href: "/servicos-marketplace",
    },
  ],
};

export const loggedActions = {
  standardUser: [
    {
      label: "Vagas aplicadas",
      href: "/vagas-aplicadas",
    },
    {
      label: "Serviços cadastrados",
      href: "/meus-servicos",
    },
  ],
  companyUser: [
    {
      label: "Vagas cadastradas",
      href: "/vagas-cadastradas",
    },
    {
      label: "Serviços cadastrados",
      href: "/meus-servicos",
    },
  ],
};
