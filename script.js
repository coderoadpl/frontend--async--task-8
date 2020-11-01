const promise1 = new Promise((resolve) => {
    setTimeout(
        // () => resolve('beer'),
        () => resolve(),
        1000
    )
})

console.log(promise1)

const promise2 = promise1.then((value) => {
    const valueUpperCase = value.toUpperCase()
    console.log(valueUpperCase)
    return value
})

console.log(promise2)

const promise3 = promise2.catch((error) => {
    console.error(error)
    return 'error caught!'
})

console.log(promise3)

const promise4 = promise2.catch(() => {
    throw new Error('Error in catch!')
})

console.log(promise4)

const promise5 = promise2.catch(() => {
    return new Promise((resolve, reject) => {
        reject('Rejected promise')
    })
})

console.log(promise5)

console.log('Before error')

setTimeout(
    () => console.log('After error'),
    2000
)