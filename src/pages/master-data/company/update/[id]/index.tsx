import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import { useRouter } from 'next/router'
import AppSettingUserUpdate from '@/features/app-setting/user/ui/update';
import MasterDataCompanyUpdate from '@/features/master-data/company/ui/update';

function MasterDataCompanyItemPage() {
  
  return (
    <LayoutContainer>
        <MasterDataCompanyUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(MasterDataCompanyItemPage);
