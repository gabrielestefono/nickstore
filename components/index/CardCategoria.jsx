import styles from './CardCategoria.module.scss';

export default function CardCategoria(){
    return (
        <div className={styles.card_categorias}>
            <img src="https://via.placeholder.com/400x300" alt="Categoria 1"/>
            <h3>Categoria 1</h3>
            <p>Descrição da Categoria 1.</p>
        </div>
    );
}
