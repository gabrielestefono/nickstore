
import styles from './LoginComponent.module.scss';

export default function LoginComponent(props){
    return (
        <div className={styles.right}>
            <h1>Registre-se</h1>
            <form>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="sobrenome"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="CPF"/>
                <input type="text" placeholder="Telefone"/>
                <input type="text" placeholder="Data de Nascimento"/>
                <input type="text" placeholder="sexo"/>
                <input type="password" placeholder="password"/>
                <button>Registre-se</button>
            </form>
            <div>
                <a href="/login">Já possui uma conta?</a>
            </div>
        </div>
    )
}
