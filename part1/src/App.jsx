const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p> Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      greeting app created with Love by <a href='https://github.com/RamRefai'>Ram Refai</a>
    </div>
  )
}

const App = () => {

const name='Peter'
const age = 10

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Ram" age={5+16} />
      <Hello name={name} age={age} />
      <Footer/>
    </div>
  )
}
export default App