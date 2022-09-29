export interface Archived {
    archived: boolean
}

export enum ArchiveSwitcherType {
    SWITCH_ARCHIVE = 'SWITCH_ARCHIVE'
}

interface SwitchArchive{
    type: ArchiveSwitcherType.SWITCH_ARCHIVE,
    archived: boolean
}




export type ArchivedAction = SwitchArchive