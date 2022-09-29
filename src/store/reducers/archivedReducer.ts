import { ArchiveSwitcherType, ArchivedAction, Archived  } from "../../types/archived"

const initialState: Archived = {
    archived: false
}


export const ArchivedReducer = (state = initialState, action: ArchivedAction): Archived => {
    switch (action.type) {
        case ArchiveSwitcherType.SWITCH_ARCHIVE:
            if (action.archived === false){
                state.archived = true
                
            }else{
                state.archived = false
            }
            return {archived: state.archived}
        default:
            return state;
    }
}