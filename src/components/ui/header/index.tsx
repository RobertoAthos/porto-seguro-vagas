"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useUser } from "@/context/userContext";
import { menuOptions, navOptions } from "./nav-optios";
import { usePathname, useRouter } from "next/navigation";
import AccountChoiceModal from "./AccountChoiceModal";

export default function Header() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [accountChoiceModal, setAccountChoiceModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathName = usePathname();

  const displayHeader = !["/cadastro", "/login"].includes(pathName);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    displayHeader && (
      <header className="px-4 border-b bg-white">
        <AccountChoiceModal
          isOpen={accountChoiceModal}
          onClose={() => setAccountChoiceModal(false)}
          title="Escolha um tipo de conta"
          description="Você deseja se cadastrar como candidato ou empresa?"
        />
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-palette-charcoal">
                Porto Seguro Vagas
              </span>
              <span className="text-sm">
                Encontre vagas de emprego na terra Mãe do Brasil
              </span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <ul className="flex gap-x-12">
              {navOptions.map((option) => (
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
            {user ? (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-palette-lime"
                />
                <ChevronDown className="w-4 h-4 text-palette-mint" />
              </button>
            ) : (
              <div className="flex gap-x-4">
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="border border-palette-charcoal text-palette-charcoal font-semibold text-base py-2 px-8 rounded-md hover:underline"
                >
                  Entrar
                </button>
                <button
                  type="button"
                  onClick={() => setAccountChoiceModal(true)}
                  className="bg-palette-lime text-palette-charcoal font-semibold rounded-md py-2 px-8 hover:underline"
                >
                  Fazer cadastro
                </button>
              </div>
            )}

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
      </header>
    )
  );
}
