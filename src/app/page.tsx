import Slider from "./components/Slider"
import ProductList from "./components/ProductList"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div>
        <ProductList/>
      </div>
    </div>
  )
}

export default HomePage