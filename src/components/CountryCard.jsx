import React from 'react'

const CountryCard = ({country}) => {
    const {name, flag, cca3:code} = country
  return (
    <p>{name.common} {flag} {code}</p>
  )
}

export default CountryCard