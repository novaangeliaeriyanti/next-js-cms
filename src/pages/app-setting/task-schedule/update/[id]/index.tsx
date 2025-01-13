import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import { useRouter } from 'next/router'
import AppSettingTaskScheduleUpdate from '@/features/app-setting/task-schedule/ui/update';

function AppSettingTaskSchedulePage() {
  
  return (
    <LayoutContainer>
        <AppSettingTaskScheduleUpdate />
    </LayoutContainer>
  
);
}

export default withPrivateRoute(AppSettingTaskSchedulePage);
