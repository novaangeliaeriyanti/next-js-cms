import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingUserAdd from '@/features/app-setting/user/ui/add';
import MasterDataEmployeeAdd from '@/features/master-data/employee/ui/add';

function MasterDataEmployeePage() {

  return (
    <LayoutContainer>
        <MasterDataEmployeeAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(MasterDataEmployeePage);
