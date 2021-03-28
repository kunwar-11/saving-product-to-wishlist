import React , {useState , useEffect} from 'react'
import axios from 'axios'
function App() {
    const [products , setProducts] = useState([])
    const [isLoaded , setLoaded] = useState('loaded')
    const fetchProducts = async () => {
        try {
            setLoaded('not-loaded')
            const {data : {products}} = await axios.get('/api/products');
            console.log(products)
            setProducts(prev => prev.concat(products))
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoaded('loaded')
        }
    }
    useEffect(() => {
        fetchProducts()
    }
     , []);
  return (
    <div className="App">
        <h1>SportX</h1>
        {isLoaded === 'not-loaded' ? <h3>Loading.....</h3> : products.map(product => <li>{product.name}</li>) }
    </div>
  );
}

export default App;