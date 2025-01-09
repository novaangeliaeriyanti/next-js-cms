import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import FeatureList from '@/features/app-setting/feature/ui/list';
function FeaturePage() {
  return (
    <LayoutContainer>
      <FeatureList />
    </LayoutContainer>

  );
}

export default withPrivateRoute(FeaturePage);
