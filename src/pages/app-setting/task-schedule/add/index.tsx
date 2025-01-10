import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import AppSettingTaskScheduleAdd from '@/features/app-setting/task-schedule/ui/add';

function AppSettingTaskSchedulePage() {

  return (
    <LayoutContainer>
        <AppSettingTaskScheduleAdd />
    </LayoutContainer>

  );
}

export default withPrivateRoute(AppSettingTaskSchedulePage);
