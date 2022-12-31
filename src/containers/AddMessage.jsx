import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../store/actions/message'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author, date) => {
    dispatch(addMessage(message, author, date))
  },
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)
