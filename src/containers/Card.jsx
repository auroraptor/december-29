import { connect } from 'react-redux'
import CardComponent from '../components/MessagesList'

export const Card = connect(state => ({
  card: state.card
}), {})(CardComponent)