/**
 *
 * Neural Line
 * Gambler js
 *
 *
 * Late night challenge 2019
 *
 * @format
 * @author Darik Hart
 * @git https://github.com/neuralline
 */

//@ts-check
import {eligible, handleAvailableCards, handleInformation} from './components/functions'

const root = document.getElementById('root')
const submit = document.getElementById('submit')
const info = document.getElementById('info')

const handleUserForm = e => {
  e.preventDefault()
  const formData = document.forms['user-form']
  const user = {
    id: 0,
    name: formData.elements.name.value || 'unknown',
    dob: formData.elements.dob.value || '00/00/0000',
    status: formData.elements.status.value || 'unemployed',
    income: formData.elements.income.value || 0,
    number: formData.elements.number.value || 0,
    postcode: formData.elements.postcode.value || ''
  }

  root.innerHTML = ''
  const userCards = eligible(user)
  info.innerText = handleInformation(userCards)
  root.appendChild(handleAvailableCards(userCards))
  return false
}

submit.addEventListener('click', handleUserForm)

console.log('wow')
