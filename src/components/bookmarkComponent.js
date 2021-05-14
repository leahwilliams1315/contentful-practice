
function Bookmark({bookmark: {title, url, comment, tagsCollection}}){
  return (

    <div className="max-w-2xl px-8 py-4 mx-5 my-5 bg-white rounded-lg shadow-md dark:bg-gray-800 bookmark-block">
      <div className="tags-container">
        {tagsCollection.items.map((tag) => <span style={{backgroundColor: tag.colour}} className="tags">{tag.title}</span>)}
      </div>
      <div className="mt-2">
        <span
           className="text-1xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 ">
          {title}
        </span>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {comment}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <a href={url} className="text-blue-600 dark:text-blue-400 hover:underline">Visit</a>
      </div>
    </div>
  );

}

export default Bookmark;