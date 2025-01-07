import { useDispatch, useSelector } from 'react-redux'
import { changeCriteria } from '../../store/reducers/filter'
import { RootReducer } from '../../store'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

export type Props = {
  label: string
  criteria: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ label, criteria, value }: Props) => {
  const dispach = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const isFilterActive = () => {
    const sameCriteria = filter.criteria === criteria
    const sameValue = filter.value === value

    return sameCriteria && sameValue
  }

  const taskCounter = () => {
    if (criteria === 'all') return tasks.items.length
    if (criteria === 'priority') {
      return tasks.items.filter((item) => item.priority === value).length
    }
    if (criteria === 'status') {
      return tasks.items.filter((item) => item.status === value).length
    }
  }

  const filterTasks = () => {
    dispach(
      changeCriteria({
        criteria,
        value
      })
    )
  }
  const counter = taskCounter()
  const ativo = isFilterActive()

  return (
    <S.Card ativo={isFilterActive()} onClick={filterTasks}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default CardFilter
