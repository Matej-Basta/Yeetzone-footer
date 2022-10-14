// styles
import styles from "./Social.module.scss";

export default function Social() {
    
    const handleClick = () => {
        console.log("Redirecting to a log in page.")
    }
    
    return (
        <div className={styles.social}>
            <h4>Sociální sítě</h4>
            <div className={styles.social__socialSites}>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
            </div>
            <button onClick={handleClick}>Přihlášení</button>
        </div>
    );
}