import styles from "../pages/styles/login.module.css";
import Link from "next/link";
import LoginCard from "./components/loginCard/loginCard";
import Input from "./components/input/input";
import Button from "./components/button/button";
import validator from "validator";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../util/firebase";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";
import { getUserByEmail } from "../api/usersApi";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { logIn } = useAuth();
    const router = useRouter();

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        const isValid = validator.isEmail(inputEmail);
        setValidEmail(isValid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validEmail) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setErrorMessage("");

                    getUserByEmail(email)
                        .then((userData) => {
                            if (userData) {
                                logIn(email);
                            } else {
                                console.log(
                                    "Nenhum usuário encontrado com este e-mail."
                                );
                            }
                        })
                        .catch((error) => {
                            console.error(
                                "Erro ao buscar os dados do usuário:",
                                error
                            );
                        });

                    router.push("/");
                })
                .catch((error) => {
                    console.log("erroouuuu");
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage("Email ou senha incorretos");
                });
        } else {
            console.error("Email inválido");
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className={styles.background}>
            <LoginCard>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={handleEmailChange}
                    />

                    <Input
                        type="password"
                        placeholder="SENHA"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {!validEmail && (
                        <p className={styles.errorMsg}> Email inválido </p>
                    )}

                    <div className={styles.container}>
                        <div className={styles.subButtons}>
                            <div>
                                <input
                                    type="checkbox"
                                    className={styles.minhaCaixaDeSelecao}
                                />
                                <label htmlFor="minhaCaixaDeSelecao"></label>
                                <span className={styles.buttonLembrar}>
                                    Lembrar minha conta
                                </span>
                            </div>
                            <Link href="/register">
                                <button className={styles.buttonRegister}>
                                    Criar conta
                                </button>
                            </Link>
                        </div>
                    </div>
                    <Button>Entrar</Button>
                </form>
            </LoginCard>
        </div>
    );
}
