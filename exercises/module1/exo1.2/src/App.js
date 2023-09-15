import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
      {props.part} {props.exercises}
      </p>
    </div>
  )
}


const Content = (props) => {
  return(
    <div>
      <p>
       <Part part ={props.contPart1} exercises = {props.contExo1} />
       <Part part ={props.contPart2} exercises = {props.contExo2} />
       <Part part ={props.contPart3} exercises = {props.contExo3} />
      </p>
    </div>
  )
}

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


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
     <Header course= {course} />
     <Content contPart1 = {part1} contExo1 = {exercises1}
     contPart2 = {part2} contExo2 = {exercises2}
     contPart3 = {part3} contExo3 = {exercises3} />
     <Total number1 = {exercises1} number2={exercises2} number3={exercises3} />
    </div>
  )
}


export default App