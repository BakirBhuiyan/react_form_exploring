import './App.css'
import ActionForm from './components/ActionFrom/ActionForm'
import ControlledField from './components/ControlledField/ControlledField'
import SimpleForm from './components/simpleForm/SimpleForm'
import UncontrolledField from './components/uncobtroledField/UncontrolledField'

function App() {

  return (
    <>
      <h1>Hello From React Form</h1>
      {/* <SimpleForm /> */}
      {/* <ActionForm /> */}
      {/* <ControlledField /> */}
      <UncontrolledField />
    </>
  )
}

export default App
