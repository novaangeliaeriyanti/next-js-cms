import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import { useRouter } from 'next/router'
import AppSettingEntityUpdate from '@/features/app-setting/entity/ui/update';
function AppSettingEntityPage() {
  
  return (
    <LayoutContainer>
        <AppSettingEntityUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(AppSettingEntityPage);
