import { useState } from 'react';

import LoginComponent from './Login';
import PasswordReset from '../password-reset/PasswordReset';

export default function RightLogin(){
    const [esqueceuSenha, setEsqueceuSenha] = useState(false);

    const handleEsqueceuSenha = () => {
        setEsqueceuSenha(true);
    }

    const handleNaoEsqueceuSenha = () => {
        setEsqueceuSenha(false);
    }

    return (
        <>
            {!esqueceuSenha ? <LoginComponent resetPassword={handleEsqueceuSenha}/> : <PasswordReset resetPassword={handleNaoEsqueceuSenha}/>}
        </>
    )
}
