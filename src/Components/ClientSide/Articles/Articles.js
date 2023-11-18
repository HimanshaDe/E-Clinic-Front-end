import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Card, Col, Button } from "react-bootstrap";
import img1 from "./img.jpg";
import "./Articles.css";
import { getAllArticles } from "../../../services/ArticleService";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
export default function Articles() {
  const [articlelist, setarticlelist] = useState([]);

  const loadArticleList = () => {
    getAllArticles()
      .then((response) => {
        const data = response.data;
        setarticlelist(data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    loadArticleList();
  }, []);

  return (
    <div>
      <Navbar />
      <br></br>
      <div classname="visiblearea">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center">
              <h1 className="topics" style={{ marginLeft: "50px" }}>
                Articles
              </h1>
              
            </div>
          </div>
        </div>

       
      </div>

      {articlelist.map((article) => (
        <div style={{ paddingBottom:'20px'}}>
      <MDBCard style={{ maxWidth: '80%', margin:'auto',border:'none' }}>
      <MDBCardTitle className="article_title">{article.articleTopic}</MDBCardTitle>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
        <div
                            onClick={() =>
                              document.querySelector(".input-field").click()
                            }
                          >
                            {article.imageName ? (
                              <img
                                src={article.imageName}
                                style={{ width: "299px", padding: "20px" }}
                                alt="No image found"
                              />
                            ) : (
                              <MdCloudUpload
                                color="#1475cf"
                                style={{ width: "40px", margin: "auto" }}
                              />
                            )}
                          </div>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
          
            <MDBCardText 
            style={{fontSize:'20px', textAlign:'justify'}}>
            {article.description}
            </MDBCardText>
            <MDBCardText>
            
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
    ))}
      
      <Footer />
    </div>
  );
}
