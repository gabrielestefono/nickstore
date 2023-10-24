import CardCategoria from './CardCategoria';
import styled from "styled-components";

const Categoria = styled.div`
    padding: 20px 20px 20px 20px;
    background-color: #fff;
    border-radius: 5px;
    width: 100vw;
`;

const Titulo = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1.25rem;
    row-gap: 1.25rem;
    width: calc(100vw - 40px);
    justify-content: space-between;
    margin: 0 auto;
`;



export default function Categorias(){
    return (
        <Categoria>
            <Titulo>Categorias</Titulo>
            <Container>
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
            </Container>
        </Categoria>
    );
}
