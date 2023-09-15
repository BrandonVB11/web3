import React from 'react'

import Header from 'components/Header/Header'
import Content from 'components/Content/Content'
import Total from 'components/Total/Total'
import './App.css'
import logo from 'img/vinci.png'


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
    <img src={logo} alt="vinci" />
     <Header course= {course} />
     <Content contPart1 = {part1} contExo1 = {exercises1}
     contPart2 = {part2} contExo2 = {exercises2}
     contPart3 = {part3} contExo3 = {exercises3} />
     <Total number1 = {exercises1} number2={exercises2} number3={exercises3} />
    </div>
    )
}


export default App