import React from 'react'
import BrandsRow from '../components/BrandsRow'
import HomeSlider from '../components/HomeSlider'
import MoviesRow from '../components/MoviesRow'

export default function Home() {
  return (
    <>
      <HomeSlider />
      <BrandsRow />
      <MoviesRow />
    </>
  )
}
