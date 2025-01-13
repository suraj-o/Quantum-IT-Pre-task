import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { DateToString } from "@/util/dateConvertor"
import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

interface User{
  _id:string
  name:string,
  email:string,
  Date_Of_Birth:Date,
  username:string,
  createdAt:Date,
  updateAt:Date,
}

const Home = () => {
  const [users,setUsers]= useState<User[]>([
    // {
    //   name:"",
    //   username:"",
    //   email:"",
    //   Date_Of_birth:new Date(Date.now()),
    //   createdAt:new Date(),
    //   UpdateAt:new Date()
    // }
  ])
  const [loading,setLoading]=useState<boolean>(false);




  useEffect(() => {

    (
      async function(){
        try {
          setLoading(true)
          const {data:rawData} = await axios.get("http://localhost:3000/user/alluser",
            {
              headers:{
                "Authorization":`Bearer ${localStorage.getItem("authid")}`
              }
            }
          )
          const {data} = rawData;
          setUsers(prev=>[...data])
          setLoading(false);
          toast.success("User Fetched")

        } catch (error) {
          let  data = (error as AxiosError).response!.data
          toast.error((data as {success:boolean,message:string}).message)
        }
      }
    )()
   
  
    return () => {
      setUsers([])
    }
  }, [])
  

  return (
    <Table className="max-w-5xl mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead>S.No</TableHead>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>email</TableHead>
          <TableHead className="text-right">DOB</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user:User,index:number) => (
          <TableRow key={user.email}>
            <TableCell>{index+1}</TableCell>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-right">{DateToString(user.Date_Of_Birth)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Home