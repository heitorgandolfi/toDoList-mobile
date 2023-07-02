import {
  BaseToast,
  ErrorToast,
  BaseToastProps,
} from "react-native-toast-message";

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#FFC600" }}
      contentContainerStyle={{
        paddingHorizontal: 12,
        backgroundColor: "#282829",
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "700",
        color: "#FFFF",
      }}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "#a9303b" }}
      contentContainerStyle={{
        paddingHorizontal: 12,
        backgroundColor: "#282829",
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "700",
        color: "#FFFF",
      }}
    />
  ),
};
