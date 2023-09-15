import Part from "components/Part/Part"


const Content = (props) => {
    return(
      <div>
         <Part part ={props.contPart1} exercises = {props.contExo1} />
         <Part part ={props.contPart2} exercises = {props.contExo2} />
         <Part part ={props.contPart3} exercises = {props.contExo3} />
      </div>
    )
  }

export default Content
  