import LeftRegister from '@/components/register/Left';
import RightRegister from '@/components/register/Right';
import styles from '../styles/Register.module.scss';

export default function registro(){
    return (
        <div className={styles.register}>
            <LeftRegister/>
            <RightRegister/>
        </div>
    )
}
