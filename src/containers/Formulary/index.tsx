import { MainContainer, SaveButton, Title } from '../../styles'
import { Field } from '../../styles'
import { Form, Options } from './styles'

const Formulary = () => (
  <MainContainer>
    <Title as="h2">New Task</Title>
    <Form>
      <Field type="text" placeholder="Title" />
      <Field as="textarea" placeholder="Task Description" />
      <Options>
        <p>Priority</p>
        <input name="priority" type="radio" id="urgent" />{' '}
        <label htmlFor="urgent">Urgent</label>
        <input name="priority" type="radio" id="important" />{' '}
        <label htmlFor="important">Important</label>
        <input name="priority" type="radio" id="regular" />{' '}
        <label htmlFor="regular">regular</label>
      </Options>
      <SaveButton type="submit">Add Task</SaveButton>
    </Form>
  </MainContainer>
)

export default Formulary
