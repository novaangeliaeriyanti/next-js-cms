import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import { useRouter } from 'next/router'
import MasterDataEmployeeUpdate from '@/features/master-data/employee/ui/update';

function MasterDataEmployeeItemPage() {
  
  return (
    <LayoutContainer>
        <MasterDataEmployeeUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(MasterDataEmployeeItemPage);
