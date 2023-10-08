
import styles from './LoginComponent.module.scss';

export default function LoginComponent(props){
    return (
        <div className={styles.right}>
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <button>Login</button>
            </form>
            <div>
                <a href="#" onClick={props.resetPassword}>Esqueceu a senha?</a>
                <span>|</span>
                <a href="#">Criar uma conta</a>
            </div>
        </div>
    )
}
