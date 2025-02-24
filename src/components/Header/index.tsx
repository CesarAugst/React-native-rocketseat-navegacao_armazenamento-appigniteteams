import {Container, Logo} from "@components/Header/styles";
import logoImg from "@assets/logo.png";

export function Header(){
    return (
        <Container>
            <Logo source={logoImg}/>
        </Container>
    )
}