// backend/firebaseAdmin.js
const admin = require('firebase-admin');

const serviceAccount = require('./path/to/your/firebase-service-account-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
