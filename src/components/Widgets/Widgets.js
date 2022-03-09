import InfoIcon from "@mui/icons-material/Info";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="w-full flex px-5 py-4 border-t cursor-pointer hover:bg-blue-50">
      <div className="flex flex-col">
        <h4 className="text-md font-medium">{heading}</h4>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="flex-auto h-fit sticky top-16 hidden lg:block w-3/12">
      <div className="flex flex-col items-center justify-center bg-white rounded">
        <div className="w-full flex items-center justify-between p-5">
          <h2 className="font-medium text-md">LinkedIn News</h2>
          <InfoIcon style={{ height: 16, color: "gray" }} />
        </div>
        {newsArticle(
          "this is a news article",
          "this is a subtitle of the article"
        )}
        {newsArticle(
          "this is a news article",
          "this is a subtitle of the article"
        )}
        {newsArticle(
          "this is a news article",
          "this is a subtitle of the article"
        )}
        {newsArticle(
          "this is a news article",
          "this is a subtitle of the article"
        )}
      </div>
    </div>
  );
};

export default Widgets;
