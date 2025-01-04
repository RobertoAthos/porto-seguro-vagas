export default function PrimaryButton({
	size,
	text,
	isLoading: { state: isLoading, text: loadingText } = {
		state: false,
		text: "",
	},
	...rest
}: {
	text: string;
	size: "md" | "lg";
	isLoading?: {
		state: boolean;
		text: string;
	};
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const sizeClasses = {
		md: "py-1 px-4 text-lg",
		lg: "py-2 px-8 text-xl",
	};
	return (
		<button
			type="button"
			disabled={isLoading}
			{...rest}
			className={`bg-primary text-sm md:text-base rounded-full text-white font-medium hover:underline ${sizeClasses[size]}`}
		>
			{isLoading ? loadingText : text}
		</button>
	);
}
