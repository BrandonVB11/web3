const Total = (props) =>{
    const totauxExo = props.number1+props.number2+props.number3
    return(
      <div>
        <p>
        Number of exercises {totauxExo} 
        </p>
      </div>
    )
  }

export default Total