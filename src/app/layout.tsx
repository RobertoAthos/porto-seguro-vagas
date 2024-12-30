import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/lp/Footer";
import { seoKeywords } from "@/helpers/seoKeywords";

export const metadata: Metadata = {
	title:
		"Porto Seguro Vagas - Encontre vagas de emprego em Porto Seguro e região",
	description:
		"Vagas de emprego em Porto Seguro, Arraial D´Ajuda e Trancoso. Conecte-se às Melhores Oportunidades da Região!",
	keywords: seoKeywords,
	openGraph: {
		title:
			"Porto Seguro Vagas - Encontre vagas de emprego em Porto Seguro e região",
		description:
			"Vagas de emprego em Porto Seguro, Arraial D´Ajuda e Trancoso. Conecte-se às Melhores Oportunidades da Região!",
		type: "website",
		locale: "pt_BR",
		url: "https://portosegurovagas.com",
		siteName: "Porto Seguro Vagas",
		images: [
			{
				url: "https://portosegurovagas.com/og-image.png",
				width: 1200,
				height: 630,
				alt: "Vagas de emprego em Porto Seguro",
			},
		],
	},
	metadataBase: new URL("https://portosegurovagas.com/"),
	twitter: {
		card: "summary_large_image",
	},
};

const dmsans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={`${dmsans.className} antialiased`}>
				<Toaster />
				{children}
				<Footer />
			</body>
		</html>
	);
}
