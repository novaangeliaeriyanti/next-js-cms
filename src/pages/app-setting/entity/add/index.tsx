import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingEntityAdd from '@/features/app-setting/entity/ui/add';

function AppSettingEntityPage() {

  return (
    <LayoutContainer>
        <AppSettingEntityAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(AppSettingEntityPage);
