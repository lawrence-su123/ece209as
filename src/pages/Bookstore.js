import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Bookstore.module.css";

const Bookstore = () => {
  const navigate = useNavigate();

  const onBookListFrameClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/chatbot-sidecol");
  }, [navigate]);

  const onYellowBook499531Click = useCallback(() => {
    navigate("/recommendation");
  }, [navigate]);

  const onYellowBook499513Click = useCallback(() => {
    navigate("/recommendation");
  }, [navigate]);

  const onYellowBook499528Click = useCallback(() => {
    navigate("/recommendation");
  }, [navigate]);

  const onYellowBook499529Click = useCallback(() => {
    navigate("/recommendation");
  }, [navigate]);

  const onYellowBook499516Click = useCallback(() => {
    navigate("/recommendation");
  }, [navigate]);

  const onYellowBook499517Click = useCallback(() => {
    navigate("/recommendation");
  }, [navigate]);

  const onYellowBook499518Click = useCallback(() => {
    navigate("/recommendation");
  }, [navigate]);

  const onImageContainerClick = useCallback(() => {
    navigate("/chatbot-sidecol");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/chatbot-sidecol");
  }, [navigate]);

  return (
    <div className={styles.bookstore}>
      <div className={styles.wrapperSidebar}>
        <img
          className={styles.sidebarIcon}
          loading="lazy"
          alt=""
          src="/sidebar.svg"
        />
      </div>
      <main className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.bookListFrame}
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
            onClick={onBookListFrameClick}
          />
        </div>
        <section className={styles.signOutButtonWrapper}>
          <div className={styles.signOutButton}>
            <div className={styles.frameGroup}>
              <nav className={styles.frameContainer}>
                <div className={styles.bookifyWrapper}>
                  <h1 className={styles.bookify}>Bookify</h1>
                </div>
                <div
                  className={styles.rectangleGroup}
                  onClick={onGroupContainerClick}
                >
                  <div className={styles.frameItem} />
                  <div className={styles.personalizedMessageBox}>
                    <img
                      className={styles.search29111Icon}
                      alt=""
                      src="/search2911-1.svg"
                    />
                    <img
                      className={styles.yellowBook499530Icon}
                      alt=""
                      src="/yellowbook4995-30.svg"
                    />
                  </div>
                  <b className={styles.getAPersonalized}>
                    Get a personalized book suggestion
                  </b>
                </div>
                <div className={styles.frameWrapper}>
                  <button className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <b className={styles.signOut}>Sign Out</b>
                  </button>
                </div>
              </nav>
              <div className={styles.mainMessageBox}>
                <div className={styles.rectangleShape}>
                  <div className={styles.suggestedBooksParent}>
                    <h1 className={styles.suggestedBooks}>Suggested Books</h1>
                    <div className={styles.frameDiv}>
                      <button className={styles.groupButton}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.viewAll}>view all</div>
                      </button>
                      <div className={styles.groupDiv}>
                        <div className={styles.frameChild1} />
                        <img
                          className={styles.chevronLeft11}
                          loading="lazy"
                          alt=""
                          src="/chevronleft-1-1.svg"
                        />
                      </div>
                      <div className={styles.rectangleParent1}>
                        <div className={styles.frameChild2} />
                        <img
                          className={styles.chevronLeft12}
                          loading="lazy"
                          alt=""
                          src="/chevronleft-1-2@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.yellowBook499512Parent}>
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
                      <div className={styles.frameWrapper1}>
                        <div
                          className={styles.eea4c1aa0ae57265f07285eb92c31Parent}
                        >
                          <img
                            className={styles.eea4c1aa0ae57265f07285eb92c31Icon}
                            loading="lazy"
                            alt=""
                            src="/3690eea4c1aa0ae57265f07285eb92c3-1@2x.png"
                          />
                          <img
                            className={styles.yellowBook499531Icon}
                            alt=""
                            src="/yellowbook4995-26.svg"
                            onClick={onYellowBook499531Click}
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.yellowBook499513Icon}
                      alt=""
                      src="/yellowbook4995-13.svg"
                      onClick={onYellowBook499513Click}
                    />
                    <div className={styles.yellowBook499514Parent}>
                      <img
                        className={styles.yellowBook499514Icon}
                        alt=""
                        src="/yellowbook4995-14.svg"
                      />
                      <div className={styles.frameWrapper2}>
                        <div className={styles.warAndPeace693x10481Parent}>
                          <img
                            className={styles.warAndPeace693x10481Icon}
                            loading="lazy"
                            alt=""
                            src="/warandpeace693x1048-1@2x.png"
                          />
                          <img
                            className={styles.yellowBook499528Icon}
                            alt=""
                            src="/yellowbook4995-26.svg"
                            onClick={onYellowBook499528Click}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.yellowBook499515Parent}>
                      <img
                        className={styles.yellowBook499515Icon}
                        alt=""
                        src="/yellowbook4995-15.svg"
                      />
                      <img
                        className={styles.yellowBook499529Icon}
                        alt=""
                        src="/yellowbook4995-29.svg"
                        onClick={onYellowBook499529Click}
                      />
                    </div>
                    <img
                      className={styles.yellowBook499516Icon}
                      alt=""
                      src="/yellowbook4995-26.svg"
                      onClick={onYellowBook499516Click}
                    />
                    <img
                      className={styles.yellowBook499517Icon}
                      alt=""
                      src="/yellowbook4995-26.svg"
                      onClick={onYellowBook499517Click}
                    />
                    <img
                      className={styles.yellowBook499518Icon}
                      loading="lazy"
                      alt=""
                      src="/yellowbook4995-26.svg"
                      onClick={onYellowBook499518Click}
                    />
                  </div>
                  <div className={styles.bookshelfFrame}>
                    <div className={styles.hitchhikersGuideToContainer}>
                      <p className={styles.hitchhikersGuideTo}>
                        Hitchhiker’s Guide to the Galaxy
                      </p>
                      <p className={styles.byDouglasAdams}>By Douglas Adams</p>
                    </div>
                    <div className={styles.lordOfTheContainer}>
                      <p className={styles.lordOfThe}>Lord of the Rings</p>
                      <p className={styles.byJrrTolkin}>By J.R.R. Tolkin</p>
                    </div>
                    <div className={styles.theAlchemystByContainer}>
                      <p className={styles.theAlchemyst}>The Alchemyst</p>
                      <p className={styles.byPauloCoelho}>By Paulo Coelho</p>
                    </div>
                    <div className={styles.tolstoy}>Tolstoy</div>
                    <div className={styles.julesVerne}>Jules Verne</div>
                    <div className={styles.karlMarx}>Karl Marx</div>
                    <div className={styles.julesVerne1}>Jules Verne</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleBaseWrapper}>
              <div className={styles.rectangleBase}>
                <div
                  className={styles.imageContainer}
                  onClick={onImageContainerClick}
                />
                <div className={styles.searchpanel}>
                  <div className={styles.image11Wrapper}>
                    <img
                      className={styles.image11Icon}
                      loading="lazy"
                      alt=""
                      src="/image-11@2x.png"
                    />
                  </div>
                  <div className={styles.mainMessageBox1}>
                    <h2 className={styles.hiThanksForContainer}>
                      <p className={styles.hiThanksFor}>
                        Hi, thanks for signing up and filling out the questions!
                      </p>
                      <p className={styles.letUsKnow}>
                        Let us know how we can help you find your next book.
                      </p>
                    </h2>
                  </div>
                </div>
                <div className={styles.rectangleBaseInner}>
                  <div className={styles.mainMessageBoxParent}>
                    <div className={styles.mainMessageBox2}>
                      <div className={styles.thanksImCurrentlyReadingWrapper}>
                        <h2 className={styles.thanksImCurrentlyContainer}>
                          <p
                            className={styles.thanksImCurrently}
                          >{`Thanks! I’m currently reading Harry Potter. I would like a `}</p>
                          <p className={styles.harderBookTo}>
                            harder book to read that I would like. Can you help
                            me?
                          </p>
                        </h2>
                      </div>
                    </div>
                    <div className={styles.imagepreviewframeWrapper}>
                      <div className={styles.imagepreviewframe}>
                        <div className={styles.image11Parent}>
                          <img
                            className={styles.image11Icon1}
                            loading="lazy"
                            alt=""
                            src="/image-11-1@2x.png"
                          />
                          <div className={styles.mainMessageBox3}>
                            <h2 className={styles.sureBasedOnContainer}>
                              <p
                                className={styles.sureBasedOn}
                              >{`Sure! Based on your age, past and current reading `}</p>
                              <p className={styles.preferencesIdThinkYoudL}>
                                <span>{`preferences, I’d think you’d like: `}</span>
                                <b className={styles.lordOfThe1}>
                                  Lord of the Rings
                                </b>
                              </p>
                            </h2>
                          </div>
                        </div>
                        <div className={styles.suggestionmessagebox}>
                          <div className={styles.mainMessageBox4}>
                            <input
                              className={styles.pleaseRateThis}
                              placeholder="Please rate this suggestion, or get a new one!"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className={styles.starratingcontainer}>
                          <div className={styles.starRatingParent}>
                            <img
                              className={styles.starRatingIcon}
                              loading="lazy"
                              alt=""
                              src="/star-rating.svg"
                            />
                            <div className={styles.frameWrapper3}>
                              <button
                                className={styles.rectangleParent2}
                                onClick={onGroupButton2Click}
                              >
                                <div className={styles.frameChild3} />
                                <b className={styles.getASuggestion}>
                                  Get a suggestion
                                </b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.authorList}>
        <div className={styles.jKRowling}>J. K. Rowling</div>
        <div className={styles.fyodorDostoevsky}>Fyodor Dostoevsky</div>
        <div className={styles.tolstoy1}>Tolstoy</div>
        <div className={styles.karlMarx1}>Karl Marx</div>
        <div className={styles.julesVerne2}>Jules Verne</div>
        <div className={styles.karlMarx2}>Karl Marx</div>
        <div className={styles.julesVerne3}>Jules Verne</div>
      </div>
    </div>
  );
};

export default Bookstore;
