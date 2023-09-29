import LeftLogin from "@/components/login/Left";
import RightLogin from "@/components/login/Right";
import styles from '@/styles/Login.module.scss';

export default function Login(){
    return (
        <div className={styles.login}>
            <LeftLogin/>
            <RightLogin/>
        </div>
    )
}
