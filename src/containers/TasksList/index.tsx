import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { term, criteria, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const tasksFilter = () => {
    let filerdTasks = items
    if (term !== undefined) {
      filerdTasks = filerdTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )
      if (criteria === 'priority') {
        filerdTasks = filerdTasks.filter((item) => item.priority === value)
      } else if (criteria === 'status') {
        filerdTasks = filerdTasks.filter((item) => item.status === value)
      }
      return filerdTasks
    } else {
      return items
    }
  }

  return (
    <Container>
      <p>2 tasks marked as: &quot;category&quot; e &quot;{term}&quot;</p>
      <ul>
        <li>{term}</li>
        <li>{criteria}</li>
        <li>{value}</li>
      </ul>
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
