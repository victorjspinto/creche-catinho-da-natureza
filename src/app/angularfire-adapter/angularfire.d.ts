
declare namespace angularfire {
    interface AngularFireAuth {
        $signInWithEmailAndPassword(email:String, password:String): ng.IPromise<firebase.User>
        
        $onAuthStateChanged(callback:(x:firebase.User) => void)
        $getAuth():firebase.User
        $requireSignIn(): ng.IPromise<firebase.User>;

        $signOut():ng.IPromise<void>
    }

    interface AngularFireArray<T> extends Array<T> {
        $loaded():ng.IPromise<any>;
    }
}