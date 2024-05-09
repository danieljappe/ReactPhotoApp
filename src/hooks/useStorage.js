import { useState, useEffect } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { projectStorage, serverTimestamp } from "../Firebase/config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const db = getFirestore();

    uploadTask.on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      const createdAt = serverTimestamp();
      const collectionRef = collection(db, 'images');
      await addDoc(collectionRef, { url: downloadURL, createdAt });
      setUrl(downloadURL);
    });
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
