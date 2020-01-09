import Firebase from 'firebase';
let config = {
    
        apiKey: "AIzaSyD8UolKa_jX-3QbpX1GDx4ZS8p3RAEoFH8",
        authDomain: "uw-rent.firebaseapp.com",
        databaseURL: "https://uw-rent.firebaseio.com",
        projectId: "uw-rent",
        storageBucket: "",
        messagingSenderId: "218192632147",
        appId: "1:218192632147:web:705d25b275b7ec0baee9a6"
    
};
let app = Firebase.initializeApp(config);
export const db = app.database();