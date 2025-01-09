import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import ParameterItemList from '@/features/app-setting/parameter-item/ui/list';
function ParameterItemPage() {
  return (
    <LayoutContainer>
      <ParameterItemList />
    </LayoutContainer>

  );
}

export default withPrivateRoute(ParameterItemPage);
