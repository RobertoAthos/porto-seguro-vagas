import PrimaryButton from "@/components/common/PrimaryButton";
import React from "react";

export default function DesktopNavBar() {
	return (
		<header className="w-full text-white py-16 px-8">
			<div className="w-full max-w-screen-xl m-auto flex items-center justify-between">
				<h1 className="text-3xl font-semibold">PortoSeguroVagas</h1>
				<nav>
					<ul className="inline-flex space-x-12">
						<li className="text-lg font-medium hover:underline cursor-pointer">
							Sobre
						</li>
						<li className="text-lg font-medium hover:underline cursor-pointer">
							para empresas
						</li>
						<li className="text-lg font-medium hover:underline cursor-pointer">
							vagas e serviços
						</li>
					</ul>
				</nav>
				<PrimaryButton size="md" text="Cadastre-se" />
			</div>
		</header>
	);
}
