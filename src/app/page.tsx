"use client";
import PrimaryButton from "@/components/common/PrimaryButton";
import FeatureSection from "@/components/lp/common/FeatureSection";
import SignatureForm from "@/components/lp/forms/SignatureForm";
import Header from "@/components/lp/NavBar";

export default function Home() {
	return (
		<main className="bg-slate-50">
			<section
				id="hero"
				className="w-full flex-col text-center h-[75vh] bg-hero-bg bg-cover bg-center"
			>
				<Header />
				<div className="w-full max-w-screen-xl m-auto px-8 space-y-12 mt-24">
					<h1 className="text-4xl font-semibold text-white leading-[60px]">
						Vagas de emprego em Porto Seguro, Arraial D´Ajuda e Trancoso
						Conecte-se às Melhores Oportunidades da Região!
					</h1>
					<p className="text-white font-medium text-base">
						Criar vagas de empregos ou serviços temporários e candidatar-se ás
						oportunidades tudo em um único lugar!
					</p>
					<PrimaryButton size="lg" text="Entrar na lista de espera" />
				</div>
			</section>

			<section id="about" className="w-full max-w-screen-xl m-auto px-8 py-16">
				<h2 className="text-3xl text-center text-secondary font-semibold">
					Sobre nós
				</h2>
				<div className="w-full max-w-4xl m-auto mt-8 space-y-8">
					<div className="space-y-4">
						<p>
							Somos a plataforma que transforma a maneira como empresas e
							candidatos se encontram em Porto Seguro e regiões próximas{" "}
							<strong>(Trancoso, Arraial D´ajuda, etc)</strong>.
						</p>
						<p>
							{" "}
							Nosso objetivo é fortalecer o mercado local, promovendo conexões
							que geram crescimento e sucesso para todos.{" "}
						</p>
						<p>
							<strong>Ainda estamos em desenvolvimento</strong>, mas em breve
							você terá acesso a uma ferramenta prática e eficiente para
							encontrar empregos ou contratar profissionais locais.
						</p>
					</div>
					<PrimaryButton size="lg" text="Seja avisado assim que lançarmos." />
				</div>
			</section>

			<section id="vagas" className="w-full max-w-screen-xl m-auto px-8 py-16">
				<FeatureSection
					title="Seu Próximo Trabalho ou Serviço Temporário Está Aqui"
					description="Explore uma variedade de vagas e oportunidades de serviços temporários em toda a região de Porto Seguro. Nossa plataforma conecta você às empresas que mais precisam das suas habilidades."
					callToActionTxt="Quero encontrar vagas"
					featureImg="/vagas-img.png"
				/>
			</section>
			<section
				id="empresas"
				className="w-full max-w-screen-xl m-auto px-8 py-16"
			>
				<FeatureSection
					title="Encontre os Profissionais Certos, Quando Precisar"
					description="Sabemos que o sucesso da sua empresa depende das pessoas certas. Nossa plataforma foi criada para facilitar a busca por talentos qualificados em Porto Seguro. Oferecemos ferramentas avançadas que simplificam o processo de recrutamento, ajudando você a construir equipes fortes e alinhadas aos seus objetivos."
					callToActionTxt="Cadastre sua empresa antecipadamente"
					featureImg="/empresas.png"
					isCompanySection={true}
				/>
			</section>

			<section id="form" className="w-full max-w-screen-xl m-auto px-8 py-16">
				<SignatureForm />
			</section>
		</main>
	);
}
