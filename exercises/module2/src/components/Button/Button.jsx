/* eslint-disable */

const Button = ({ changeCount, text, delta }) => {
    const handleClick = (e) =>{
        const deltaAttribut = e.target.dataset.delta;
        const delta = parseInt(deltaAttribut);
        changeCount(delta);
    }
   return(
        <button onClick={handleClick} data-delta={delta}>{text}</button>
   )
}

export default Button