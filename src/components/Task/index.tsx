import { useState } from 'react'

import * as S from './styles'

import * as enums from '../../utils/enums/Task'

import { remover } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { useDispatch } from 'react-redux'

type Props = TaskClass

const Task = ({ description, priority, status, title, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {/* Ternary operator render buttons based on isEditing state */}
        {isEditing ? (
          <>
            <S.SaveButton>Save</S.SaveButton>
            <S.CancelButton onClick={() => setIsEditing(false)}>
              Cancel
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Edit</S.Button>
            <S.CancelButton onClick={() => dispatch(remover(id))}>
              Remove
            </S.CancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
