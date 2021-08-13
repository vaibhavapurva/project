import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getUsers, deleteUser } from "../Service/api";



const AllUsers = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("run use Effect")
        dispatch(getUsers());

    }, [])
    const userss = useSelector((state => state.users));

    // const getAllUsers= async()=>{
    //     const response = await getUsers();
    //     console.log(response.data);
    //     setUsers(response.data)
    // }
    const onClickDelete = async (Id) => {
        await deleteUser(Id);

    }
    const onClickRecord = (IdUpdate) => {
        history.push(`/edit/${IdUpdate}`)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> id </th>
                        <th>Name</th>
                        <th>email</th>
                        <th>City</th>
                        <th>Field</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userss.map(user => (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.city}</td>
                                <td>{user.field}</td>
                                <td>{user.password}</td>
                                <td> <button onClick={() => onClickRecord(user._id)}> Edit </button></td>
                                <td> <button variant="dark" onClick={() => onClickDelete(user._id)}> Delete </button></td>
                            </tr>
                        ))
                    }






                </tbody>
            </table>


        </div>
    );

}

export default AllUsers;