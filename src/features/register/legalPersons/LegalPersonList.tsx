import { Item } from 'semantic-ui-react'
import { LegalPerson } from '../../../app/models/legalPerson'

interface Props{
    legalPersons: LegalPerson[];
}

function LegalPersonList({legalPersons}: Props) {
    return (        
        <Item.Group divided>
        { legalPersons.map(legalPerson => (
             <Item key={legalPerson.id}>
              <Item.Content>
                  <Item.Header as='a'>{legalPerson.companyName}</Item.Header>
                  <Item.Meta>{legalPerson.cnpj}</Item.Meta>
              </Item.Content>  
              </Item>                 
         ))}
    </Item.Group>
    )
}

export default LegalPersonList
