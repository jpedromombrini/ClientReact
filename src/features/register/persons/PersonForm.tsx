import { Segment, Tab } from 'semantic-ui-react'
import LegalPersonForm from '../legalPersons/LegalPersonForm'
import PhysicalPersonForm from '../physicalPersons/PhysicalPersonForm'

function PersonForm() {
    const panes = [
        {menuItem: 'Pessoa Jurídica', render: ()=> <Tab.Pane><LegalPersonForm/></Tab.Pane>},
        {menuItem: 'Pessoa Física', render: ()=> <Tab.Pane><PhysicalPersonForm/></Tab.Pane>}
    ]
    return (
    <Segment>
        <h2>Cadastro de Pessoas</h2>
        <Tab panes={panes}/>
    </Segment>
    )
}

export default PersonForm
