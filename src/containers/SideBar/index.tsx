import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'

import * as S from './styles'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Search"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <CardFilter
            value={enums.Status.TO_DO}
            criteria="status"
            label="pendent"
          />
          <CardFilter
            value={enums.Status.DONE}
            criteria="status"
            label="done"
          />
          <CardFilter
            value={enums.Priority.URGENT}
            criteria="priority"
            label="urgent"
          />
          <CardFilter
            value={enums.Priority.IMPORTANT}
            criteria="priority"
            label="important"
          />
          <CardFilter
            value={enums.Priority.NORMAL}
            criteria="priority"
            label="regular"
          />
          <CardFilter criteria="priority" label="all tasks" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
