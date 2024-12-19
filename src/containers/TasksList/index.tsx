import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

  return (
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
}

export default TasksList
