import { FlatList, TouchableOpacity } from "react-native";
import {
  CheckedCircleIcon,
  CircleOutlineIcon,
  EmptyTaskText,
  EmptyTaskTextWrapper,
  TaskContent,
  TaskText,
  TaskWrapper,
  TrashCanIcon,
} from "../Tasks/styles";
import { LogoImage } from "../../screens/Home/styles";
import { NewTaskParams } from "../../domain/newTask";
import i18n from "../../i18n/locales";

type TaskListRenderProps = {
  data: NewTaskParams[];
  onPressDone: (id: string) => void;
  onPressDelete: (id: string) => void;
};

function checkIconRender(isDone: boolean) {
  if (isDone) {
    return <CheckedCircleIcon name="check-circle" />;
  }

  return <CircleOutlineIcon name="circle-outline" />;
}

export const TaskListRender = ({
  data,
  onPressDone,
  onPressDelete,
}: TaskListRenderProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { description, id, isDone } }) => (
        <TaskWrapper key={id}>
          <TaskContent>
            <TouchableOpacity onPress={() => onPressDone(id)}>
              {checkIconRender(isDone)}
            </TouchableOpacity>

            <TaskText>{description}</TaskText>
          </TaskContent>

          <TouchableOpacity onPress={() => onPressDelete(id)}>
            <TrashCanIcon name="trash-can" />
          </TouchableOpacity>
        </TaskWrapper>
      )}
      ListEmptyComponent={
        <>
          <LogoImage source={require("../../../assets/empty-tasks.png")} />

          <EmptyTaskTextWrapper>
            {/* fazer uma condicional aqui, em relacao ao isDone, para adaptar a msg nas tabsbottom */}
            <EmptyTaskText>{i18n.t("noToDoTasksMessage")}</EmptyTaskText>
          </EmptyTaskTextWrapper>
        </>
      }
    />
  );
};
