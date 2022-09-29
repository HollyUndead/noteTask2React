import {Dispatch} from 'redux'
import { ArchivedAction, ArchiveSwitcherType } from '../../types/archived'


export function SwitcherArchived(arc: boolean){
    return (dispatch: Dispatch<ArchivedAction>) => {
        dispatch({type: ArchiveSwitcherType.SWITCH_ARCHIVE, archived: arc})
    }
}