import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import EntityList from '@/features/app-setting/entity/ui/list';
function EntityPage() {
  return (
    <LayoutContainer>
      <EntityList />
    </LayoutContainer>

  );
}

export default withPrivateRoute(EntityPage);
