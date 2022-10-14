// styles
import styles from "./Social.module.scss";

export default function Social() {
    return (
        <div className={styles.social}>
            <h4>Sociální sítě</h4>
            <div>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
            </div>
            <button>Přihlášení</button>
        </div>
    );
}