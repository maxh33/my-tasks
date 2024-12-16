import Task from '../../components/Task'
import { Container } from './styles'
import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'Estudy python',
    description: 'Estudy python for 1 hour',
    priority: enums.Priority.URGENT,
    status: enums.Status.TO_DO
  },
  {
    title: 'Estudy typescript',
    description: 'Estudy typescript for 1 hour',
    priority: enums.Priority.NORMAL,
    status: enums.Status.TO_DO
  },
  {
    title: 'Estudy javascript',
    description: 'Estudy javascript for 1 hour',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.DONE
  },
  {
    title: 'Estudy react',
    description: 'Estudy react for 1 hour',
    priority: enums.Priority.NORMAL,
    status: enums.Status.TO_DO
  },
  {
    title: 'Estudy next',
    description: 'Estudy next for 1 hour',
    priority: enums.Priority.URGENT,
    status: enums.Status.TO_DO
  },
  {
    title: 'Estudy node',
    description: 'Estudy node for 1 hour',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.DONE
  }
]

const TasksList = () => (
  <Container>
    <p>2 tasks marked as: &quot;category&quot; e &quot;terms&quot;</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.title}>
          <Task
            description={t.description}
            title={t.title}
            status={t.status}
            priority={t.priority}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default TasksList
