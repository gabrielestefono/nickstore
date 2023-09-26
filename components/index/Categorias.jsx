import CardCategoria from './CardCategoria';
import styles from './Categorias.module.scss';

export default function Categorias(){
    return (
        <div className={styles.categorias}>
            <h2>Categorias</h2>
            <div>
                <CardCategoria/>
                <CardCategoria/>
                <CardCategoria/>
                <CardCategoria/>
                <CardCategoria/>
                <CardCategoria/>
                <CardCategoria/>
                <CardCategoria/>
                <CardCategoria/>
                <CardCategoria/>
            </div>
        </div>
    );
}
