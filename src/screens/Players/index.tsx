import {Container, Form, HeaderList, NumberOfPlayers} from "@screens/Players/styles";
import {Header} from "@components/Header";
import {HighLight} from "@components/HighLight";
import {ButtonIcon} from "@components/ButtonIcon";
import {Input} from "@components/Input";
import {Filter} from "@components/Filter";
import {Alert, FlatList} from "react-native";
import {useEffect, useState} from "react";
import {PlayerCard} from "@components/PlayerCard";
import {ListEmpty} from "@components/ListEmpty";
import {Button} from "@components/Button";
import {useRoute} from "@react-navigation/native";
import {AppError} from "@utils/AppError";
import {playerAddByGroup} from "@storage/player/playerAddByGroup";
import {playersGetByGroup} from "@storage/player/playersGetByGroup";
import {playersGetByGroupAndTeam} from "@storage/player/playersGetByGroupAndTeam";
import {PlayerStorageDTO} from "@storage/player/playerStorageDTO";

type RouteParams = {
    group: string;
}

export function Players(){

    const [newPlayerName, setNewPlayerName] = useState("");
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const route = useRoute();
    const {group} = route.params as RouteParams;

    async function handleAddPlayer(){
        if(newPlayerName.trim().length === 0){
            return Alert.alert('Nova Pessoa', 'Informe o nome da pessoa para continuar')
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {

            await playerAddByGroup(newPlayer, group);
            //const players = await playersGetByGroup(group);
            //console.log(players)
            fetchPlayersByTeam();
            setNewPlayerName("")
        }catch(error){
            if(error instanceof AppError){
                Alert.alert('Nova Pessoa', error.message)
            }else{
                console.log(error)
                Alert.alert('Nova Pessoa', 'Não foi possível adicionar adicionar.')
            }
        }
    }

    async function fetchPlayersByTeam(){
        try{
            const playersByTeam = await playersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam)
        }catch(error){
            console.log(error);
            Alert.alert('Pessoas', 'Não foi possível carregar as pessoas filtradas do time selecionado.')
        }
    }


    useEffect(() => {
        fetchPlayersByTeam();
    }, [team]);
    return(
        <Container>
            <Header showBackButton />
            
            <HighLight title={group} subtitle="adicione a galera e separe os times" />

            <Form>
                <Input placeholder="Nome da Pessoa" autoCorrect={false} onChangeText={setNewPlayerName} value={newPlayerName}/>
                <ButtonIcon icon="add" onPress={handleAddPlayer} />
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

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item.name}
                renderItem={({item}) => <PlayerCard name={item.name} onRemove={() => {}}/>}
                ListEmptyComponent={() =>  <ListEmpty message="Não há pessoas nesse time" />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[ {paddingBottom:100}, players.length === 0 && {flex:1} ]}
            />

            <Button title="Remover Turma" type="SECONDARY" />
        </Container>
    )
}