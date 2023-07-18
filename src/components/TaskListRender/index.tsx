import { FlatList, TouchableOpacity } from "react-native";

import { NewTaskParams } from "../../domain/newTask";
import i18n from "../../i18n/locales";

import { LogoImage } from "../../screens/Home/styles";

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

type TaskListRenderProps = {
  data: NewTaskParams[];
  onPressDone: (id: string) => void;
  onPressDelete: (id: string) => void;
  isDone: boolean;
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
  isDone
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
            {isDone ? (
              <EmptyTaskText>{i18n.t("doneTasksMessage")}</EmptyTaskText>
            ) : (
              <EmptyTaskText>{i18n.t("toDoTasksMessage")}</EmptyTaskText>
            )}
          </EmptyTaskTextWrapper>
        </>
      }
    />
  );
};
