"use client";
import PrimaryButton from "@/components/common/PrimaryButton";
import AnimationReveal from "@/components/lp/AnimationReveal";
import FeatureSection from "@/components/lp/common/FeatureSection";
import SignatureForm from "@/components/lp/forms/SignatureForm";
import Header from "@/components/lp/NavBar";
import useScrollToView from "@/hooks/useScrollToView";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Clarity from "@microsoft/clarity";

export default function Home() {
	const { scrollToSection } = useScrollToView();
	const [formTab, setFormTab] = useState("employee");
	const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_ID;
	const ENV = process.env.NODE_ENV;

	useEffect(() => {
		if (clarityProjectId && ENV === "production") {
			Clarity.init(clarityProjectId);
		} else {
			console.log("dev mode");
		}
	}, [clarityProjectId, ENV]);

	return (
		<main className="bg-slate-50">
			<Header />
			<section
				id="hero"
				className="w-full bg-white md:rounded-b-3xl md:shadow max-w-screen-xl m-auto flex flex-col lg:flex-row justify-center md:justify-between"
			>
				<AnimationReveal className="w-full lg:w-2/3 px-8 mt-12 lg:mt-32">
					<div className="space-y-8 md:space-y-12 ">
						<h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-secondary md:leading-[60px]">
							Vagas de emprego em Porto Seguro, Arraial D´Ajuda e Trancoso
							Conecte-se às Melhores Oportunidades da Região!
						</h1>
						<p className="w-full max-w-2xl text-secondary font-medium text-sm md:text-base">
							Crie vagas ou encontre oportunidades de emprego e serviços
							temporários, tudo em um só lugar!
						</p>
						<PrimaryButton
							size="lg"
							text="Entrar na lista de espera"
							onClick={() => scrollToSection("form")}
						/>
					</div>
				</AnimationReveal>
				<AnimationReveal>
					<Image
						src={"/hero.jpg"}
						alt={"Trabalhadores em Porto Seguro"}
						width={300}
						height={300}
						className="w-auto h-auto object-cover p-8 mt-12 lg:mt-0 md:p-0"
						priority
					/>
				</AnimationReveal>
			</section>

			<section id="about" className="w-full max-w-screen-xl m-auto px-8 py-16">
				<AnimationReveal>
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
						<PrimaryButton
							size="lg"
							text="Seja avisado assim que lançarmos."
							onClick={() => scrollToSection("form")}
						/>
					</div>
				</AnimationReveal>
			</section>

			<section id="vagas" className="w-full max-w-screen-xl m-auto px-8 py-16">
				<AnimationReveal>
					<FeatureSection
						title="Seu Próximo Trabalho ou Serviço Temporário Está Aqui"
						description="Explore uma variedade de vagas e oportunidades de serviços temporários em toda a região de Porto Seguro. Nossa plataforma conecta você às empresas que mais precisam das suas habilidades."
						callToActionTxt="Quero encontrar vagas"
						featureImg="/vagas-img.png"
						isCompanySection={false}
						scrollToSection={scrollToSection}
						setTab={setFormTab}
						className="flex flex-col md:flex-row-reverse"
					/>
				</AnimationReveal>
			</section>
			<section
				id="empresas"
				className="w-full max-w-screen-xl m-auto px-8 py-16"
			>
				<AnimationReveal>
					<FeatureSection
						title="Encontre os Profissionais Certos, Quando Precisar"
						description="Sabemos que o sucesso da sua empresa depende das pessoas certas. Nossa plataforma foi criada para facilitar a busca por talentos qualificados em Porto Seguro. Oferecemos ferramentas avançadas que simplificam o processo de recrutamento, ajudando você a construir equipes fortes e alinhadas aos seus objetivos."
						callToActionTxt="Cadastre sua empresa antecipadamente"
						featureImg="/empresas.png"
						isCompanySection={true}
						scrollToSection={scrollToSection}
						setTab={setFormTab}
						className="flex flex-col md:flex-row"
					/>
				</AnimationReveal>
			</section>

			<section
				id="social_media"
				className="w-full bg-white rounded-3xl shadow-sm max-w-screen-xl m-auto px-8 py-16"
			>
				<AnimationReveal>
					<h3 className="text-center text-secondary font-semibold text-3xl">
						Acompanhe o desenvolvimento em nossas redes sociais
					</h3>
					<div className="w-full flex justify-center space-x-4 mt-8">
						<Link
							href={"https://www.instagram.com/portosegurovagas_oficial/"}
							target="_blank"
						>
							<Instagram className="h-12 w-12 hover:text-primary cursor-pointer" />
						</Link>
						<Link
							href={"https://www.facebook.com/profile.php?id=61571921515785"}
							target="_blank"
						>
							<Facebook className="h-12 w-12 hover:text-primary cursor-pointer" />
						</Link>
					</div>
				</AnimationReveal>
			</section>

			<section id="form" className="w-full max-w-screen-xl m-auto px-8 py-16">
				<AnimationReveal>
					<SignatureForm tab={formTab} setTab={setFormTab} />
				</AnimationReveal>
			</section>
		</main>
	);
}
