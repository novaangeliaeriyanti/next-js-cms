import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import CompanyList from '@/features/master-data/company/ui/list';
function CompanyPage() {
  return (
    <LayoutContainer>
      <CompanyList />
    </LayoutContainer>

  );
}

export default withPrivateRoute(CompanyPage);
