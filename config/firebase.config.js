import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAp75am_PVmPwT3hgPblQJe24AMvSvXdcE',
  authDomain: 'ridoansaleh-13acd.firebaseapp.com',
  databaseURL: 'https://ridoansaleh-13acd.firebaseio.com',
  projectId: 'ridoansaleh-13acd',
  storageBucket: '',
  messagingSenderId: '299732237024',
  appId: '1:299732237024:web:a20d1ab997c21d96',
};

function startFirebase() {
  firebase.initializeApp(firebaseConfig);
}

export { firebaseConfig, startFirebase };
