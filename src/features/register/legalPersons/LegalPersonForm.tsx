import { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
import { stateList } from '../../../app/models/Consts/StateList';

const options = stateList;

function handleSubmit(){

}

function LegalPersonForm() {
    return (
        <Segment clearing>
        <Form onSubmit={handleSubmit} autoCOmplete='off'>
            <Form.Group widths='equal'>
                <Form.Input fluid label='CNPJ' placeholder='CNPJ' />
                <Form.Input fluid label='Fantasia' placeholder='Fantasia' />
                <Form.Input fluid label='Razão Social' placeholder='Razão Social' />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Inscrição Estadual' placeholder='Inscrição Estadual' />
                <Form.Input fluid label='Email' placeholder='Email' />
                <Form.Input fluid label='Telefone' placeholder='Telefone' />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input fluid label='CEP' placeholder='CEP' />
                <Form.Input fluid label='Cidade' placeholder='Cidade' />
                <Form.Input fluid label='Bairro' placeholder='Bairro' />
                <Form.Select fluid label='UF' placeholder='UF' options={options} />
                <Form.Input fluid label='Logradouro' placeholder='Logradouro' />
            </Form.Group>            
            <Form.TextArea label='Observação' placeholder='Observação' />
            <Button floated='right' type='submit' positive content='Salvar'/>
            <Button floated='left' type='button' negative content='Cancelar'/>
        </Form>    
        </Segment>
        
    )
}

export default LegalPersonForm
