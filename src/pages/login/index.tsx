import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import Login from '@/features/login/ui/login';
function LoginPage() {
  return <Login />;
}

export default withPrivateRoute(LoginPage);
