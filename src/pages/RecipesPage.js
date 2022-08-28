import React, {useState} from 'react'
import styled from 'styled-components'
import { useReceipesContext } from '../contexts/receipes_context'
import Loading from '../components/Loading'
import Config from '../components/Config'

const RecipesPage = () => {
<<<<<<< HEAD
 
  const {products_loading: loading, products_error: error, products} = useReceipesContext()
  
   const [dataSet, setDataSet] = useState(products)

   let storedData = JSON.parse(localStorage.getItem("storedData"));
=======
  const {
    products_loading: loading,
    products_error: error,
    products,
  } = useReceipesContext()
  
>>>>>>> 2fdadc3635b4476b581b9ca874998f3fc0d23398

   if(storedData !== null || storedData !== undefined){
      setDataSet(storedData.data)
   }

   if(storedData.data !== null || storedData.data !== undefined){
    setDataSet(storedData.data)
  }
  
  if (loading) {
    return <Loading />
  }

  if(error){
    return (
      <div>Try again....</div>
    )
  }

  if(!products.length){
     return <Loading />
  }
  return (
    <Wrapper>
      <div className='top'>
        <h1>Recipes</h1>
        <p className="underline"></p>
        <div className="oga">
<<<<<<< HEAD
          {dataSet.slice(2, 34).map((product, index) => {
=======
          {products.slice(2, 34).map((product, index) => {
>>>>>>> 2fdadc3635b4476b581b9ca874998f3fc0d23398
            return <Config key={index} {...product} />;
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 1rem;
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 5%;
  .top h1 {
    font-size: 2.6rem;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.125rem;
    color: #222;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
  }

  .top .underline {
    width: 6rem;
    height: 0.25rem;
    background: #222;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3%;
    opacity: 0.8;
  }
  .oga {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    margin-top: 4%;
  }

  @media screen and (max-width: 1273px) {
    .oga {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  .top h1 {
    font-size: 2rem;
  }
`

export default RecipesPage
