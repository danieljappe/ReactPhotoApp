import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXmnwShaPPrYmH6kCf2B9-mhfSvfGrF_0",
  authDomain: "reactphotoapp-d4114.firebaseapp.com",
  projectId: "reactphotoapp-d4114",
  storageBucket: "reactphotoapp-d4114.appspot.com",
  messagingSenderId: "569651643843",
  appId: "1:569651643843:web:2351c020624ac7e996e976"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get storage and firestore instances
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);


export { projectStorage, projectFirestore, serverTimestamp };