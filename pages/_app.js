import { AuthProvider } from "../context/authContext";
import "./styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Head>
                <title>ApexLegends</title>
                <link href="https://db.onlinewebfonts.com/c/61778cbc3c5430c994d624866708eb2d?family=Duke+Fill" rel="stylesheet"/>
                <link href="https://fonts.cdnfonts.com/css/tt-lakes-neue-trial" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </AuthProvider>
    );
}
