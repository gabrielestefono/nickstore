import styles from './Header.module.scss';

export default function Header(){
    return (
        <div className={styles.header}>
            <div>
                <a href="/">Sua Loja</a>
                <ul>
                    <li><a href="">Roupas</a></li>
                    <li><a href="">Calçados</a></li>
                    <li><a href="">Acessórios</a></li>
                    <li><a href="">Ofertas</a></li>
                    <li><a href="">Sobre Nós</a></li>
                </ul>
                <div>
                    <ul>
                        <li><a href="/login">Login</a></li>
                        <li><a href="">Carrinho</a></li>
                    </ul>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="">Peças Superiores</a></li>
                    <li><a href="">Peças Inferiores</a></li>
                    <li><a href="">Calçados</a></li>
                    <li><a href="">Acessórios</a></li>
                </ul>
                <div>
                    <input type="text" name="" id="" />
                    <button type="submit">Pesquisar</button>
                </div>
            </nav>
        </div>
    );
}
