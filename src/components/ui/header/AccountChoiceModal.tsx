"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function AccountChoiceModal({
  isOpen,
  onClose,
  title,
  description,
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-palette-dark bg-opacity-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <Card
        className={cn(
          "max-w-2xl w-full transform transition-all duration-300 bg-white p-8",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{title}</CardTitle>
            <button
              onClick={onClose}
              className="text-palette-charcoal hover:text-palette-lime transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-y-4 justify-around text-base">
          <button
            onClick={() => router.push("/cadastro?type=company")}
            className="rounded-md border-2 border-palette-dark text-palette-dark font-medium py-2 px-4 w-full hover:underline"
          >
            Sou empresário e quero contratar
          </button>
          <button
            onClick={() => router.push("/cadastro")}
            className="rounded-md border-2 border-palette-dark text-palette-dark font-medium py-2 px-4 w-full hover:underline"
          >
            Procuro emprego
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
