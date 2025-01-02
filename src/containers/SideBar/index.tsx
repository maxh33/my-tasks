import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

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
          <CardFilter label="pendent" counter={1} />
          <CardFilter label="done" counter={2} />
          <CardFilter label="urgent" counter={3} />
          <CardFilter label="important" counter={4} />
          <CardFilter label="regular" counter={5} />
          <CardFilter label="all tasks" counter={10} ativo />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
