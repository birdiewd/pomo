import { useStore } from '@tanstack/react-store'
import { CSSProperties, useEffect, useRef, useState } from 'react'
import bracketsStore, { setActiveBracket } from '../../_stores/bracketStore'

const Progress = () => {
  const [percent, setPercent] = useState(0)

  const isTesting = useStore(bracketsStore, (state) => state.isTesting)
  const brackets = useStore(bracketsStore, (state) => state.brackets)
  const activeBracket = useStore(bracketsStore, (state) => state.activeBracket)

  const audioRef = useRef<HTMLAudioElement>()

  useEffect(() => {
    audioRef.current.volume = isTesting ? 0.03 : 0.8
  }, [audioRef.current])

  useEffect(() => {
    if (brackets.length) {
      const initTime = Date.now()

      brackets
        .filter(
          (bracket) => bracket.start < initTime && bracket.stop > initTime
        )
        .forEach((bracket) => setActiveBracket(bracket))
    }
  }, [brackets])

  useEffect(() => {
    if (activeBracket) {
      const updateInterval = setInterval(() => {
        const nowTime = Date.now()

        if (nowTime > activeBracket.stop) {
          const newBracket = brackets.filter(
            (bracket) => bracket.start < nowTime && bracket.stop > nowTime
          )
          setActiveBracket(newBracket.pop() || undefined)
        }

        setPercent(
          Math.min(
            1,
            1 -
              (activeBracket.duration - (nowTime - activeBracket.start)) /
                activeBracket.duration
          )
        )
      }, 1000)

      return () => {
        setPercent(0)
        audioRef.current.play()
        clearInterval(updateInterval)
      }
    }
  }, [activeBracket])

  return (
    <div
      style={
        {
          '--percent': `${percent * 100}%`,
        } as CSSProperties
      }
    >
      <div
        style={{
          opacity: activeBracket ? 1 : 0,
          transition: 'opacity 80ms',
        }}
      >
        {Math.round(percent * 100)}%
      </div>
      <audio ref={audioRef} src="/public/car-warning-sound-189734.mp3" />
    </div>
  )
}

export default Progress
