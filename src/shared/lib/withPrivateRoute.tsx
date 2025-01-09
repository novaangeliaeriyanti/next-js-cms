import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import  {Spinner}  from '@/components/ui/spinner';
import { checkIsAuthRoute } from '@/shared/lib/routes';
import type { User } from '@/shared/store/slices/createAuthSlice';
import useStore from '@/shared/store/useStore';

import {
  DASHBOARD,
  LOGIN,
} from '@/shared/constants/path';

/**
 *
 * @param WrappedComponent
 * @returns
 * Component with additonal props auth
 * and checking of authentication
 */
export default function withPrivateRoute(WrappedComponent: any) {
  const ComponentRoute = (props: any) => {
    const router = useRouter();
    const pathname = usePathname();
    const { user, isAuthenticated, isLoading, login, logout, stopLoading } =
      useStore((state) => state);
    const [isValidate, setIsValidate] = useState<boolean>(false)
    // Check authentication status
    const checkAuth = useCallback(async () => {
      if (user?.user) {
        if (isAuthenticated) logout();
      }
      stopLoading();
      return;

    }, [user, isAuthenticated, logout, stopLoading]);

    useEffect(() => {
      checkAuth();
    }, [checkAuth]);

    useEffect(() => {
      if (!isLoading) {
        if (!isAuthenticated && !checkIsAuthRoute(pathname)) {
          router.replace(LOGIN);
        } else if (isAuthenticated && checkIsAuthRoute(pathname)) {
          router.replace(DASHBOARD);
        } else {
          setIsValidate(true);
        }

      }
    }, [isAuthenticated, isLoading, pathname, router]);

    // Handle redirection based on auth state
    if (isLoading || !isValidate) {
      return (
        <div className='fixed inset-0 z-50 flex justify-center'>
          <Spinner  size="medium" />
        </div>
      );
    } else {
      return <WrappedComponent {...props} />;
    }

  };

  return ComponentRoute;
}
