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
  const [users,setUsers]= useState<User[]>([])

  useEffect(() => {
    let isMounted =true;
    const fetchUsers = async () => {
      try {
        const authToken = localStorage.getItem("authid");
        if (!authToken) {
          toast.error("Authorization token not found");
          return;
        }
  
        const { data: rawData } = await axios.get("http://localhost:3000/user/alluser", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authid")}`,
          },
        });

        if(isMounted){
          setUsers([...rawData.data]);
          toast.success("Users fetched successfully!");
        }
  
       
      } catch (error) {
        const axiosError = error as AxiosError;
        
        if (axiosError.response?.data) {
          const errorData = axiosError.response.data as { success: boolean; message: string };
          toast.error(errorData.message);
        } else {
          toast.error("An unexpected error occurred");
        }

      }
    };
  
    fetchUsers();
  
    return () => {
      isMounted = false;
      setUsers([]);
    } 
  }, []);
  
  

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