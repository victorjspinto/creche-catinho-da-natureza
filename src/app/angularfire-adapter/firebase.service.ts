import * as firebase from 'firebase';
import 'angularfire';

var config = {
    apiKey: "AIzaSyBjAR7takcSRt_3VU7T3grPxA5dUKgfZbo",
    authDomain: "creche-cantinho-da-natureza.firebaseapp.com",
    databaseURL: "https://creche-cantinho-da-natureza.firebaseio.com",
    storageBucket: "creche-cantinho-da-natureza.appspot.com",
    messagingSenderId: "507255567859"
};
firebase.initializeApp(config);

export default angular.module('firebase-adapter', ['firebase'])
    .factory('angularFireAuth', ($firebaseAuth:any) => {
        return $firebaseAuth(firebase.auth());
    })
    .run((angularFireAuth:angularfire.AngularFireAuth, $log:ng.ILogService) => {
        angularFireAuth.$signInWithEmailAndPassword('victorjspinto@gmail.com', 'viktorjose')
            .then((user) => {
                $log.log(user);
            }, (error) => {
                $log.error(error);
            });
    });
