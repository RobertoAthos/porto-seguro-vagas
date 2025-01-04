import PrimaryButton from "@/components/common/PrimaryButton";
import Image from "next/image";
import React from "react";

export default function FeatureSection({
	callToActionTxt,
	description,
	title,
	isCompanySection = false,
	featureImg,
	setTab,
	scrollToSection,
}: {
	title: string;
	description: string;
	callToActionTxt: string;
	isCompanySection?: boolean;
	featureImg: string;
	setTab: (tab: string) => void;
	scrollToSection: (sectionId: string) => void;
}) {
	const handleGoToForm = () => {
		setTab(isCompanySection ? "employer" : "employee");
		scrollToSection("form");
	};

	return (
		<div
			className={`flex flex-col md:${
				isCompanySection ? "flex-row" : "flex-row-reverse"
			} justify-between items-center md:items-stretch gap-6 md:gap-12`}
		>
			<div className="w-full md:w-2/3 space-y-6 md:space-y-12">
				<h3 className="text-2xl md:text-3xl font-bold text-secondary text-left">
					{title}
				</h3>
				<p className="text-base md:text-lg text-left">{description}</p>
				<div className="w-full h-0.5 bg-slate-200" />
				<div className="flex justify-center md:justify-start">
					<PrimaryButton
						size="lg"
						text={callToActionTxt}
						onClick={handleGoToForm}
					/>
				</div>
			</div>

			<picture>
				<Image
					src={featureImg}
					alt={title}
					width={400}
					height={400}
					className="w-full max-w-full h-auto object-cover rounded-lg"
					priority
				/>
			</picture>
		</div>
	);
}
