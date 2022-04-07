declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Modal: undefined;
  NotFound: undefined;
  Main: undefined;
  AddTask: undefined;
  ViewAll: undefined;
};
