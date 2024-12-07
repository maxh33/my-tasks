import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const CardFilter = (props: Props) => (
  <S.Card>
    <S.Counter> 3</S.Counter>
    <S.Label>to do</S.Label>
  </S.Card>
)

export default CardFilter
