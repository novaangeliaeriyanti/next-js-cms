import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import RoleList from '@/features/app-setting/role/ui/list';
function RolePage() {
  return (
    <LayoutContainer>
      <RoleList />
    </LayoutContainer>

  );
}

export default withPrivateRoute(RolePage);
