import React, { useState, useEffect} from 'react';
import useFetch from "../modules/useFetch";
import ProductComponent from "../components/ProductComponent";


const HomeComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState([]);
  const { data, error, loading } = useFetch(`https://fakestoreapi.com/products`);
  
  useEffect(() => {
    if (data) { 
      setSearchData(data.filter((item) => item.title.toLowerCase().includes(searchValue)));
    }
    console.log(searchData, data)
  }, [searchValue, data]); 

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <main>
      <div className="container text-center my-3">
        <input onChange={(event) => setSearchValue(event.target.value)} type="text" name='search' placeholder='Search for item type anything' className='bg-secondary text-light py-1 px-3 w-25 rounded search' />
      </div>
      <div className='d-flex flex-wrap my-5 gap-3 justify-content-center'>
        {(searchValue.trim() !== '')
          ?((searchData.length > 0)?searchData.map((item) => (<ProductComponent key={item.id} post={item}></ProductComponent>)):<h3 className='text-secondary fs-25'>Not Found</h3>)
          :data.map((item) => (<ProductComponent key={item.id} post={item}></ProductComponent>))
}
      </div>
    </main>
  )
}

export default HomeComponent
