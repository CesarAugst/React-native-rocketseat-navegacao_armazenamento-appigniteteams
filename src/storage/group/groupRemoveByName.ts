import AsyncStorage from "@react-native-async-storage/async-storage";
import {GROUP_COLECTION, PLAYER_COLECTION} from "@storage/storageConfig";

import {groupsGetAll} from "@storage/group/groupsGetAll";

export async function groupRemoveByName(groupDeleted: string){
    try{
        const storedGroups = await groupsGetAll();
        const groups = storedGroups.filter(group => group !== groupDeleted);

        await AsyncStorage.setItem(GROUP_COLECTION, JSON.stringify(groups))
        await AsyncStorage.removeItem(`${GROUP_COLECTION}-${groupDeleted}`, )
    }catch(error){

    }
}