import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container, Results } from './styles'
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

  const showFilteredResults = (quantity: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (criteria === 'all') {
      message = `${quantity} task(s) found(s) as: all ${complement}`
    } else {
      message = `${quantity} task(s) found(s) as: "${`${criteria}=${value}`}" ${complement}`
    }

    return message
  }

  const tasks = tasksFilter()
  const message = showFilteredResults(tasks.length)

  return (
    <Container>
      <Results>{message}</Results>
      <ul>
        {tasks.map((t) => (
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
