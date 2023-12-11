import Link from "next/link";
import RegisterCard from "./components/loginCard/registerCard";
import Input from "./components/input/input";
import Button from "./components/button/button";
import styles from "./styles/register.module.css";
import { auth } from "../util/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import validator from "validator";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { db } from "../util/firebase";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const addData = async (auth, email, password, name, lastName) => {
        try {
            const firestore = getFirestore(db);
            const docRef = await addDoc(collection(firestore, "usuarios"), {
                id: auth.lastNotifiedUid,
                email: email,
                senha: password,
                nome: name,
                sobrenome: lastName,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        const isValid = validator.isEmail(inputEmail);
        setValidEmail(isValid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Email:", validEmail);

        if (validEmail && password.length >= 8) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setErrorMessage("");
                    console.log("Usuário criado com sucesso!");
                    router.push("/login");
                })
                .catch((error) => {
                    setErrorMessage("Email já está em uso");
                });
            addData(auth, email, password, name, lastName);
        } else if (password.length < 8) {
            setErrorMessage("Senha deve ter no mínimo 8 caracteres");
        } else {
            setErrorMessage("Email inválido");
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    return (
        <div className={styles.background}>
            <img
                className={styles.logoImage}
                src={"/assets/logos/logo-branca.png"}
            />

            <RegisterCard title="CRIE SUA CONTA">
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.container}>
                        <Input
                            className={styles.input}
                            type="nome"
                            value={name}
                            placeholder="NOME"
                            onChange={handleNameChange}
                        />
                        <Input
                            className={styles.input}
                            type="nome"
                            value={lastName}
                            placeholder="SOBRENOME"
                            onChange={handleLastNameChange}
                        />
                    </div>
                    <Input
                        type="email"
                        placeholder="E-MAIL"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <Input
                        type="password"
                        placeholder="SENHA"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {!validEmail && <p> Email inválido </p>}
                    {errorMessage && <p>{errorMessage}</p>}

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
