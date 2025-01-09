import { AUTH_ROUTES } from '../constants/path';

export const checkIsAuthRoute = (currentRoute: string): boolean => {
	return Boolean(
		AUTH_ROUTES.includes(currentRoute)
	);
};
 