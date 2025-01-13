import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import { useRouter } from 'next/router'
import AppSettingClientAppVersionUpdate from '@/features/app-setting/client-app-version/ui/update';
function AppSettingClientAppVersionPage() {
  
  return (
    <LayoutContainer>
        <AppSettingClientAppVersionUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(AppSettingClientAppVersionPage);
