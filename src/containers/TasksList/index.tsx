import Task from '../../components/Task'
import { Container } from './styles'

const TasksList = () => (
  <Container>
    <p>2 tasks marked as: &quot;category&quot; e &quot;terms&quot;</p>
    <ul>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </Container>
)

export default TasksList
