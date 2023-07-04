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

type TaskListRenderProps = {
  data: NewTaskParams[];
  onPressDone: (id: string) => void;
  onPressDelete: (id: string) => void;
};

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
              {isDone ? (
                <CheckedCircleIcon name="check-circle" />
              ) : (
                <CircleOutlineIcon name="circle-outline" />
              )}
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
            <EmptyTaskText>
              Você ainda não tem tarefas cadastradas.{"\n"}
              Crie tarefas e organize seus itens a fazer.
            </EmptyTaskText>
          </EmptyTaskTextWrapper>
        </>
      }
    />
  );
};
