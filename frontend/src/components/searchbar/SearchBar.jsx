import { useState } from "react";

const SearchBar = () =>{

    const [searchItem , setSearchItem] = useState("");

    const onSearchItemChange = (event) => {
        setSearchItem(event.target.value);
        console.log(searchItem);
    }

    const getData = (event) => {
        console.log("on keyup event of textbox");
    }

    const handleSearch = () => {
        
        console.log('search button is clicked', this);
    }

    return (
        <>
            <h2>type something to search</h2>
            <input type = "text" placeholder = "Enter value ...." onKeyUp= {getData} onClick = {onSearchItemChange}/>
           {/* <input type = "button" onClick = {handleSearch}>Search</input> */}
            <button onClick = {handleSearch}>Search</button>
        </>
    )
}

export default SearchBar;