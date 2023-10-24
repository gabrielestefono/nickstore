import CardProdutoG from "./CardProdutoG";
import CardProdutoP from "./CardProdutoP";
import styled from "styled-components";

const ProdutosContainer = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

const Titulo = styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`;

export default function Produtos(){
    return (
        <ProdutosContainer>
            <Titulo>Produtos</Titulo>
            <Container>
                <CardProdutoG/>
                <CardProdutoP/>
                <CardProdutoP/>
                <CardProdutoP/>
                <CardProdutoP/>
                <CardProdutoG/>
            </Container>
        </ProdutosContainer>
    );
}
