import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstNameFrame from "../components/FirstNameFrame";
import styles from "./Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();

  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [favoriteGenres, setFavoriteGenres] = useState("");
  const [readingGoals, setReadingGoals] = useState("");
  const [age, setAge] = useState("");
  const [pastBooksRead, setPastBooksRead] = useState("");


  const onSideBar2ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSave = () => {
    // Handle saving data
    console.log("Data saved:", { firstName, lastName, favoriteGenres, pastBooksRead, readingGoals, age });
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profileChild} />
      <div className={styles.firstFrame}>
        <div className={styles.frameForName}>
          <img
            className={styles.frameForNameChild}
            alt=""
            src="/rectangle-18.svg"
          />
          <img
            className={styles.frameForNameItem}
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
        </div>
        <div className={styles.sideBar2} onClick={onSideBar2ContainerClick}>
          <div className={styles.sideBar2Inner}>
            <div className={styles.topLevelFrameParent}>
              <div className={styles.topLevelFrame}>
                <div className={styles.keyboardArrowLeftParent}>
                  <img
                    className={styles.keyboardArrowLeft}
                    loading="lazy"
                    alt=""
                    src="/keyboard-arrow-left.svg"
                  />
                  <div className={styles.homePageWrapper}>
                    <h1 className={styles.homePage}>Home Page</h1>
                  </div>
                </div>
              </div>
              <div className={styles.editParent}>
                <img
                  className={styles.editIcon}
                  loading="lazy"
                  alt=""
                  src="/edit.svg"
                />
                <h1 className={styles.editProfile}>Edit profile</h1>
              </div>
            </div>
          </div>
          <div className={styles.sideBar2Child} />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.editProfileWrapper}>
          <h1 className={styles.editProfile1}>Edit profile</h1>
        </div>

        
        <div className={styles.frameWrapper}>
          <div className={styles.profileFrameParent}>
            <div className={styles.readBooksFrame}>        
            </div>
            <div className={styles.catscradleFrame}>
              <div className={styles.eastofEdenFrame}>
                <div className={styles.theForeverWarFrame}>
                  <div className={styles.theCountofMontyCristoFrame}>

                  </div>
                </div>
              </div>



              <h1 className={styles.favoriteGenres}>First Name</h1>
              <input
                type="text"
                className={styles.frameDiv}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              

              <h1 className={styles.favoriteGenres}>Last Name</h1>
              <input
                type="text"
                className={styles.frameDiv}
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <h1 className={styles.favoriteGenres}>Past Books Read</h1>
              <input
                type="text"
                className={styles.frameDiv}
                placeholder="Enter past books read"
                value={pastBooksRead}
                onChange={(e) => setPastBooksRead(e.target.value)}
              />

              <h1 className={styles.favoriteGenres}>Favorite Genres</h1>
              <input
                type="text"
                className={styles.frameDiv}
                placeholder="Fantasy, Horror, Science Fiction, and Fiction"
                value={favoriteGenres}
                onChange={(e) => setFavoriteGenres(e.target.value)}
              />
            

            <h1 className={styles.favoriteGenres}>Reading Goals</h1>
            <input
                  type="text"
                  className={styles.frameDiv}
                  placeholder="Reading Goals"
                  value={readingGoals}
                  onChange={(e) => setReadingGoals(e.target.value)}
                />

            <h1 className={styles.favoriteGenres}>Age</h1>
            <input
                type="text"
                className={styles.frameDiv}
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            


          </div>
        </div>
        <div className={styles.groupsContainer}>
          <div className={styles.groupDiv}>
            <div className={styles.frameChild1} />
            <h1 className={styles.cancel}>Cancel</h1>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild2} />
            <button className={styles.save} onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
