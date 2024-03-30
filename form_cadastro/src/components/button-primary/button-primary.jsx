/* eslint-disable react/prop-types */
import "./style.css"

const ButtonPrimary = ({ name, onClick }) => {
  return (
    <button className="button-primary" onClick={onClick}>{name}</button>
  )
}

export default ButtonPrimary;