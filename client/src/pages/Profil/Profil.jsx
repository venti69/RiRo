import React, { useState, useEffect } from "react";
import "../../css/Profil.css";
import axios from "axios";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "Demeter Richárd",
    email: "richard.demeter@example.com",
    phone: "06303065740",
    address: "Szilléri Sugárút 35/A 1/1",
    taj: "123-462-707",
    motherName: "Demeterné Kolcsár Teréz",
    birthDate: "2005.06.26",
    gender: "Férfi",
  });

  const [profileImage, setProfileImage] = useState(null);

  // Profil adatok lekérése az oldal betöltésekor
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/profile/USER_ID"); // Cseréld ki USER_ID-re
        const data = response.data;
        setProfileData(data);
        setProfileImage(data.profileImage ? `data:image/jpeg;base64,${data.profileImage}` : null);
      } catch (error) {
        console.error("Hiba történt a profil lekérése során:", error);
      }
    };

    fetchProfile();
  }, []);

  // Profilkép feltöltése
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Profil mentése
  const handleSaveProfile = async () => {
    const formData = new FormData();
    formData.append("name", profileData.name);
    formData.append("email", profileData.email);
    formData.append("phone", profileData.phone);
    formData.append("address", profileData.address);
    formData.append("taj", profileData.taj);
    formData.append("motherName", profileData.motherName);
    formData.append("birthDate", profileData.birthDate);
    formData.append("gender", profileData.gender);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      await axios.post("http://localhost:3001/api/profile/save", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Profil mentve!");
    } catch (error) {
      console.error("Hiba történt a profil mentése során:", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image-section">
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-image"
          />
          <input
            type="file"
            accept="image/*"
            id="imageUpload"
            onChange={handleImageUpload}
            className="file-input"
          />
          <label htmlFor="imageUpload" className="upload-button">
            Profilkép feltöltése
          </label>
        </div>
        <div className="profile-info">
          <h2>{profileData.name}</h2>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Telefonszám:</strong> {profileData.phone}</p>
          <p><strong>Nem:</strong> {profileData.gender}</p>
          <p><strong>Lakcím:</strong> {profileData.address}</p>
          <p><strong>TAJ-szám:</strong> {profileData.taj}</p>
          <p><strong>Anyja neve:</strong> {profileData.motherName}</p>
          <p><strong>Születési dátum:</strong> {profileData.birthDate}</p>
        </div>
        <button onClick={handleSaveProfile} className="save-button">
          Mentés
        </button>
      </div>
    </div>
  );
};

export default Profile;