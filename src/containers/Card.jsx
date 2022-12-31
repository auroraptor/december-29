import { connect } from "react-redux";
import CardComponent from "../components/Card";

export const Card = connect(
  (state) => ({
    card: state.card,
  }),
  {}
)(CardComponent);
