// hooks
import { useState } from "react";

// styles
import styles from "./Form.module.scss";

export default function Form() {

    const [values , setValues] = useState({
        name: "",
        surname: "",
        email: "",
        message: "",
    })

    const handleChange = (event) => {
        setValues((oldValues) => {
                return {
                    ...oldValues,
                    [event.target.name]: event.target.value,
                }
            })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Following data was submited: \n name:${values.name}\n surname:${values.surname}\n email:${values.email}\n message:${values.message}`);
        setValues({
            name: "",
            surname: "",
            email: "",
            message: "",
        })
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__inputs}>
                <input name="name" type="text" placeholder="Jméno" value={values.name} onChange={handleChange}/>
                <input name="surname" type="text" placeholder="Příjmení" value={values.surname} onChange={handleChange}/>
                <input name="email" type="email" placeholder="Váš email" value={values.email} onChange={handleChange}/>
            </div>
            <textarea name="message" placeholder="Vaše zpráva" value={values.message} onChange={handleChange}/>
            <button>Odeslat</button>
        </form>
    );
}