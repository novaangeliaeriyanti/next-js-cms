import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import UserList from '@/features/app-setting/user/ui/list';
function UserPage() {
  return (
    <LayoutContainer>
      <UserList />
    </LayoutContainer>

  );
}

export default withPrivateRoute(UserPage);
