import CardFilter from '../../components/CardFilter'

import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Search" />
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

export default SideBar
