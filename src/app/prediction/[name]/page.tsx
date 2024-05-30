const getPredictedAge = async(name:String) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`)
    return res.json()
}
const getPredictedGender = async(name:String) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    return res.json()
}
const getPredictedCountry = async(name:String) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`)
    return res.json()
}
interface Params {
    params: {
        name:string
    }
}
export default async function Page({params}:Params){
    const ageData = getPredictedAge(params.name)
    const genderData = getPredictedGender(params.name)
    const countryData = getPredictedCountry(params.name)
    const [age, gender, country] = await Promise.all([ageData, genderData, countryData])
    return (
        <div>
            <div>
                <div>Personal info</div>
                <div>Age: {age?.age}</div>
                <div>Gender: {gender?.gender}</div>
            </div>
        </div>
    )
}