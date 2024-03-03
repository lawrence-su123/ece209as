import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FirstNameFrame from "../components/FirstNameFrame";
import styles from "./Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();

  const onSideBar2ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
            <div className={styles.profileFrame}>
              <FirstNameFrame firstName="First Name" jamie="Jamie" />
              <FirstNameFrame
                firstName="Last Name"
                jamie="Stokes"
                propHeight="unset"
              />
            </div>
            <div className={styles.readBooksFrame}>
              <h1 className={styles.readBooks}>Read Books</h1>
              <div className={styles.chevronleftGroup}>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.viewAll}>view all</div>
                </button>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.chevronLeft11}
                    alt=""
                    src="/chevronleft-1-1.svg"
                  />
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <img
                    className={styles.chevronLeft12}
                    alt=""
                    src="/chevronleft-1-2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.catscradleFrame}>
              <div className={styles.eastofEdenFrame}>
                <div className={styles.theForeverWarFrame}>
                  <div className={styles.theCountofMontyCristoFrame}>
                    <img
                      className={styles.yellowBook499512Icon}
                      alt=""
                      src="/yellowbook4995-12.svg"
                    />
                    <img
                      className={styles.yellowBook499526Icon}
                      alt=""
                      src="/yellowbook4995-26.svg"
                    />
                  </div>
                  <div className={styles.thePoppyWarFrame}>
                    <img
                      className={styles.eea4c1aa0ae57265f07285eb92c31Icon}
                      loading="lazy"
                      alt=""
                      src="/3690eea4c1aa0ae57265f07285eb92c3-11@2x.png"
                    />
                    <img
                      className={styles.yellowBook499531Icon}
                      alt=""
                      src="/yellowbook4995-26.svg"
                    />
                  </div>
                </div>
                <img
                  className={styles.yellowBook499513Icon}
                  alt=""
                  src="/yellowbook4995-13.svg"
                />
                <div className={styles.theForeverWarFrame1}>
                  <img
                    className={styles.yellowBook499514Icon}
                    alt=""
                    src="/yellowbook4995-14.svg"
                  />
                  <div className={styles.warAndPeace693x10481Parent}>
                    <img
                      className={styles.warAndPeace693x10481Icon}
                      loading="lazy"
                      alt=""
                      src="/warandpeace693x1048-11@2x.png"
                    />
                    <img
                      className={styles.yellowBook499528Icon}
                      alt=""
                      src="/yellowbook4995-26.svg"
                    />
                  </div>
                </div>
                <div className={styles.theForeverWarFrame2}>
                  <img
                    className={styles.yellowBook499515Icon}
                    alt=""
                    src="/yellowbook4995-15.svg"
                  />
                  <img
                    className={styles.yellowBook499529Icon}
                    alt=""
                    src="/yellowbook4995-29.svg"
                  />
                </div>
                <img
                  className={styles.yellowBook499516Icon}
                  alt=""
                  src="/yellowbook4995-26.svg"
                />
                <img
                  className={styles.yellowBook499517Icon}
                  alt=""
                  src="/yellowbook4995-26.svg"
                />
                <img
                  className={styles.yellowBook499518Icon}
                  loading="lazy"
                  alt=""
                  src="/yellowbook4995-26.svg"
                />
              </div>
              <div className={styles.bookshelf}>
                <div className={styles.catsCradleParent}>
                  <div className={styles.catsCradle}>Cat’s Cradle</div>
                  <div className={styles.eastOfEden}>East of Eden</div>
                  <div className={styles.theForeverWar}>The Forever War</div>
                  <div className={styles.theCountOf}>
                    The Count of Monty Cristo
                  </div>
                  <div className={styles.hyperion}>Hyperion</div>
                  <div className={styles.bable}>Bable</div>
                  <div className={styles.thePoppyWar}>The Poppy War</div>
                </div>
                <div className={styles.bookshelfInner}>
                  <div className={styles.starRatingParent}>
                    <img
                      className={styles.starRatingIcon}
                      loading="lazy"
                      alt=""
                      src="/star-rating1.svg"
                    />
                    <img
                      className={styles.starRatingIcon1}
                      loading="lazy"
                      alt=""
                      src="/star-rating1.svg"
                    />
                    <img
                      className={styles.starRatingIcon2}
                      loading="lazy"
                      alt=""
                      src="/star-rating1.svg"
                    />
                    <img
                      className={styles.starRatingIcon3}
                      loading="lazy"
                      alt=""
                      src="/star-rating1.svg"
                    />
                    <img
                      className={styles.starRatingIcon4}
                      loading="lazy"
                      alt=""
                      src="/star-rating1.svg"
                    />
                    <img
                      className={styles.starRatingIcon5}
                      loading="lazy"
                      alt=""
                      src="/star-rating1.svg"
                    />
                    <img
                      className={styles.starRatingIcon6}
                      loading="lazy"
                      alt=""
                      src="/star-rating1.svg"
                    />
                  </div>
                </div>
              </div>
              <h1 className={styles.favoriteGenres}>Favorite Genres</h1>
              <div className={styles.frameDiv}>
                <div className={styles.rectangleDiv} />
                <h1 className={styles.fantasyHorrorScience}>
                  Fantasy, Horror, Science Fiction, and Fiction
                </h1>
              </div>
            </div>
            <div className={styles.settings}>
              <h1 className={styles.readingGoals}>Reading Goals</h1>
              <div className={styles.frameReadingGoals}>
                <div className={styles.frameReadingGoalsChild} />
                <div className={styles.challengeMe}>Challenge Me</div>
                <img
                  className={styles.keyboardArrowDown}
                  alt=""
                  src="/keyboard-arrow-down.svg"
                />
              </div>
            </div>
            <div className={styles.ageFrame}>
              <h1 className={styles.age}>Age</h1>
              <div className={styles.cityFrame}>
                <div className={styles.cityFrameChild} />
                <div className={styles.city}>
                  <div className={styles.mehrab}>Mehrab</div>
                  <img
                    className={styles.keyboardArrowDown1}
                    alt=""
                    src="/keyboard-arrow-down.svg"
                  />
                  <div className={styles.cityChild} />
                  <div className={styles.div}>25</div>
                </div>
              </div>
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
            <h1 className={styles.save}>Save</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
