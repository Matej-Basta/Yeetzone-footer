export default function Form() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Jméno" />
                <input type="text" placeholder="Příjmení" />
                <input type="email" placeholder="Váš email" />
            </div>
            <textarea placeholder="Vaše zpráva" />
            <button>Odeslat</button>
        </form>
    );
}