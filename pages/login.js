import Link from "next/link";

import styles from "../pages/styles/login.module.css";
import LoginCard from "./components/loginCard/loginCard";
import Input from "./components/input/input";
import Button from "./components/button/button";
export default function LoginPage() {

    return (

        <div className={styles.background}>
            <LoginCard>

                <form className={styles.form}>
                    <Input type="email" placeholder="E-mail" />
                    <Input type="password" placeholder="SENHA" />

                    <div className={styles.container}>
                        <div className={styles.subButtons}>
                            <div>
                                <input type="checkbox" className={styles.minhaCaixaDeSelecao} />
                                <label for="minhaCaixaDeSelecao"></label>
                                <span className={styles.buttonLembrar}>Lembrar minha conta</span>
                            </div>
                            <Link href="/register"><button className={styles.buttonRegister}>Criar conta</button></Link>
                        </div>
                    </div>

                    <Button> Entrar</Button>
                </form>
            </LoginCard>
        </div>
    )
}
