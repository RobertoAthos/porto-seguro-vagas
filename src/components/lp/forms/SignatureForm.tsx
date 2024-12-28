import PrimaryButton from "@/components/common/PrimaryButton";
import React from "react";

export default function SignatureForm() {
	return (
		<div className="w-full space-y-8 max-w-4xl m-auto py-16">
			<h4 className="text-3xl text-secondary font-semibold text-center">
				Inscreva-se e seja avisado quando lançarmos oficialmente
			</h4>
			<form>
				<div className="flex flex-col space-y-4">
					<input
						type="text"
						placeholder="Seu nome"
						className="w-full p-4 border border-slate-200 rounded-lg"
						required
					/>
					<input
						type="tel"
						placeholder="Seu telefone (DDD) 9 XXXX-XXXX"
						className="w-full p-4 border border-slate-200 rounded-lg"
						required
					/>
					<select className="w-full p-4 border border-slate-200 rounded-lg">
						<option value="0">Selecione a região que você mora</option>
						<option value="1">Porto Seguro</option>
						<option value="2">Arraial D´Ajuda</option>
						<option value="3">Trancoso</option>
						<option value="4">Outra</option>
					</select>
					<PrimaryButton size="lg" text="Inscrever-se" type="submit" />
				</div>
			</form>
		</div>
	);
}
