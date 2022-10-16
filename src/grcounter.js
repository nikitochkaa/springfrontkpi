export function goodRusCounter() {
    const itteratorRusni = 65000/235/24/60/60;
    const date = new Date('2022-02-24')
    const warTimeStemp = Math.floor(date.getTime() / 1000);
    const today = Math.floor(new Date().getTime() / 1000)
    return ((today - warTimeStemp) * itteratorRusni).toFixed(2)
}