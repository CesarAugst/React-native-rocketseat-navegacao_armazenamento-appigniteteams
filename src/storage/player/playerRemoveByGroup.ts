import AsyncStorage from "@react-native-async-storage/async-storage";
import {PLAYER_COLECTION} from "@storage/storageConfig";
import {playersGetByGroup} from "@storage/player/playersGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string){
    try{
        const storage = await playersGetByGroup(group);

        const filtered = storage.filter(player => player.name !== playerName);

        await AsyncStorage.setItem(`${PLAYER_COLECTION}-${group}`, JSON.stringify(filtered))
    }catch(error){
        throw error;
    }
}