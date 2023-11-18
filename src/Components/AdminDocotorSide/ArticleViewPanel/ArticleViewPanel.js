import React from 'react'
import SideBar from "../SideBar/SideBar"
import './ArticleViewPanel.css'
import Button from 'react-bootstrap/Button';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import {getAllArticles} from '../../../services/ArticleService'
import { useState } from 'react';
import { useEffect } from 'react';



export default function ArticleViewPanel() {

  const [articlelist, setarticlelist] = useState([]);

  const loadArticleList = () =>{
    getAllArticles()
      .then((response) => {
        const data =response.data;
setarticlelist(data);
      })
      .catch((error) => {});
  }
useEffect (() => {
  loadArticleList();
},[]);


  return (
    <div className="admindashboard">
    <div className="leftsidesidebar">
      <SideBar />
    </div>

    <div className="dashboardBody">
      <h1>Articles</h1>
      <br></br>
      <hr></hr>
      <br></br>
      <Link to='/add_articles'>
        <Button style={{backgroundColor:"#2080c5"}}  className='btnadding' variant="primary">Add Article</Button>
        
        
        </Link >
      <br></br><br></br><br></br>
      <MDBTable bordered>
      <MDBTableHead>
      <tr>
         
          <th scope='col'>Image</th>
          <th>Topic</th>
          <th scope='col'>Article</th>
          
        </tr>
      </MDBTableHead>
      {articlelist.map((article) => (
      <MDBTableBody>
        <tr>
          
          <td><div 
                 
                 onClick={() => document.querySelector(".input-field").click()}
               >
                 {article.imageName
              ? (
                   <img src={article.imageName} style={{width:'200px'}} alt="No image found" />
                 ) : (
                   <MdCloudUpload
                     color="#1475cf"
                     style={{ width: "40px", margin: "auto" }}
                   />
                 )}
               </div>  
                 </td>
          <td>{article.articleTopic}</td>
          <td>{article.description} </td>
          <Link to={`/edit_article/${article.articleId}`}>
          <td><Button style={{backgroundColor:"#2080c5"}} className='editbtn'  variant="primary">Edit</Button></td>
       
          </Link>
          </tr>
       
       
      </MDBTableBody>
        ))}
      <MDBTableHead>
        <tr>
          
        <th scope='col'>Image</th>
        <th>Topic</th>
          <th scope='col'>Article</th>
          
        </tr>
      </MDBTableHead>
    </MDBTable>
    </div>
  </div>
  )
}
