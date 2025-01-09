import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingClientAppVersionAdd from '@/features/app-setting/client-app-version/ui/add';

function AppSettingClientAppVersionPage() {

  return (
    <LayoutContainer>
        <AppSettingClientAppVersionAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(AppSettingClientAppVersionPage);
