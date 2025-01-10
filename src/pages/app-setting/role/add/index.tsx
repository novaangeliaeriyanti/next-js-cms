import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingRoleAdd from '@/features/app-setting/role/ui/add';

function AppSettingRolePage() {

  return (
    <LayoutContainer>
        <AppSettingRoleAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(AppSettingRolePage);
