const multer = require("multer");
const FirebaseStorage = require("multer-firebase-storage");
const { v4: uuidv4 } = require("uuid");

const firebaseUploader = multer({
  storage: FirebaseStorage({
    bucketName: process.env.STORAGE_BUCKET_FIREBASE,
    credentials: {
      clientEmail: process.env.CLIENT_EMAIL_FIREBASE,
      //allow multiline string => in dotenv /n = linebreak => we are formatting the private key
      privateKey: process.env.PRIVATE_KEY_FIREBASE.replace(/\\n/g, "\n"),
      projectId: process.env.PROJECT_ID_FIREBASE,
    },
    public: true,
    nameSuffix: `-${uuidv4()}`,
    //allow read + write from anywhere
    rules: [
      {
        object: "*",
        methods: {
          read: true,
          //   write: "if request.auth != null",
          write: true,
        },
      },
    ],
  }),
});

module.exports = firebaseUploader;
