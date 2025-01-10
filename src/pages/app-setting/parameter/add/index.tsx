import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingParameterAdd from '@/features/app-setting/parameter/ui/add';

function AppSettingParameterPage() {

  return (
    <LayoutContainer>
        <AppSettingParameterAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(AppSettingParameterPage);
