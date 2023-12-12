import { getUserByEmail } from "../../../api/usersApi";
import { auth } from "../../../util/firebase";
// import { auth } from "../../../util/firebase";
// import { getDocs, collection, query, where } from "firebase/firestore";
import styles from "./myNavBar.module.css";



export default function MyNavBar({ stateAuth, statePage }) {

    // const mudar = (numb) => {
    //     if (stateAuth && numb === 1) {
    //         funcLendas('showLegends');
    //     }
    //     else if (stateAuth && numb === 2) {
    //         funcWeapons('showWeapons');
    //     }
    // }

    const mudarPagina = (pagina) => {
        if (stateAuth) statePage(pagina);
    };

    // const mud = () => {
    //     if (stateAuth) {
    //         funcWeapons('showWeapons');
    //     }
    // }
    // const loadUser = async () =>{
    //     const legendsCollection = collection(db, "usuario")
    //     const legendsQuery = query(legendsCollection, where('email', '==', auth.currentUser.email))
    //     const querySnapshot = await getDocs(legendsQuery);
    //     return querySnapshot.data()
    // }

    // const teste = (stateAu) =>{
    //     if (stateAu) {
    //         const userData = getUserByEmail(stateAu.email);
    //         console.log(userData)
    //         return (
    //             <p className={styles.userCollection}>Coleção de {userData.name}</p>
    //         );
    //     }
    // }

    // const userData = getUserByEmail(auth.currentUser.email);
    // let getUserData = userData(auth.currentUser.email);
    // console.log(userData)
    return (
        <nav className={styles.myNavBar}>
            <img
                className={styles.logoImagem}
                src={"/assets/logos/logo-sem-fundo.png"}
            />
            <div className={styles.divMyButtons}>
                <button className={styles.myNavButton} onClick={() => mudarPagina(1)}>Lendas</button>
                <button className={styles.myNavButton} onClick={() => mudarPagina(2)}>Armas</button>
                <button className={styles.myNavButton} onClick={() => mudarPagina(3)}>Mapas</button>
            </div>
            {/* {teste(stateAuth)} */}
        </nav>
    );
}