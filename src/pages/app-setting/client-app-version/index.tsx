import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import ClientAppVersionList from '@/features/app-setting/client-app-version/ui/list';
function DashboardPage() {

  return (
    <LayoutContainer>
      <ClientAppVersionList />
    </LayoutContainer>

  );
}

export default withPrivateRoute(DashboardPage);
