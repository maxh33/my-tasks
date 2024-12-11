import * as S from './styles'

const Task = () => (
  <S.Card>
    <S.Title>Task Name</S.Title>
    <S.Tag>important</S.Tag>
    <S.Tag>pendent</S.Tag>
    <S.Description />
    <S.ActionBar>
      <S.Button>edit</S.Button>
      <S.Button>remove</S.Button>
    </S.ActionBar>
  </S.Card>
)

export default Task
