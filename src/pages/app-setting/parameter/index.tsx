import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import ParameterList from '@/features/app-setting/parameter/ui/list';
function ParameterPage() {
  return (
    <LayoutContainer>
      <ParameterList />
    </LayoutContainer>

  );
}

export default withPrivateRoute(ParameterPage);
