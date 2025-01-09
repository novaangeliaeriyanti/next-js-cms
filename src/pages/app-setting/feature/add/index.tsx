import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingFeatureAdd from '@/features/app-setting/feature/ui/add';

function AppSettingFeaturePage() {

  return (
    <LayoutContainer>
        <AppSettingFeatureAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(AppSettingFeaturePage);
