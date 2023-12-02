import { collection, getDocs, getFirestore } from "firebase/firestore";
import db from "../util/firebase";

export async function getWeaponsData() {
    const firestore = getFirestore(db);
    const weaponsCollection = collection(firestore, 'armas');
    const weaponsSnapshot = await getDocs(weaponsCollection);
    const weaponsData = weaponsSnapshot.docs.map(doc => doc.data());    
    return weaponsData;
}