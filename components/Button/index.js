import { colors, fontSize } from '../../styles/theme';

export const Button = () => {
	const onClick = () => {
		console.log('Este botón no hace nada');
	};
	return (
		<>
			<button onClick={onClick}></button>
			<style jsx>{`
        button {
          background: ${colors.lightOrange};
          border: 0;
          color: ${colors.pinkHoum}
          border-radius: 999px;
          font-size: ${fontSize.f15}
          font-weight: 800;
          padding: 8px 24px;
          cursor: pointer;
          transition: opacity .3s ease;
        }
        button:hover {
          opacity: .7;
        }
      `}</style>
		</>
	);
};
