export const Button = () => {
	const onClick = () => {
		console.log('Este botón no hace nada');
	};
	return (
		<>
			<button onClick={onClick}></button>
		</>
	);
};
