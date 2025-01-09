import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingAccessAdd from '@/features/app-setting/access/ui/add';

function AppSettingAccessPage() {

  return (
    <LayoutContainer>
        <AppSettingAccessAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(AppSettingAccessPage);
