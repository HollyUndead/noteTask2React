import * as NoteActionCreators from './note'
import * as TodoActionCreators from './todo'

export default {
    ...TodoActionCreators,
    ...NoteActionCreators
}