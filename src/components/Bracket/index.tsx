import { CSSProperties, FC, PropsWithChildren } from 'react'
import { BracketTypes } from '../../_stores/bracketStore'

interface BracketProps {
  duration: number
  start: number
  stop: number
  label: string
  type: BracketTypes
}

const Bracket: FC<PropsWithChildren<BracketProps>> = ({
  duration,
  start,
  stop,
  label,
  type,
}) => {
  return (
    <div className={type}>
      <div>{label}</div>
      <div>{duration}</div>
      <div>{start}</div>
      <div>{stop}</div>
    </div>
  )
}

export default Bracket
