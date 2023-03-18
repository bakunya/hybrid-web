import {
  IonRouterOutlet,
  IonApp,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from 'react-router-dom'
import Register from "./page/Register";

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Register />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App