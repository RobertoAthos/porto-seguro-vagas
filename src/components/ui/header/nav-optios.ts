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

export const navOptions = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Vagas",
    href: "/vagas",
  },
  {
    label: "Procurar Serviços",
    href: "/servicos-marketplace",
  },
];
