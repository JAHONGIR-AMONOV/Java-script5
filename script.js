const visitors = prompt('How many people are there? (manager)')
const copacity = 10
const freePlaces = copacity - visitors

const name = prompt('name')

if(name[0].toLowerCase() === 'a') {
    const age = prompt('How old are you?')

    if(age >= 20 && age <= 40) {
        const cash = +prompt('How much money do u have?')

        if(cash >= 100) {
            const amountOfPeople = +prompt('How many people are going to enter?')

            if(amountOfPeople <=freePlaces) {
                alert('Welcome!')
            } else {
                alert('Sorry, there are not enough places')
            }
        } else {
            alert('Sorry you can not enter')
        }

    } else {
        alert('Sorry you can not enter')
    }

} else {
    alert('Sorry you can not enter')
}