import { firebase } from '@firebase/app';
import '@firebase/firestore';
import { iniciarFirestore } from '../store/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyA9ZNoBZItUqs-OTuAbYEljxE6htOYwxao',
  authDomain: 'e-list-a8a7c.firebaseapp.com',
  projectId: 'e-list-a8a7c'
});

export function iniciarFirebase() {
  iniciarFirestore();
}
