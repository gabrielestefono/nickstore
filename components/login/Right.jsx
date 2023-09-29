import styles from './Right.module.scss';

export default function RightLogin(){
    return (
        <div className={styles.right}>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Nome de usuário"/>
                <input type="password" placeholder="Senha"/>
                <button>Login</button>
            </form>
            <div>
                <a href="#">Esqueceu a senha?</a>
                <span>|</span>
                <a href="#">Criar uma conta</a>
            </div>
        </div>
    )
}
