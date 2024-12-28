export default function PrimaryButton({
	size,
	text,
	...rest
}: {
	text: string;
	size: "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const sizeClasses = {
		md: "py-1 px-4 text-lg",
		lg: "py-2 px-8 text-xl",
	};
	return (
		<button
			type="button"
			{...rest}
			className={`bg-primary rounded-full text-white font-medium hover:underline ${sizeClasses[size]}`}
		>
			{text}
		</button>
	);
}
