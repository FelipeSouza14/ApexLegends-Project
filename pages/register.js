import Link from "next/link";

import styles from "./styles/register.module.css";
import LoginCard from "./components/loginCard/registerCard";
import Input from "./components/input/input";
import Button from "./components/button/button";

export default function RegisterPage(){

   return (

   <div className={styles.background}>   
         <img className={styles.logoImagem} src={"/assets/logos/logo-vermelho.png"} />

         <LoginCard title="CRIE SUA CONTA">

         <form className={styles.form}>
        <div className={styles.container}> 
         <Input className={styles.input} type="nome" placeholder="NOME"/>
         <Input className={styles.input} type="nome" placeholder="SOBRENOME"/>
         </div>
         <Input type="email" placeholder="EMAIL"/>
         <Input type="password" placeholder="SENHA"/>
         <Button>ENVIAR</Button>

         </form>
         </LoginCard>
</div>



   )

} 
