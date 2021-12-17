import Header from './Header';

export default function Page({ children, name }) {
	return (
		<>
			<Header page={name} />
			{children}
		</>
	);
}
