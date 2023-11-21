import Link from "next/link";

import styles from "./styles/register.module.css";
import LoginCard from "./components/loginCard/loginCard";
import Input from "./components/input/input";
import Button from "./components/button/button";

export default function RegisterPage(){

   return (

   <div className={styles.background}>   
 
         <LoginCard>

         <form className={styles.form}>
         <Input type="nome" placeholder="NOME"/>
         <Input type="email" placeholder="EMAIL"/>
         <Input type="password" placeholder="SENHA"/>
         <Button>Registrar</Button>
         <Link href="/login"><button className={styles.buttonRegister}>Já tem uma conta? clique aqui</button></Link>  

         </form>
         </LoginCard>
</div>



   )

} 
