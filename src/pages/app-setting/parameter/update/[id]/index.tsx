import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import { useRouter } from 'next/router'
import AppSettingParameterUpdate from '@/features/app-setting/parameter/ui/update';

function AppSettingParemeterPage() {
  
  return (
    <LayoutContainer>
        <AppSettingParameterUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(AppSettingParemeterPage);
