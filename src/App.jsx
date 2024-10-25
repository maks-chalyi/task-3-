import React, { useState } from 'react'
import classes from './App.module.css'

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
const ACTIONS = ['+', '-', '=', 'c',]

export default function App() {

	const [digit, setDigit] = useState('') // набраные числа
	const [isEquaiiyFlag, setIsEquaiiyFlag] = useState(false) // нажат сивол "=" или нет

	function handleClick(elem) {


		if (elem === '=') {
			const result = eval(digit)
			setIsEquaiiyFlag(true)
			setDigit(`${result}`)

		} else if (elem === 'c') {
			setDigit('')
			setIsEquaiiyFlag(false)
		} else {
			setDigit(currentNum => currentNum + elem)
			setIsEquaiiyFlag(false)
		}
	}

	console.log(digit)

	return (
		<div className={classes.calculate}>
			<div
				className={!isEquaiiyFlag ? `${classes.screen}` : `${classes.screen} ${classes.red}`}>
				{digit || '0'}
			</div>
			<div className={classes.buttons}>

				{NUMS.map(elem => {
					return (
						<button
							onClick={() => handleClick(elem)}
							key={elem}>
							{elem}
						</button>
					)
				})}

				{ACTIONS.map(elem => {
					return (
						<button
							key={elem}
							onClick={() => handleClick(elem)}>
							{elem}
						</button>
					)
				})}

			</div>
		</div>
	)
}