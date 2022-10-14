// components
import Documents from "./Documents";
import Social from "./Social";
import Form from "./Form";
// styles
import styles from "./Footer.module.scss";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__info}>
                <Documents />
                <Social />
            </div>    
            <Form />
        </footer>
    );
}