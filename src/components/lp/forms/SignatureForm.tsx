import PrimaryButton from "@/components/common/PrimaryButton";
import { createClient } from "@/utils/supabase/client";
import type React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

type FormValues = {
	name: string;
	phone_number: string;
	region: string;
	company_reason: string;
};

export default function SignatureForm({
	setTab,
	tab,
}: {
	tab: string;
	setTab: (tab: string) => void;
}) {
	const [formValues, setFormValues] = useState<FormValues>({
		region: "Porto Seguro",
	} as FormValues);
	const [isLoading, setIsLoading] = useState(false);
	const supabase = createClient();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setIsLoading(true);
		e.preventDefault();
		const payload = {
			name: formValues.name,
			tel: formValues.phone_number,
			type: tab,
			located_at: formValues.region,
			company_activity: formValues.company_reason || "",
		};
		try {
			const response = await supabase.from("leads").insert([payload]);
			if (!response.error) {
				Swal.fire({
					title: "Obrigado! Seu formulário foi enviado com sucesso.",
					text: "Aguarde novidades do nosso lançamento",
					icon: "success",
					confirmButtonText: "Ok",
				});
			}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (e: any) {
			console.log(e.message);
			toast.error("Erro ao enviar formulário. Tente novamente.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-full space-y-8 max-w-4xl m-auto py-16">
			<h4 className="text-2xl md:text-3xl text-secondary font-semibold text-center">
				Inscreva-se e seja avisado quando lançarmos oficialmente
			</h4>
			<div className="w-full flex justify-evenly text-left space-x-8">
				<button
					type="button"
					className={`border text-base w-full py-1 px-2 rounded-full ${
						tab === "employee" ? "bg-primary text-white" : ""
					}`}
					onClick={() => setTab("employee")}
				>
					Quero encontrar vagas
				</button>
				<button
					type="button"
					className={`border text-base w-full py-1 px-2 rounded-full ${
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
							value={formValues.name}
							onChange={(e) =>
								setFormValues({ ...formValues, name: e.target.value })
							}
							className="w-full p-4 border border-slate-200 rounded-lg"
							required
						/>
						<input
							type="text"
							value={formValues.phone_number}
							placeholder="Seu telefone (DDD) 9XXXX-XXXX"
							onChange={(e) => {
								const rawValue = e.target.value.replace(/\D/g, "");
								const maskedValue = rawValue
									.replace(/^(\d{2})(\d)/g, "($1) $2") // Format DDD
									.replace(/(\d{5})(\d)/, "$1-$2") // Format first 5 digits and hyphen
									.replace(/(-\d{4})\d+?$/, "$1"); // Limit to 4 digits after hyphen
								setFormValues({ ...formValues, phone_number: maskedValue });
							}}
							className="w-full p-4 border border-slate-200 rounded-lg"
							required
						/>
						<label>Onde você reside atualmente?</label>
						<select
							onChange={(e) =>
								setFormValues({ ...formValues, region: e.target.value })
							}
							defaultValue={formValues.region}
							className="w-full p-4 border border-slate-200 rounded-lg"
						>
							<option value="Porto Seguro">Porto Seguro</option>
							<option value="Arraial D´Ajuda">Arraial D´Ajuda</option>
							<option value="Trancoso">Trancoso</option>
							<option value="Outro">Outro</option>
						</select>
						<PrimaryButton
							size="lg"
							text="Inscrever-se"
							type="submit"
							isLoading={{
								state: isLoading,
								text: "Enviando...",
							}}
						/>
					</div>
				) : (
					<div className="flex flex-col space-y-4">
						<input
							type="text"
							value={formValues.name}
							placeholder="Nome da empresa"
							onChange={(e) =>
								setFormValues({ ...formValues, name: e.target.value })
							}
							className="w-full p-4 border border-slate-200 rounded-lg"
							required
						/>
						<input
							type="text"
							value={formValues.phone_number}
							placeholder="Seu telefone (DDD) 9 XXXX-XXXX"
							onChange={(e) => {
								const rawValue = e.target.value.replace(/\D/g, "");
								const maskedValue = rawValue
									.replace(/^(\d{2})(\d)/g, "($1) $2") // Format DDD
									.replace(/(\d{5})(\d)/, "$1-$2") // Format first 5 digits and hyphen
									.replace(/(-\d{4})\d+?$/, "$1"); // Limit to 4 digits after hyphen
								setFormValues({ ...formValues, phone_number: maskedValue });
							}}
							className="w-full p-4 border border-slate-200 rounded-lg"
							required
						/>
						<input
							type="text"
							value={formValues.company_reason}
							placeholder="Ramo de atividade"
							onChange={(e) =>
								setFormValues({ ...formValues, company_reason: e.target.value })
							}
							className="w-full p-4 border border-slate-200 rounded-lg"
							required
						/>

						<PrimaryButton
							size="lg"
							text="Inscrever-se"
							type="submit"
							isLoading={{
								state: isLoading,
								text: "Enviando...",
							}}
						/>
					</div>
				)}
			</form>
		</div>
	);
}
