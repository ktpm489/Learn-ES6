// private method
const budget = () => {
    let balance = 0;
    let changeBal = (val)=> {
        return balance += val
    }
    const deposit = (x) => changeBal(x)
    const withdraw = (y) => changeBal(y)
    const check = () => balance
    return { deposit, withdraw , check}
}
export default budget