import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingUserAdd from '@/features/app-setting/user/ui/add';

function AppSettingUserPage() {

  return (
    <LayoutContainer>
        <AppSettingUserAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(AppSettingUserPage);
