const Total = (props) => {
  const totauxExo = props.number1 + props.number2 + props.number3
  return (
    <p>
      Number of exercises {totauxExo}
    </p>
  )
}

export default Total