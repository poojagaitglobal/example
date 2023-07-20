import {useSelector} from "react-redux";

export function UserList(){
 
   const users = useSelector((state) => state);
   console.log(users)
   return (
                 
                <tbody>
                {users?.map(({ id, name, email }, i) => (
                <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                    <button>Delete</button>
                    <button>Edit</button>
                    </td>
                </tr>
                ))}
            </tbody>
 





   )




}
export default UserList;
