import Image from "next/image";
import React from "react";
import { navOptions } from "./nav-optios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import AccountChoiceModal from "./AccountChoiceModal";

export default function LpHeader({
  router,
  setAccountChoiceModal,
  accountChoiceModal,
}: {
  router: AppRouterInstance;
  setAccountChoiceModal: React.Dispatch<React.SetStateAction<boolean>>;
  accountChoiceModal: boolean;
}) {
  return (
    <div className="px-4 max-w-screen-xl m-auto">
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
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <ul className="flex gap-x-12">
            {navOptions.lp.map((option) => (
              <button
                type="button"
                onClick={() => router.push(option.href || "/")}
                key={option.label}
              >
                <li className="hover:underline">{option.label}</li>
              </button>
            ))}
          </ul>
        </nav>

        <div className="relative">
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
        </div>
      </div>
    </div>
  );
}
