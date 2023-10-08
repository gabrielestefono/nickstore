import styles from './Register.module.scss';

export default function register(){
    return (
        <div className={styles.form}>
            <form>
                <input type="text" placeholder="Nome" aria-autocomplete='off'/>
                <input type="text" placeholder="Sobrenome" aria-autocomplete='off'/>
                <input type="email" placeholder="Email" aria-autocomplete='off'/>
                <input type="password" placeholder="Senha" aria-autocomplete='off'/>
                <input type="password" placeholder="Confirmar senha" aria-autocomplete='off'/>
                <button>Registrar</button>
            </form>
        </div>
    )
}
