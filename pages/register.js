import Link from "next/link";
import RegisterCard from "./components/loginCard/registerCard";
import Input from "./components/input/input";
import Button from "./components/button/button";

import styles from "./styles/register.module.css";

export default function RegisterPage() {
    return (
        <div className={styles.background}>
            <img
                className={styles.logoImage}
                src={"/assets/logos/logo-branca.png"}
            />

            <RegisterCard title="CRIE SUA CONTA">
                <form className={styles.form}>
                    <div className={styles.container}>
                        <Input
                            className={styles.input}
                            type="nome"
                            placeholder="NOME"
                        />
                        <Input
                            className={styles.input}
                            type="nome"
                            placeholder="SOBRENOME"
                        />
                    </div>
                    <Input type="email" placeholder="E-MAIL" />
                    <Input type="password" placeholder="SENHA" />
                    <Button>ENVIAR</Button>
                </form>
                <p className={styles.conectP}>
                    Já tem uma conta?
                    <Link href="/login" className={styles.linkLoginPage}>
                        Conectar
                    </Link>
                </p>
            </RegisterCard>
        </div>
    );
}
