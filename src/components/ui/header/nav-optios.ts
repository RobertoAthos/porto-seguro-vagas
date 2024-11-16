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
    href: "/",
  },
];

export const navOptions = {
  lp: [
    {
      label: "Início",
      href: "/",
    },
    {
      label: "Vagas",
      href: "/vagas",
    },
    {
      label: "Marketplace de serviços",
      href: "/servicos-marketplace",
    },
    {
      label: "Sobre",
      href: "/",
    },
  ],
  platform: [
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
