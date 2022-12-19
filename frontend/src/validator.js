export default function userFormValidator(user)  {

    if (!Object.values(user).every(el => el)) {
        alert('Fill all required data')
        return false
    }

    const countries = ['Russia', 'Australia', 'USA']

    if (!countries.includes(user.country)) {
        alert('Select: Russia or USA or Australia')
        return false
    }

    if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email))) {
        alert('Email is not valid')
        return false
    }

    return true
}