import { collection, getDocs, getFirestore } from "firebase/firestore";
import db from "../util/firebase";

export async function getLegendsData() {
    const firestore = getFirestore(db);
    const legendsCollection = collection(firestore, "lendas");
    const legendsSnapshot = await getDocs(legendsCollection);
    const legendsData = legendsSnapshot.docs.map((doc) => doc.data());
    return legendsData;
}
