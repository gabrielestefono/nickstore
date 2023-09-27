import styles from "./CardProdutoG.module.scss";

export default function CardProdutoG(){
    return (
        <div className={styles.custom_card}>
            <img src="https://via.placeholder.com/800x300" alt="Produto 1"/>
            <h3>Produto 1</h3>
            <p>Descrição do Produto 1.</p>
        </div>
    );
}
