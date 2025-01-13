import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import { useRouter } from 'next/router'
import AppSettingParameterItemUpdate from '@/features/app-setting/parameter-item/ui/update';

function AppSettingParemeterItemPage() {
  
  return (
    <LayoutContainer>
        <AppSettingParameterItemUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(AppSettingParemeterItemPage);
