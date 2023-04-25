// import React from 'react'
// import {useDropzone} from 'react-dropzone'

// const Results = () => {
//   return (
//     <>
    
// <div class="flex justify-center w-full px-40 py-24">
//     <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
//         <div class="flex flex-col items-center justify-center pt-5 pb-6">
//             <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
//             <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
//             <p class="text-xs text-gray-500">DICOM only</p>
//         </div>
//         <input id="dropzone-file" type="file" class="hidden" />
//     </label>
// </div> 

//     </>
//   )
// }

// export default Results

// import React, { Component } from 'react';
// import Dropzone from 'react-dropzone'

// class App extends Component {

//   onDrop = (acceptedFiles) => {
//     console.log(acceptedFiles);
//   }

//   render() {
//     return (
//         <div className="flex justify-center w-full px-40 border-slate-500 py-24 cursor-pointer">
//         <Dropzone onDrop={this.onDrop} accept="image/dicom" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
//           {({getRootProps, getInputProps}) => (
//             <div {...getRootProps()} className="flex flex-col items-center justify-center pt-5 pb-6">
//               <input {...getInputProps()} />
//               <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
//              <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
//              <p class="text-xs text-gray-500">DICOM only</p>
//             </div>
//           )}
//         </Dropzone>
//       </div>
//     );
//   }
// }

// export default App;


import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const Drop = () => {
  const [files, setFiles] = useState([]);
  const [id,setid] = useState("");

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('file', file);
    });

    try {
      const res = await axios.put(`http://127.0.0.1:8000/api/patient/upload/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert("Uploaded Successfully");
      console.log(res.data);
    // console.log(files[0])
    setFiles([]);
    } catch (err) {
      alert("Something went wrong")
      console.log(err);
    }
  };

  return (
    <>
    <div className='flex-col'>
      <div className="flex justify-center px-40 pt-10">
    <input type="text" onChange={(e) => {setid(e.target.value)}} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Please Input Patient ID'/>
    </div>
    <div className="flex justify-center w-full px-40 border-slate-500 py-24 cursor-pointer">
      <Dropzone onDrop={handleDrop} accept="image/dicom" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="flex flex-col items-center justify-center pt-5 pb-6">
          <input {...getInputProps()} />
          <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
         <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
         <p class="text-xs text-gray-500">DICOM only</p>
         {files!==[] && (
        <p class="text-xs text-gray-500">
          Picked file: {files[0].name}
        </p>
      )}
        </div>

        )}
      </Dropzone>
    </div>
    <div className='flex justify-center pb-10'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleUpload}>Upload</button>
    </div>
    </div>
    </>
  );
};

export default Drop;
