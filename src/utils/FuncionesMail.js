export function Mailto({ email, subject, body, ...props }) {
	return (
		<a
			href={`mailto:${email}?subject=${subject || ''}&body=${
				encodeURIComponent(body) || ''
			}`}
		>
			{props.children}
		</a>
	);
}
