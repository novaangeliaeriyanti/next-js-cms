import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppsetttingAccessList from '@/features/app-setting/access/ui/list'

function AppSettingAccessPage() {

  return (
    <LayoutContainer>
        <AppsetttingAccessList />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(AppSettingAccessPage);
