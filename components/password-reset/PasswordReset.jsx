import { useState } from 'react';

import styles from './PasswordReset.module.scss';


export default function LoginComponent(props){

    const [receberCodigo, setReceberCodigo] = useState(false);

    function handleReceberCodigo(){
        setReceberCodigo(true);
    }

    function handleVoltar(){
        setReceberCodigo(false);
    }

    const padrao = (
        <div className={styles.right}>
            <h1>Esqueceu sua senha?</h1>
            <div>
                <p>Será enviado um código ao seu e-mail. Por favor confirme na próxima etapa</p>
            </div>
            <form>
                <input type="email" placeholder="Digite o seu e-mail"/>
                <button onClick={handleReceberCodigo}>Enviar código</button>
            </form>
            <div>
                <a onClick={props.resetPassword}>Voltar</a>
            </div>
        </div>
    )

    const codigoEnviado = (
        <div className={styles.right}>
            <h1>Esqueceu sua senha?</h1>
            <div>
                <p>Foi enviado um código para o seu e-mail, por favor, digite-o abaixo.</p>
            </div>
            <form>
                <input type="text" placeholder="Digite o seu código" className={styles.code}/>
                <button onClick={handleReceberCodigo}>Confirmar código</button>
            </form>
            <div>
                <a onClick={handleVoltar}>Voltar</a>
            </div>
        </div>
    )

    return (
        <>
            {receberCodigo ? codigoEnviado : padrao}
        </>
    )
}
