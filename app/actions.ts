import { db } from "@/lib/firebase";
import { getDocs, collection } from "firebase/firestore";

export const getData = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data: any = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};
