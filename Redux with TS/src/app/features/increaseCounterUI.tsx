import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { add } from './increaseCounter'

export default function Counter() {
  const count = useAppSelector(state => state.increase.counter)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(add(13))}
        >
          Increment
        </button>
        <span>{count}</span>
      </div>
    </div>
  )
}