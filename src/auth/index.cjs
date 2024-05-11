const admin = require("firebase-admin");
const { initializeApp: initializeAdminApp } = require("firebase-admin/app");
const { getAuth: getAdminAuth } = require("firebase-admin/auth");
const { initializeApp: initializeFirebaseApp } = require("firebase/app");
const { getAuth: getFirebaseAuth } = require("firebase/auth");
const dotenv = require("dotenv")

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  credential: admin.credential.cert({
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
    client_x509_cert_url: process.env.CLIENT_X509,
    universe_domain: process.env.UNIVERSE_DOMAIN
  })
};

const adminApp = initializeAdminApp(firebaseConfig);

const firebaseApp = initializeFirebaseApp(firebaseConfig);

const authAdmin = getAdminAuth(adminApp);

const authFirebase = getFirebaseAuth(firebaseApp);

module.exports = { authAdmin, authFirebase };
