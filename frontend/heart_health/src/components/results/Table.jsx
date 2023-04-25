import React, { useState, useEffect } from "react";
// import { Button, Dropdown,Modal } from "flowbite-react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "./Table.css";


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Table1() {
    const [patient, Setpatient] = useState(null);
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/patient/patients').then(
      (response)=>{
        Setpatient(response.data);       
      }
      )
    },[])

    const [comment,setcomment] = useState("");

    const handleClick = (id) => {
      axios.put(`http://127.0.0.1:8000/api/patient/patients/${id}`,comment
      ).then(
        (response)=>{
          console.log(response);
        }
      )
       }

    const handleDownload = (id) => {
      axios.get(`http://127.0.0.1:8000/api/patient/patients/patient_file/${id}`, {
        responseType: 'blob',
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.setAttribute('download','file.pdf');
        document.body.appendChild(link);
        link.click();
        // window.open(link, '_blank');
      });
    }
  return (
    <>
        <Table id="table_schemes">
          <Thead>
            <Tr>
              <Th>Patient ID</Th>
              <Th>Name</Th>
              <Th>Technician Name</Th>
              <Th>Comment</Th>
              <Th>Report</Th>
            </Tr>
          </Thead>
          <Tbody>
          {patient?.map((pat,patid)=>(
                <Tr key={patid}>
                  <Td id="tabledata">{pat.identification_number}</Td>
                  <Td id="tabledata">{pat.patient_name}</Td>
                  <Td id="tabledata">{pat.technician_name}</Td>
                  <Td id="tabledata"><div className="flex justify-around"><input onChange={(e) => {setcomment(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-black" id="comment" type="text" placeholder={pat.comment}></input><button onClick={() => handleClick(pat.identification_number)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Comment</button></div></Td>
                  <Td id="tabledata"><button onClick={() => handleDownload(pat.identification_number)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download Report</button></Td>
                </Tr>
         ))} 
          </Tbody>
        </Table>
    </>
  );
}
