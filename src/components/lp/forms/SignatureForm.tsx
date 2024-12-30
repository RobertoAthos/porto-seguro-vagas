import PrimaryButton from "@/components/common/PrimaryButton";
import type React from "react";
import { useState } from "react";

export default function SignatureForm({
	setTab,
	tab,
}: {
	tab: string;
	setTab: (tab: string) => void;
}) {
	const [formValues, setFormValues] = useState({});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formValues);
	};

	return (
		<div className="w-full space-y-8 max-w-4xl m-auto py-16">
			<h4 className="text-3xl text-secondary font-semibold text-center">
				Inscreva-se e seja avisado quando lançarmos oficialmente
			</h4>
			<div className="w-full flex justify-evenly text-left space-x-8">
				<button
					type="button"
					className={`border w-full py-1 px-2 rounded-full ${
						tab === "employee" ? "bg-primary text-white" : ""
					}`}
					onClick={() => setTab("employee")}
				>
					Quero achar vagas
				</button>
				<button
					type="button"
					className={`border w-full py-1 px-2 rounded-full ${
						tab === "employer" ? "bg-primary text-white" : ""
					}`}
					onClick={() => setTab("employer")}
				>
					Sou empresário
				</button>
			</div>
			<form onSubmit={handleSubmit}>
				{tab === "employee" ? (
					<div className="flex flex-col space-y-4">
						<input
							type="text"
							placeholder="Seu nome"
							onChange={(e) =>
								setFormValues({ ...formValues, full_name: e.target.value })
							}
							className="w-full p-4 border border-slate-200 rounded-lg"
							required
						/>
						<input
							type="tel"
							placeholder="Seu telefone (DDD) 9 XXXX-XXXX"
							onChange={(e) =>
								setFormValues({ ...formValues, phone_number: e.target.value })
							}
							className="w-full p-4 border border-slate-200 rounded-lg"
							required
						/>
						<select
							onChange={(e) =>
								setFormValues({ ...formValues, region: e.target.value })
							}
							className="w-full p-4 border border-slate-200 rounded-lg"
						>
							<option value="0">Selecione a região que você mora</option>
							<option value="1">Porto Seguro</option>
							<option value="2">Arraial D´Ajuda</option>
							<option value="3">Trancoso</option>
							<option value="4">Outra</option>
						</select>
						<PrimaryButton size="lg" text="Inscrever-se" type="submit" />
					</div>
				) : (
					<div className="flex flex-col space-y-4">
						<input
							type="text"
							placeholder="Nome da empresa"
							onChange={(e) =>
								setFormValues({ ...formValues, name: e.target.value })
							}
							className="w-full p-4 border border-slate-200 rounded-lg"
							required
						/>
						<input
							type="tel"
							placeholder="Seu telefone (DDD) 9 XXXX-XXXX"
							onChange={(e) =>
								setFormValues({ ...formValues, phone_number: e.target.value })
							}
							className="w-full p-4 border border-slate-200 rounded-lg"
							required
						/>
						<input
							type="text"
							placeholder="Ramo de atividade"
							onChange={(e) =>
								setFormValues({ ...formValues, company_reason: e.target.value })
							}
							className="w-full p-4 border border-slate-200 rounded-lg"
							required
						/>

						<PrimaryButton size="lg" text="Inscrever-se" type="submit" />
					</div>
				)}
			</form>
		</div>
	);
}
