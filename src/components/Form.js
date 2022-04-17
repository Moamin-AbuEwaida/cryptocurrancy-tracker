import React ,{useState} from 'react'

const Form = () => {
    const [search, setSearch] = useState('');

    const handleChange = e=>{
        // e.preventDefault();
        setSearch(e.target.value);
    }
  return (
    <form>
        <input 
        type="text" 
        placeholder="Search" c
        lassName="coin-input" 
        onChange={handleChange }
        />
    </form>
  )
}

export default Form