import * as NoteActionCreators from './note'
import * as ArchivedActionCreators from './archived'

export default {
    ...ArchivedActionCreators,
    ...NoteActionCreators
}