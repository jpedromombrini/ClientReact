import { Grid, Segment, Tab } from 'semantic-ui-react'
import { LegalPerson } from '../../../app/models/legalPerson'
import LegalPersonList from '../legalPersons/LegalPersonList'

interface Props{
    legalPersons: LegalPerson[];
}

function PersonList({legalPersons}: Props) {
    const panes = [
        { menuItem: 'Pessoa Jurídica', render: () => <Tab.Pane><LegalPersonList legalPersons={legalPersons}/></Tab.Pane> },
        { menuItem: 'Pessoa Física', render: () => <Tab.Pane></Tab.Pane> }
    ]
    return (
        <Segment>
            <h2>Lista de Pessoas</h2>
            <Grid>
                <Grid.Column width='16'>
                    <Tab panes={panes} />
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default PersonList
