import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const config = await fetch('/api/config').then(r => r.json());
const app    = initializeApp(config);

export const auth = getAuth(app);
export const db   = getFirestore(app);