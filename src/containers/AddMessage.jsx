import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../store/actions/message'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  },
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)
