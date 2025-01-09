import withPrivateRoute from '@/shared/lib/withPrivateRoute';
import LayoutContainer from '@/components/layout/layoutContainer';
import TaskScheduleList from '@/features/app-setting/task-schedule/ui/list';
function TaskSchedulePage() {
  return (
    <LayoutContainer>
      <TaskScheduleList />
    </LayoutContainer>
  );
}

export default withPrivateRoute(TaskSchedulePage);
