import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingUserAdd from '@/features/app-setting/user/ui/add';
import MasterDataCompanyAdd from '@/features/master-data/company/ui/add';

function MasterDataCompanyPage() {

  return (
    <LayoutContainer>
        <MasterDataCompanyAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(MasterDataCompanyPage);
