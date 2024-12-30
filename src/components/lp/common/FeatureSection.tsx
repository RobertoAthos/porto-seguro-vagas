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

	const flexRow = isCompanySection ? "flex-row" : "flex-row-reverse";
	return (
		<div
			className={`flex gap-x-12 ${flexRow} justify-between space-y-8 md:space-y-0`}
		>
			<div className="w-2/3 space-y-12">
				<h3 className="text-3xl font-bold text-secondary">{title}</h3>
				<p>{description}</p>
				<div className="w-full h-0.5 bg-slate-200" />
				<PrimaryButton
					size="lg"
					text={callToActionTxt}
					onClick={handleGoToForm}
				/>
			</div>

			<picture>
				<Image
					src={featureImg}
					alt={title}
					width={400}
					height={400}
					className="w-auto h-auto object-cover rounded-lg"
				/>
			</picture>
		</div>
	);
}
