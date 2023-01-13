import React,{useState,useEffect} from 'react'

export default function ApiFetch() {
    const [data, takaData] = useState([])
    useEffect(()=>{
        fetch("https://gorest.co.in/public/v2/users")
        .then(respond=>respond.json())
        .then(result => takaData(result))
    },[])
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>email</th>
                <th>gender</th>
            </tr>
        </thead>
        <tbody>
            {data.map(item=>(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
