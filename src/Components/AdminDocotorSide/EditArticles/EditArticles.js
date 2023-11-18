import React, { useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { Button, Alert } from "react-bootstrap";
import { useState } from "react";

import { updateArticle } from "../../../services/ArticleService";
import { getArticleById } from "../../../services/ArticleService";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useParams } from "react-router-dom";

export default function EditArticles() {
  const submitForm = (event) => {
    event.preventDefault();
    updateArticle(article)
      .then((data) => {
        NotificationManager.success("Success message", " Successfully added !");
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error("error message", " Please check again !");
      });
  };

  const [article, setarticle] = useState([]);
  let { id } = useParams();
  console.log(id)
  console.log("id")

  const loadArticle = () => {
    getArticleById(id).then(({ data }) => {
      setarticle(data)
    });
  };

  useEffect(() => {
    loadArticle();
  }, []);

  const changeValues = (event) => {
    const { name, value } = event?.target;
    setarticle({ ...article, [name]: value });
  };
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
        <h1>Edit Article</h1>
        <br></br>
        <hr></hr>
        <br></br>

        <section class="container1">
          <form onSubmit={submitForm} class="form">
            <div className="formtop">
              <div className="formtopleftside">
                <div class="input-box">
                  <label>Topic</label>
                  <input
                    type="text"
                    placeholder=""
                    name="articleTopic"
                    value={article?.articleTopic}
                    onChange={changeValues}
                    required
                  />
                </div>
                <div class="input-box">
                  <label>Description</label>
                  <textarea
                    class="input-box"
                    style={{ width: "100%", height: "500px" }}
                    id=""
                    placeholder="Enter Description"
                    name="description"
                    rows="10"
                    cols="50"
                    onChange={changeValues}
                    value={article?.description}
                    required
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
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
