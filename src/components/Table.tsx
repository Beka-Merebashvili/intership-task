import {FiEdit , FiTrash2} from "react-icons/fi"

export default function Table(props : UsersPropsType) {
    return (
        <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td className="flex gap-5">
                <FiEdit cursor="pointer" className="text-blue-500" size={22} />
                <FiTrash2 cursor="pointer" className="text-red-500" size={22} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}