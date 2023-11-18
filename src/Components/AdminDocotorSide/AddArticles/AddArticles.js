import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import {saveArticle} from "../../../services/ArticleService"
import { Button ,Alert} from "react-bootstrap";
import './AddArticles.css'
import { MdCloudUpload, MdDelete } from "react-icons/md";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function AddArticles() {
const [article,setarticle] =useState()
const [articleTopic,setarticleTopic] = useState()
const [description,setdescription] = useState()
const [imageName,setimageName] = useState()

  const submitForm = (event) => {
    event.preventDefault();
    
    saveArticle(article)
      .then((data) => {
        NotificationManager.success("Success message", " Successfully added !")
        resetForm()
       
      })
      .catch((error) => {
        console.log(error)
        NotificationManager.error("error message", " Please check again !")
      
      });
  };


  const changeValues = (event) => {
    const { name, value } = event?.target;
    setarticle({ ...article, [name]: value });
   
  };



  const resetForm =()=>{
    setarticleTopic("")
    setdescription("")
    setimageName("")
 
   }

  const uploadImage = (element) => {
    let file = element.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      setarticle({ ...article, imageName: reader.result });
    };
    reader.readAsDataURL(file);
  };


  return (
    <div className="admindashboard">
      <div className="leftsidesidebar">
        <SideBar />
      </div>

      <div className="dashboardBody">
        <h1>Add New Article</h1>
        <br></br>
        <hr></hr>
        <br></br>

        <section class="container1">
          <form onSubmit={submitForm} class="form">
            <div className="formtop">
              <div className="formtopleftside">
              <div class="input-box">
          <label>Topic</label>
          <input type="text" 
          placeholder="" 
          name="articleTopic"
          value={articleTopic}
          onChange={changeValues}
          required />
        </div>
                <div class="input-box">
                  <label>Description</label>
                  <textarea
                    class="input-box"
                    style={{ width: "100%", height: "500px" }}
                    id=""
                    placeholder="Enter Description"
                    name="description"
                    value={description}
                    onChange={changeValues}
                    rows="10"
                    cols="50"
                  ></textarea>
                </div>
                
              </div>
              <div className="formtoprightside">
                  <div
                  className="doctorimg"
                  onClick={() => document.querySelector(".input-field").click()}
                >
                  {article?.imageName
               ? (
                    <img src={article?.imageName} alt="No image found" />
                  ) : (
                    <MdCloudUpload
                      color="#1475cf"
                      style={{ width: "40px", margin: "auto" }}
                    />
                  )}
                </div>
                <input
                  className="image_upload_area"
                  type="file"
                  accept="image/*"
                  name="imageName"
                  onChange={uploadImage}
                />
              </div>
            </div>
            <Button
              style={{ backgroundColor: "#2080c5" }}
              className="btnadding"
              type="submit"
              variant="primary"
            >
              Submit
            </Button>
           
          </form>
        </section>
      </div>
    </div>
  );
}
