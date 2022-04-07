import { createTheme } from '@nextui-org/react';

export const lightTheme = createTheme({
	type: 'light',
	theme: {
		colors: {
			// generic colors
			white: '#ffffff',
			black: '#212121',
			//semantic colors
			blue100: '#f67c40',
			blue900: '#f67c40',

			// brand colors
			primaryLight: '#FCDBD7',
			primary: '#f67c40',
			primaryDark: '#ff452b',
			primaryShadow: '#263238', //black button

			secondaryLight: '#f67c40',
			secondary: '#f67c40',
			secondaryDark: '#FCDBD7',
			secondaryShadow: '#FCDBD7',

			successLight: '#f67c40',
			success: '#f67c40',
			successDark: '#f67c40',
			successShadow: '#f67c40',

			warningLight: '#f67c40',
			warning: '#f67c40',
			warningDark: '#f67c40',
			warningShadow: '#f67c40',

			errorLight: '#f67c40',
			error: '#f67c40',
			errorDark: '#f67c40',
			errorShadow: '#f67c40 ',
		},
	},
});
