import CardProdutoG from "./CardProdutoG";
import CardProdutoP from "./CardProdutoP";
import styles from "./Produtos.module.scss";

export default function Produtos(){
    return (
        <div class={styles.produtos}>
            <h2>Produtos</h2>
            <div>
                <CardProdutoG/>
                <CardProdutoP/>
                <CardProdutoP/>
                <CardProdutoP/>
                <CardProdutoP/>
                <CardProdutoG/>
            </div>
        </div>
    );
}
