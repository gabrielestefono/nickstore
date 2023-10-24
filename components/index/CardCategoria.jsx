import styled from 'styled-components';

const CardCategoriaContainer = styled.div`
    flex: 0 0 calc(20% - 20px);
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
`;

const Imagem = styled.img`
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
`;

const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
`;

const Descricao = styled.p`
    font-size: 14px;
`;


export default function CardCategoria(){
    return (
        <CardCategoriaContainer>
            <Imagem src="https://via.placeholder.com/400x300" alt="Categoria 1"/>
            <Titulo>Categoria 1</Titulo>
            <Descricao>Descrição da Categoria 1.</Descricao>
        </CardCategoriaContainer>
    );
}
