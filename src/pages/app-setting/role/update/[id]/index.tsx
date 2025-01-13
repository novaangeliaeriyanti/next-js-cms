import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import { useRouter } from 'next/router'
import AppSettingRoleUpdate from '@/features/app-setting/role/ui/update';

function AppSettingRolePage() {
  
  return (
    <LayoutContainer>
        <AppSettingRoleUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(AppSettingRolePage);
