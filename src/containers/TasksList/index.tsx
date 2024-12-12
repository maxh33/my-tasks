import Task from '../../components/Task'
import { Container } from './styles'

const tasks = [
  {
    title: 'Estudy python',
    description: 'Estudy python for 1 hour',
    priority: 'High',
    status: 'To Do'
  },
  {
    title: 'Estudy typescript',
    description: 'Estudy typescript for 1 hour',
    priority: 'High',
    status: 'To Do'
  },
  {
    title: 'Estudy javascript',
    description: 'Estudy javascript for 1 hour',
    priority: 'High',
    status: 'To Do'
  },
  {
    title: 'Estudy react',
    description: 'Estudy react for 1 hour',
    priority: 'High',
    status: 'To Do'
  },
  {
    title: 'Estudy next',
    description: 'Estudy next for 1 hour',
    priority: 'High',
    status: 'To Do'
  },
  {
    title: 'Estudy node',
    description: 'Estudy node for 1 hour',
    priority: 'High',
    status: 'To Do'
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
