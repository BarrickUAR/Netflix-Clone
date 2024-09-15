// ProfileSelection.js
import React from "react";
import "./selectProfile.css";

const ProfileSelection = () => {
  return (
    <>


      <div className="profileContainer">
        <div className="profileSelection">

          <h1>Kim İzliyor ?</h1>

          <div className="profile-Items">
            <a href="">
              <div className="profile">
                <img src="https://picsum.photos/200/200" alt="profile1" />
                <p>Berk</p>
              </div>
            </a>

            <a href="">
              <div className="profile">
                <img src="https://picsum.photos/200/200" alt="profile2" />
                <p>Pınar</p>
              </div>
            </a>

            <a href="">
              <div className="profile">
                <img src="https://picsum.photos/200/200" alt="profile3" />
                <p>Emre</p>
              </div>
            </a>

            <a href="">
              <div className="profile">
                <img src="https://picsum.photos/200/200" alt="profile3" />
                <p>Ceren</p>
              </div>
            </a>

            <div className="addProfile">
              <img
                src="/assets/images/addProfile.svg"
                alt="addProfile"
              />
              <p>Profil Ekle</p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default ProfileSelection;
