import React, { useState } from 'react'
import classes from './App.module.css'

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
const ACTIONS = ['+', '-', '=', 'c',]

function calcResult(enteredNumbers) {
	let result = 0
	let numbers = enteredNumbers.split('')

	numbers.forEach((elem, index) => {

		let indexOperator = null

		if (elem === '+' || elem === '-') {
			indexOperator = index
		}

		let operand1 = numbers.slice(0, indexOperator)
		let operand2 = numbers.slice(indexOperator + 1)

		if (elem === '+') {
			result = Number(operand1.join('')) + Number(operand2.join(''))
		}

		if (elem === '-') {
			result = Number(operand1.join('')) - Number(operand2.join(''))
		}
	})

	return result
}

export default function App() {

	const [digit, setDigit] = useState('') // набраные числа
	const [isEqualityFlag, setIsEqualityFlag] = useState(false) // нажат символ "=" или нет

	function handleClick(elem) {

		setDigit(prev => prev + elem)

		if (elem === '=') {
			try {
				const result = calcResult(digit)
				setDigit(result)
				setIsEqualityFlag(true)
			} catch (error) {
				setDigit('Ошибка')
			}

		} else if (elem === 'c') {
			setIsEqualityFlag(false)
			setDigit('0')
		} else if (elem === '+' || elem === '-') {
			setIsEqualityFlag(false)
		}

		if (digit[0] === '0') {
			setDigit(elem)
		}
	}

	return (
		<div className={classes.calculate}>
			<div
				className={!isEqualityFlag ? `${classes.screen}` : `${classes.screen} ${classes.red}`}>
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