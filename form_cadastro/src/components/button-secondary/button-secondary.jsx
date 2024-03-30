/* eslint-disable react/prop-types */
import "./style.css"

const ButtonSecondary = ({ name, onClick }) => {
  return (
    <button className="button-secondary" onClick={onClick}>{name}</button>
  )
}

export default ButtonSecondary;