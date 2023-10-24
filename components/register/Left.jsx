import { useState } from 'react';

import RegisterComponent from './Register';
import PasswordReset from '../password-reset/PasswordReset';

export default function LeftRegister(){
    const [esqueceuSenha, setEsqueceuSenha] = useState(false);

    const handleEsqueceuSenha = () => {
        setEsqueceuSenha(true);
    }

    const handleNaoEsqueceuSenha = () => {
        setEsqueceuSenha(false);
    }

    return (
        <>
            {!esqueceuSenha ? <RegisterComponent resetPassword={handleEsqueceuSenha}/> : <PasswordReset resetPassword={handleNaoEsqueceuSenha}/>}
        </>
    )
}
