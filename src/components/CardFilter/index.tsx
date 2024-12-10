import * as S from './styles'

export type Props = {
  ativo?: boolean
  counter?: number
  label?: string
}

const CardFilter = ({ ativo, counter, label }: Props) => (
  <S.Card ativo={ativo}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{label}</S.Label>
  </S.Card>
)

export default CardFilter
