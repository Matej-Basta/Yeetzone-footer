// components
import Documents from "./Documents";
import Social from "./Social";
import Form from "./Form";
// styles
import styles from "./Footer.module.scss";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Documents />
            <Social />
            <Form />
        </footer>
    );
}