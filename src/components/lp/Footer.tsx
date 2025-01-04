"use client";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import useScrollToView from "@/hooks/useScrollToView";

export default function Footer() {
	const { scrollToSection } = useScrollToView();
	return (
		<footer className="w-full py-6 bg-white">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
					<div className="flex flex-col items-center md:items-start">
						<button
							type="button"
							onClick={() => scrollToSection("hero")}
							className="text-xl font-semibold text-indigo-900"
						>
							PortoSeguroVagas
						</button>
						<span className="text-sm text-gray-500">
							© 2025 Todos os direitos reservados.
						</span>
					</div>

					<nav className="flex items-center space-x-8">
						<li
							onClick={() => scrollToSection("about")}
							className="text-gray-600 hover:text-gray-900 list-none cursor-pointer hover:underline"
						>
							Sobre
						</li>
						<li
							onClick={() => scrollToSection("empresas")}
							className="text-gray-600 hover:text-gray-900 list-none cursor-pointer hover:underline"
						>
							Empresas
						</li>
						<li
							onClick={() => scrollToSection("vagas")}
							className="text-gray-600 hover:text-gray-900 list-none cursor-pointer hover:underline"
						>
							Vagas e serviços
						</li>
					</nav>

					<div className="flex items-center space-x-4">
						<Link
							href="https://twitter.com"
							target="_blank"
							className="text-gray-400 hover:text-gray-600"
							aria-label="Twitter"
						>
							<Instagram className="h-5 w-5" />
						</Link>
						<Link
							href="https://facebook.com"
							target="_blank"
							className="text-gray-400 hover:text-gray-600"
							aria-label="Facebook"
						>
							<Facebook className="h-5 w-5" />
						</Link>
					</div>
				</div>

				<div className="mt-6 text-center text-gray-500 text-sm">
					Criar vagas de empregos ou serviços temporários e candidatar-se às
					oportunidades tudo em um único lugar!
				</div>
			</div>
		</footer>
	);
}
