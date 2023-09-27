import styles from "./CardProdutoP.module.scss";

export default function CardProdutoP(){
    return (
        <div class={styles.custom_card}>
            <img src="https://via.placeholder.com/400x300" alt="Produto 2"/>
            <h3>Produto 2</h3>
            <p>Descrição do Produto 2.</p>
        </div>
    );
}
