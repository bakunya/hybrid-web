import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

function Register() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='font-semibold'>
                        Register
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size='8' className='mx-auto'>
                            <form action="">
                                <IonList>
                                    <IonListHeader className='mb-5'>
                                        <IonLabel className='text-2xl font-semibold'>Register</IonLabel>
                                    </IonListHeader>
                                    <IonItem>
                                        <IonLabel>Text input</IonLabel>
                                        <IonInput placeholder="Enter text"></IonInput>
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel>Number input</IonLabel>
                                        <IonInput type="number" placeholder="000"></IonInput>
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel>Password input</IonLabel>
                                        <IonInput type="password" placeholder='password'></IonInput>
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel>Email input</IonLabel>
                                        <IonInput type="email" placeholder="email@domain.com"></IonInput>
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel>Telephone input</IonLabel>
                                        <IonInput type="tel" placeholder="888-888-8888"></IonInput>
                                    </IonItem>
                                </IonList>
                                <IonButton className='mt-5 ml-auto max-w-[300px] block'>Submit</IonButton>
                            </form>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default Register;