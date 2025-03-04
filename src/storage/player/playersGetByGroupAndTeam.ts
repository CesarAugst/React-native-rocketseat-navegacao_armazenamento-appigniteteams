import AsyncStorage from "@react-native-async-storage/async-storage";
import {playersGetByGroup} from "@storage/player/playersGetByGroup";

export async function playersGetByGroupAndTeam(group: string, team:string){
    try{
        const storage = await playersGetByGroup(group);

        return storage.filter(player => player.team === team);

    }catch(error){
        throw error;
    }
}