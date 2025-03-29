import { scan } from 'react-scan'
import { FC, useState } from 'react'
import styled from 'styled-components'
import Progress from './components/Progress'
import { useStore } from '@tanstack/react-store'
import bracketsStore from './_stores/bracketStore'

scan({ enabled: false })

const StyledWrapper = styled.div`
  padding: 0.5rem;

  display: grid;
  gap: 0.25rem;

  height: 100lvh;

  transition: background-color 180ms;

  background-color: #858585;

  &.work {
    background-color: #ffab91;
  }

  &.break {
    background-color: #7bff7b;
  }

  &.lunch {
    background-color: #2ee0ff;
  }

  &.wrap {
    background-color: #ffe957;
  }
`

const App: FC = () => {
  const [enabled, setEnabled] = useState(false)
  const activeBracket = useStore(bracketsStore, (state) => state.activeBracket)
  const brackets = useStore(bracketsStore, (state) => state.brackets)

  return enabled ? (
    <StyledWrapper className={activeBracket?.type}>
      <Progress />
      <div>
        {brackets.map((bracket) => (
          <pre
            style={{
              opacity: bracket === activeBracket ? 1 : 0.25,
              transition: 'opacity 180ms',
            }}
          >
            {/* {JSON.stringify(bracket, null, 2)} */}
            {bracket.label} - {bracket.duration}
          </pre>
        ))}
      </div>
    </StyledWrapper>
  ) : (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        height: '100lvh',
      }}
    >
      <button onClick={() => setEnabled(true)}>START</button>
    </div>
  )
}

export default App
