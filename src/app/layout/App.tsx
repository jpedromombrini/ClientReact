import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { LegalPerson } from '../models/legalPerson';
import agent from '../api/agent';
import PersonList from '../../features/register/persons/PersonList';
import PersonForm from '../../features/register/persons/PersonForm';
import LoadingComponent from './LoadingComponent';

function App() {
  const [legalPersons, setLegalPersons] = useState<LegalPerson[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    agent.LegalPersons.list()
      .then(response => {
        const result = response;
        setLegalPersons(result.value);    
        setLoading(false);      
      });
  }, [])

  if(loading) return <LoadingComponent content='Carregando dados'/>
  return (        
      <Container style={{marginTop: '4rem'}}>
        {/* <PersonForm/> */}
        <PersonList legalPersons={legalPersons}/>
      </Container>
  );
}

export default App;
