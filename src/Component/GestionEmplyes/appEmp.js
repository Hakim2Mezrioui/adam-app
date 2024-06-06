import { Provider } from "react-redux";
import store from "./store";
import AddEmp from "./addEmp";
import ListEmps from "./ListEmps";
import UpdateEmp from "./updateEmp";

const AppEmp = () => {
  return (
    <Provider store={store}>
      <AddEmp />
      <UpdateEmp />
      <ListEmps />
    </Provider>
  );
};

export default AppEmp;
