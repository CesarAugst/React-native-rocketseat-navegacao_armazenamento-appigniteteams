import {Container, Content, Icon} from "@screens/NewGroup/styles";
import {Header} from "@components/Header";
import {HighLight} from "@components/HighLight";
import {Button} from "@components/Button";
import {Input} from "@components/Input";

export function NewGroup(){
    return(
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <HighLight title="Nova turma" subtitle="crie a turma para adicionar as pessoas" />
                <Input placeholder="Nome da Turma"/>
                <Button title="criar" style={{marginTop: 20}}/>
            </Content>
        </Container>
    )
}
