//1. Import Area
import swal from 'sweetalert'; 
//2. Functional Defination Area
//3. Export Default Function

import {  } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";




//2. Defination Area
function Teacher() {
  //2.1 Hooks Area

  // const [variable,setVariable] = useState(initialValue);
  const [teachers,setTeachers] = useState([
                                            {
                                              id:1,
                                              name:'Ravi',
                                              createdAt:'02/03/2023'
                                            },
                                            {
                                              id:2,
                                              name:'Rahul',
                                              createdAt:'02/03/2023'
                                            }
                                          ])
  const [payload,setPayload] = useState({
                                          "data": {
                                            "name": "teacher3"
                                          }
                                        })  
                                                                          
  const [teachername,setTeacherName] = useState('');
  // useEffect is for page load
  // I want to call the api after the page load
  //useEffect(cbfn,arr);
  //cbfn = Callback function ()=>{}
  // arr = Array []
  useEffect(()=>{
    // What you write here will be executed after the pageload/compoent rendered

    fetch(`http://localhost:1337/api/teachers`)
    .then((res)=>{ 
      
      return res.json()
    })
    .then((data)=>{
      console.log(data.data);
      let newaoo = data.data.map((cv,idx,arr)=>{
          return {
                      id:cv.id,
                      name:cv.attributes.name,
                      createdAt:cv.attributes.createdAt
                  }
      });
      setTeachers(newaoo);
    })
    .catch();

  },[]);
  //(actualArg1,actualArg2,....);
  //Every Hook is a function

  //2.2 Function defination area
  let sendData = ()=>{
                    alert('Invalid Action');
                    fetch(`http://localhost:1337/api/teachers`,{
                      "method":"POST",
                      "headers":{
                        //P:V
                        "Content-Type": "application/json"
                      },
                      "body":JSON.stringify(payload)
                    }).then((res)=>{
                      //I Want the convert response into JSON readdable 
                      return res.json(); 
                    }).then((data)=>{
                      console.log(data);
                      if(data){
                        alert("Teacher created Successfully");
                      }
                    }).catch((err)=>{
                      console.log(err);

                    })
                    
                    
                 }
  let karan =(e)=>{
  console.log(e.target.value);
  setTeacherName(e.target.value);
  console.log('Hook teachername',teachername);
  setPayload({
    ...payload,
    data:{
      name:document.querySelector('input#teachername').value
    }
  });
  }
  let deleteTeacher = (e)=>{
    document.getElementById("loader").innerHTML = `<div className="d-flex justify-content-center">
                                                   <div className="spinner-border" role="status">
                                                   <span className="visually-hidden">Loading...</span>
                                                   </div>
                                                   </div>`

    
                                                    let x = e.target.closest('tr');
                                                    console.log(e.target.closest('tr').querySelector('td:first-child').innerHTML);
                                                    let delid = e.target.closest('tr').querySelector('td:first-child').innerHTML;
                                                    let ans = window.confirm('Are you sure youDo you really want to delete');
                                                    console.log(typeof ans);
                                                    if(ans === true){
                                                
                                                      //Call the DELETE REST API
                                                      fetch(`http://localhost:1337/api/teachers/${delid}`,{
                                                        method:"DELETE"
                                                      })
                                                      .then((res)=>{
                                                        // This json() function make the incomming data json readable
                                                        return res.json();
                                                      })
                                                      .then((data)=>{
                                                          x.remove();
                                                          console.log(data);
                                                          document.getElementById("loader").innerHTML ='';
                                                          window.alert('Deleted Successfully ');
                                                      })
                                                      .catch((err)=>{
                                                
                                                      });
                                                
                                                    }else{
                                                      console.log('Not Good');
                                                    }
                                                  }
                                                                                                
                           

  //2.3 Return statement
  return (
      <>
     <div id="loader">
      </div>
      <div className="container">
          <h1>Create Teacher</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="teachername" className="form-label">Teacher Name</label>
              <input type="Text" className="form-control" id="teachername" name="name" onKeyDown={(e)=>{karan(e)}}  />
              </div>
           
            <button type="button" className="btn btn-primary" onClick={()=>sendData()}>Submit</button>
          </form>
          <br />
          <hr />
          <hr />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">CreatedAt</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                teachers.map((cv,idx,arr)=>{
                  return <tr key={idx}>
                            <td>{cv.id}</td>
                            <td>{cv.name}</td>
                            <td>{cv.createdAt}</td>
                            <td>
                              <button className="btn btn-success btn-sm">View</button>
                              <button className="btn btn-primary btn-sm">Edit</button>
                              <button className="btn btn-danger btn-sm"onClick={(e)=>{ deleteTeacher(e) }}>Delete</button>
                            </td>
                          </tr>
                })
              }
              
            </tbody>
          </table>
        </div>
      </>
  );
}

// 3. Export Area
export default Teacher;