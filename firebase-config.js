// Firebase configuration — vena-dashboard-elit
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAK4lsunhdu9NGxNUw4P2_QYgeDArzgwc8",
  authDomain: "vena-dashboard-elit.firebaseapp.com",
  projectId: "vena-dashboard-elit",
  storageBucket: "vena-dashboard-elit.firebasestorage.app",
  messagingSenderId: "165503793782",
  appId: "1:165503793782:web:c67b004fbb88eedee43d57"
};

const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
export const auth = getAuth(app);
