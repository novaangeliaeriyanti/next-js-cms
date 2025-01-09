import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import { Dashboard } from '@/features/dashboard/ui/dashboard';
import LayoutContainer from '@/components/layout/layoutContainer';

function DashboardPage() {
  return (
    <LayoutContainer>
      <Dashboard />
    </LayoutContainer>

  );
}

export default withPrivateRoute(DashboardPage);
