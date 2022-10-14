// styles
import styles from "./Documents.module.scss";

export default function Documents() {
    return (
        <div className={styles.documents}>
            <div>
                <h4>Documenty</h4>
                <a href="#">Zpracování osobních údajů</a>
                <a href="#">Obchodní podmínky</a>
                <a href="#">Cookies</a>
            </div>
            <p>Copyright 2021 ©Vytvořil Yeetzone</p>
        </div>
    );
}