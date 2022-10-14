// hooks
import { useRef } from "react";

// styles
import styles from "./Form.module.scss";

export default function Form() {

    const name = useRef();
    const surname = useRef();
    const email = useRef();
    const message = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("it has been submitted");
        console.log(name.current.value);
        name.current.value = null;
    }

    return (
        <form className={styles.form}>
            <div>
                <input type="text" placeholder="Jméno" ref={name} />
                <input type="text" placeholder="Příjmení" ref={surname} />
                <input type="email" placeholder="Váš email" ref={email} />
            </div>
            <textarea placeholder="Vaše zpráva" ref={message} />
            <button onClick={handleSubmit}>Odeslat</button>
        </form>
    );
}