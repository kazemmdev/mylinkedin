import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleleft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon style={{ height: 16, color: "gray" }} />
      </div>
      {newsArticle(
        "this is a news article",
        "this is a subtitle od the article"
      )}
      {newsArticle(
        "this is a news article",
        "this is a subtitle od the article"
      )}
      {newsArticle(
        "this is a news article",
        "this is a subtitle od the article"
      )}
      {newsArticle(
        "this is a news article",
        "this is a subtitle od the article"
      )}
    </div>
  );
};

export default Widgets;
