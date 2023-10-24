import styled from "styled-components";

const CustomCard = styled.div`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    grid-column: span 2;
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


export default function CardProdutoG(){
    return (
        <CustomCard>
            <Imagem src="https://via.placeholder.com/800x300" alt="Produto 1"/>
            <Titulo>Produto 1</Titulo>
            <Descricao>Descrição do Produto 1.</Descricao>
        </CustomCard>
    );
}
