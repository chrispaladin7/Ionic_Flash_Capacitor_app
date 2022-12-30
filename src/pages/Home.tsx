import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import './Home.css';
import {Flashlight} from "@awesome-cordova-plugins/flashlight";
const Home: React.FC = () => {

function onFlashButtonClick(){
      console.log("in onFlashButtonClick");
      Flashlight.switchOn()
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
       
        <IonButton onClick={onFlashButtonClick}>Click me for Flash</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
