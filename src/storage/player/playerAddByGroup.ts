import { AppError} from "@utils/AppError";
import {PLAYER_COLECTION} from "@storage/storageConfig";
import {PlayerStorageDTO} from "@storage/player/playerStorageDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {playersGetByGroup} from "@storage/player/playersGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
    try{
        const storedPlayers = await playersGetByGroup(group);

        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)

        if(playerAlreadyExists.length > 0){
            throw new AppError('Essa pessoa já está adicionada em um time aqui.');
        }

        await AsyncStorage.setItem(`${PLAYER_COLECTION}-${group}`, JSON.stringify([...storedPlayers, newPlayer]));
    }catch(error){
        throw error;
    }
}
