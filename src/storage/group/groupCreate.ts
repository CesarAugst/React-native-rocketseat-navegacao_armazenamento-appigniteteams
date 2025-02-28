import AsyncStorage from "@react-native-async-storage/async-storage";
import {GROUP_COLECTION} from "@storage/storageConfig";
import {groupsGetAll} from "@storage/group/groupsGetAll";

export async function groupCreate(newGroup: string){
    try {
        const storedGroups = await groupsGetAll();

        await AsyncStorage.setItem(GROUP_COLECTION, JSON.stringify([...storedGroups, newGroup]));
    }catch (error) {
        throw error;
    }
}

