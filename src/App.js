import { Provider } from "react-redux";
import AfficherLivres from "./Component/revisionGeneral2/Bibliotheque/AfficherLivres";
import { BibliothequeStore } from "./Component/revisionGeneral2/Bibliotheque/redux/store";
import AjouterLivre from "./Component/revisionGeneral2/Bibliotheque/AjouterLivre";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppEff from "./Component/revisionEFF/app_eff";
import AppTrain from "./Component/GestionTrain/AppTrain";
import AppEmp from "./Component/GestionEmplyes/appEmp";

function App() {
  return (
    // <BrowserRouter>
    //   <Provider store={BibliothequeStore}>
    //     <Routes>
    //       <Route path="/" element={<AfficherLivres />} />
    //       <Route path="/ajouterLivre" element={<AjouterLivre />} />
    //     </Routes>
    //   </Provider>
    // </BrowserRouter>
    // <AppEff />
    // <AppTrain />
    <AppEmp />
  );
}

export default App;
