import { collection, getDocs, getFirestore } from "firebase/firestore";
import db from "../util/firebase";

export async function getMapsData() {
    const firestore = getFirestore(db);
    const mapsCollection = collection(firestore, 'lendas');
    const mapsSnapshot = await getDocs(mapsCollection);
    const mapsData = mapsSnapshot.docs.map(doc => doc.data());    
    return mapsData;
}
