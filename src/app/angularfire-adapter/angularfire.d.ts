
declare namespace angularfire {
    interface AngularFireAuth {
        $signInWithEmailAndPassword(email:String, password:String): ng.IPromise<firebase.User>
    }
}