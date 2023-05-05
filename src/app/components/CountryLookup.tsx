interface IpResponse {
  status: string;
  country: string;
  countryCode: string
}

const getCountry = async () => {
  const res = await fetch('http://ip-api.com/json')

  const data: IpResponse = await res.json()
  return data;
}

export default async function CountryLookup() {
  const countryData = await getCountry()
  return (
    <div>{countryData.country}</div>
  )
}
