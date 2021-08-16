// // import ReactAutocomplete from "react-autocomplete";
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
//         {/* <ReactAutocomplete
//         items={[
//           { id: 'foo', label: 'vaibhav' },
//           { id: 'bar', label: 'Apurva' },
//           { id: 'baz', label: 'harsh' },
//         ]}
//         shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
//         getItemValue={item => item.label}
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
//       /> */}

//       {/* <input type="text" onChange={e=>onChangeHandler(e.target.value)} />
//       {userss && userss.map((suggestion ,i)=><div
//            key={i}> {suggestion.email}</div>)} */}


//         <div className="App-header">
        
//         <div style={{ width: 400 }}>
//           <ReactAutocompleteSearch
//             items={userss}
//             onSearch={handleOnSearch}
//             onHover={handleOnHover}
//           />
           
//         </div>  
    
//     </div>



//     </>
//     )
// }


// export default AutoComplete;


import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUsers } from "../Service/api";
import { useSelector , useDispatch} from "react-redux";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const AutoComplete = () =>{
    const dispatch=useDispatch();
        useEffect(() => {
        console.log("run use Effect")
        dispatch(getUsers());

    }, [])
    const Search = useSelector((state => state.users));
    console.log("aaaaaaaaa",Search);

    const handleOnSearch = (items) => {
        // dispatch(search(Search))
        // console.log("helloo");
        // console.log(items);
        

    }
    const handleOnHover = (result) => {
        console.log("data",result.name);
      }
    return (


        <div className="App-header">
        
          <div  style={{ width: 200 }}>
            <ReactSearchAutocomplete
              items={Search}
              onSearch={handleOnSearch}
              onSelect={handleOnHover}
              placeholder="Search Users"
            />
             
          </div>  
      
      </div>
    )
}
export default AutoComplete;