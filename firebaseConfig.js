// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTZDZw70OP0dVR01zwCmxwuOYkOxfYxp8",
  authDomain: "portfolio-bodin-andreas.firebaseapp.com",
  projectId: "portfolio-bodin-andreas",
  storageBucket: "portfolio-bodin-andreas.appspot.com",
  messagingSenderId: "415477927722",
  appId: "1:415477927722:web:ddcf29a3d594db98cf5853",
  measurementId: "G-2YVLV227Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
