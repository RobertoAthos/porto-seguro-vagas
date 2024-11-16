"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import LpHeader from "./LpHeader";
import PlatformHeader, { PlatformMenu } from "./PlatformHeader";

export default function Header() {
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

  if (!displayHeader) return null;

  if (pathName === "/") {
    return (
      <header className="w-full bg-white border-b">
        <LpHeader
          router={router}
          setAccountChoiceModal={setAccountChoiceModal}
          accountChoiceModal={accountChoiceModal}
        />
      </header>
    );
  }

  if (displayHeader) {
    return (
      <header className="w-full bg-white border-b">
        <PlatformHeader
          dropdownRef={dropdownRef}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          router={router}
        />
        <PlatformMenu router={router}/>
      </header>
    );
  }
}
