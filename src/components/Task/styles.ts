import styled from 'styled-components'
import variables from '../../styles/variables'

import * as enums from '../../utils/enums/Task'
import { Button } from '../../styles'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameter: 'priority' | 'status'
}

function resturnBackgroundColor(props: TagProps): string {
  if (props.parameter === 'priority') {
    if (props.priority === enums.Priority.URGENT) return variables.red
    if (props.priority === enums.Priority.IMPORTANT) return variables.yellow2
  } else {
    if (props.status === enums.Status.TO_DO) return variables.yellow
    if (props.status === enums.Status.DONE) return variables.green
  }

  return variables.regular
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => resturnBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const CancelButton = styled(Button)`
  background-color: ${variables.red};
`
