import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import  AppsetttingAccessUpdate from '@/features/app-setting/access/ui/update';
import { useRouter } from 'next/router'
function AppSettingAccessPage() {
  
  return (
    <LayoutContainer>
        <AppsetttingAccessUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(AppSettingAccessPage);
