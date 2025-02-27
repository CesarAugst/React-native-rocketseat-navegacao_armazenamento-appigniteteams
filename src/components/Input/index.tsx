import {Container} from "@components/Input/styles";
import {TextInputProps} from "react-native";

export function Input({...rest}: TextInputProps){
    return(
        <Container {...rest}>

        </Container>
    )
}