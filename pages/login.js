import Link from "next/link";

import styles from "../pages/styles/login.module.css";
import LoginCard from "./components/loginCard/loginCard";
import Input from "./components/input/input";
import Button from "./components/button/button";
export default function LoginPage(){

    return (

       <div className={styles.background}> 
        <LoginCard>

         <form className={styles.form}>
         <Input type="email" placeholder="LOGIN"/>
         <Input type="password" placeholder="SENHA"/>

         <div className={styles.container}>
         <div class="checkbox-container">
        <input type="checkbox" id="minhaCaixaDeSelecao"/>
        <label for="minhaCaixaDeSelecao"></label>
        <span className={styles.buttonLembrar}>Lembrar minha conta</span>
         </div>
         <Link href="/register"><button className={styles.buttonRegister}>Criar conta</button></Link>  
         </div>
        
         <Button> Entrar</Button>
         </form>
        </LoginCard>
</div>
 
 
 
    )
 
 } 
 