import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import { useRouter } from 'next/router'
import AppSettingUserUpdate from '@/features/app-setting/user/ui/update';

function AppSettingUserItemPage() {
  
  return (
    <LayoutContainer>
        <AppSettingUserUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(AppSettingUserItemPage);
