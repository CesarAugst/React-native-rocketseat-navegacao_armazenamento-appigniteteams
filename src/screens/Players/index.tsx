import {Container, Form, HeaderList, NumbersOfPlayers} from "@screens/Players/styles";
import {Header} from "@components/Header";
import {HighLight} from "@components/HighLight";
import {ButtonIcon} from "@components/ButtonIcon";
import {Input} from "@components/Input";
import {Filter} from "@components/Filter";
import {FlatList} from "react-native";
import {useState} from "react";

export function Players(){

    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([]);
    return(
        <Container>
            <Header showBackButton />
            
            <HighLight title="Nome da turma" subtitle="adicione a galera e separe os times" />

            <Form>
                <Input placeholder="Nome da Pessoa" autoCorrect={false} />
                <ButtonIcon icon="add" />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Filter
                            title={item}
                            isActive={team === item}
                            onPress={() => setTeam(item)}
                        />
                    ) }
                    horizontal
                />

                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>
        </Container>
    )
}