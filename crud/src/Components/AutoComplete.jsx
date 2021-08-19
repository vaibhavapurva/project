//  import ReactAutocomplete from "react-autocomplete";
// // import { ReactAutocompleteSearch } from 'react-search-autocomplete';
// import { ReactAutocompleteSearch} from 'react-search-autocomplete';

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from "react-router-dom";
// import { getUsers } from "../Service/api";

// const AutoComplete = ()=>{

//     // const dispatch = useDispatch();
//     // const history = useHistory();
//     // useEffect(() => {
//     //     console.log("run use Effect")
//     //     dispatch(getUsers());

//     // }, [])
//     const userss = useSelector((state => state.users));
//     console.log(userss)
//     const handleOnSearch = (items) => {
//         // dispatch(search(Search))
//         console.log("helloo");
//         console.log(items);

//     }
//     const handleOnHover = (result) => {
//         console.log(result)
//       }
//     return(
//         <>
//         <ReactAutocomplete
//         items={userss}
//         shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
//         getItemValue={item => item.name}
//         renderItem={(item, highlighted) =>
//           <div
//             key={item.id}
//             style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
//           >
//             {item.label}
//           </div>
//         }
//         // value={this.state.value}
//         // onChange={e => this.setState({ value: e.target.value })}
//         // onSelect={value => this.setState({ value })}
//       />

//       {/* <input type="text" onChange={e=>onChangeHandler(e.target.value)} />
//       {userss && userss.map((suggestion ,i)=><div
//            key={i}> {suggestion.email}</div>)} */}


//         {/* <div className="App-header">

//         <div style={{ width: 400 }}>
//           <ReactAutocompleteSearch
//             items={userss}
//             onSearch={handleOnSearch}
//             onHover={handleOnHover}
//           />

//         </div>  

//     </div> */}



//     </>
//     )
// }


// export default AutoComplete;


// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { getUsers } from "../Service/api";
// import { useSelector , useDispatch} from "react-redux";
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

// const AutoComplete = () =>{
//     const dispatch=useDispatch();
//         useEffect(() => {
//         console.log("run use Effect")
//         dispatch(getUsers());

//     }, [])
//     const Search = useSelector((state => state.users));
//     console.log("aaaaaaaaa",Search);

//     const handleOnSearch = (items) => {
//         // dispatch(search(Search))
//         // console.log("helloo");
//         // console.log(items);
//     }
//     const handleOnHover = (result) => {
//         console.log("data",result.name);
//       }
//     return (


//         <div className="App-header">

//           <div  style={{ width: 200 }}>
//             <ReactSearchAutocomplete
//               items={Search}
//               onSearch={handleOnSearch}
//               onSelect={handleOnHover}
//               placeholder="Search Users"
//             />
//           </div>

//       </div>
//     )
// }
// export default AutoComplete;



import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUsers } from "../Service/api";
import { useSelector, useDispatch } from "react-redux";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { identifier } from "@babel/types";
import {searchData} from "../actions";


const AutoComplete = () => {
   
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("run use Effect")
        dispatch(getUsers());

    }, [])

    // const searchTerm = useSelector((state => state.search))
    // const onValueChange=(e)=>{
    //     dispatch(searchData({ ...searchTerm, [e.target.name]:e.target.value}))
    // }
    
    const Search = useSelector((state => state.users));
    // const SearchData =Search.map((data)=>(
    //   <div>{data.name}</div>
    // ))
    return (
        <>
            <h1> Search Users........</h1>
            <input type="text"
                name="search"
                placeholder="Search User...."
                // onChange={(e)=>onValueChange(e)}
                 onChange={event => { setSearchTerm(event.target.value) }}
            />
            {Search.filter((val) => {
                if (searchTerm == "") {
                    // return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val.name
                }
            }).map((val, key) => {
                console.log("awe",val)
                if (val.name === undefined) { return <div> Not Found</div> }
                else {
                    return <li> <div ><button>{val.name}</button> </div></li>
                }
            })}
            {/* {SearchData} */}
        </>

    )
}
export default AutoComplete;



// const AutoComplete = () => {

//     const dispatch = useDispatch();
//     const [searchuser, setSearchUser] = useState('');
//     const [filterrData, setfilterData] = useState([]);

//     const Search = useSelector((state) => state.users);
//     useEffect(() => {
//         console.log("data")
//         dispatch(getUsers());

//     }, [])

//     useEffect(() => {
//         console.log("filter")
//         setfilterData(Search.filter((user) => user.name.toLowerCase().includes(searchuser.toLowerCase())));

//     }, [searchuser])
//     return (
//         <div>
//             <h1>Search bar</h1>
//             <input type="text" placeholder="Serach..." onChange={(e) => { setSearchUser(e.target.value) }} />
//             {filterrData.length === 0 ? <div>No Record Found </div> : filterrData.map((val) => {
//                 if (filterrData.length == 0){
//                     console.log("ksk")
//                 }else{
//                 return <div key={val.id}>
//                     <p>{val.name}</p>
//                 </div>
//                 }
//             })}
//         </div>
//     )

// }
// export default AutoComplete;
