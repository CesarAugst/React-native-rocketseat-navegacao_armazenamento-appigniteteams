import {Container} from "@screens/Players/styles";
import {Header} from "@components/Header";
import {HighLight} from "@components/HighLight";

export function Players(){
    return(
        <Container>
            <Header showBackButton />
            
            <HighLight title="Nome da turma" subtitle="adicione a galera e separe os times" />
        </Container>
    )
}