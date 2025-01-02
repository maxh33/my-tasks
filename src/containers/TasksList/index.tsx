import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const tasksFilter = () => {
    return items.filter(
      (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <p>2 tasks marked as: &quot;category&quot; e &quot;{term}&quot;</p>
      <ul>
        {tasksFilter().map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
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
