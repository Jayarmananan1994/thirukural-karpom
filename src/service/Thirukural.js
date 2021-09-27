import thirukurals from "../data/thirukurals.json"

const getAdhikarams = (paal) => {
  return thirukurals.reduce((accumulator, thirukural) => {
    if (thirukural.paal === paal) {
      accumulator.push(`${thirukural.aadhikaramNo} - ${thirukural.adhikaramName}`)
    }
    return accumulator
  }, [])
}

export { getAdhikarams }