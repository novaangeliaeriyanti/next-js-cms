import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import { useRouter } from 'next/router'
import AppSettingFeatureUpdate from '@/features/app-setting/feature/ui/update';
function AppSettingFeaturePage() {
  
  return (
    <LayoutContainer>
        <AppSettingFeatureUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(AppSettingFeaturePage);
