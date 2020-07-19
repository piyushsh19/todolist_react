import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyDigb_acy0vqQrpbulFqnKTRJimR6NwtwE",
        authDomain: "to-dolist-react.firebaseapp.com",
        databaseURL: "https://to-dolist-react.firebaseio.com",
        projectId: "to-dolist-react",
        storageBucket: "to-dolist-react.appspot.com",
        messagingSenderId: "19665961318",
        appId: "1:19665961318:web:feb19288928febe56348a7",
        measurementId: "G-K99SLZ1Y20"
});

const db = firebaseApp.firestore();

export default db ;