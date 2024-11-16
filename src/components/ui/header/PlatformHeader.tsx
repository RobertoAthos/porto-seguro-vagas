import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";
import { menuOptions, navOptions } from "./nav-optios";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useUser } from "@/context/userContext";

export default function PlatformHeader({
  isOpen,
  setIsOpen,
  router,
  dropdownRef,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  router: AppRouterInstance;
  dropdownRef: React.RefObject<HTMLDivElement>;
}) {
  const { user } = useUser();
  return (
    <div className="px-4 max-w-screen-xl m-auto">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-palette-charcoal">
              Porto Seguro Vagas
            </span>
            <span className="text-xs">
              Encontre vagas de emprego na terra Mãe do Brasil
            </span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <ul className="flex gap-x-12">
            {navOptions.platform.map((option) => (
              <button
                type="button"
                onClick={() => router.push(option.href)}
                key={option.href}
              >
                <li className="hover:underline">{option.label}</li>
              </button>
            ))}
          </ul>
        </nav>

        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center gap-x-3">
            <span>{user?.user_metadata.full_name || user?.email}</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <Image
                src={user?.user_metadata.avatar_url}
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full border-2 border-palette-lime"
              />
              <ChevronDown className="w-4 h-4 text-palette-mint" />
            </button>
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              {menuOptions.map((option) => (
                <button
                  type="button"
                  onClick={() => router.push(option.href)}
                  className="w-full"
                  key={option.href}
                >
                  <a className="w-full flex items-center px-4 py-2 text-sm hover:bg-palette-ivory">
                    <option.icon className="w-4 h-4 mr-2" />
                    {option.label}
                  </a>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
