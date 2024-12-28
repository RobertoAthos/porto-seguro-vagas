import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full py-6 bg-white">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
					<div className="flex flex-col items-start">
						<Link href="/" className="text-xl font-semibold text-indigo-900">
							PortoSeguroVagas
						</Link>
						<span className="text-sm text-gray-500">
							© 2024 Todos os direitos reservados.
						</span>
					</div>

					<nav className="flex items-center space-x-8">
						<Link
							href="/portfolio"
							className="text-gray-600 hover:text-gray-900"
						>
							Sobre
						</Link>
						<Link
							href="/how-it-works"
							className="text-gray-600 hover:text-gray-900"
						>
							Empresas
						</Link>
						<Link href="/pricing" className="text-gray-600 hover:text-gray-900">
							Vagas e serviços
						</Link>
					</nav>

					<div className="flex items-center space-x-4">
						<Link
							href="https://twitter.com"
							className="text-gray-400 hover:text-gray-600"
							aria-label="Twitter"
						>
							<Instagram className="h-5 w-5" />
						</Link>
						<Link
							href="https://facebook.com"
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
