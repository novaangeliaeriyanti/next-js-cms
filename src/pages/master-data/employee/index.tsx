import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import EmployeeList from '@/features/master-data/employee/ui/list';
function EmployeePage() {
  return (
    <LayoutContainer>
      <EmployeeList />
    </LayoutContainer>

  );
}

export default withPrivateRoute(EmployeePage);
