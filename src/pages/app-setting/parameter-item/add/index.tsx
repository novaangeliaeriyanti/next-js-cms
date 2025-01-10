import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingParameterItemAdd from '@/features/app-setting/parameter-item/ui/add';

function AppSettingParameterItemPage() {

  return (
    <LayoutContainer>
        <AppSettingParameterItemAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(AppSettingParameterItemPage);
