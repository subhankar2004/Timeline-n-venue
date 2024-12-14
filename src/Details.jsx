import React, { useState } from 'react';

const Details = ({ text, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <p>
        {isReadMore ? `${text.slice(0, maxLength)}...` : text}
      </p>
      <button onClick={toggleReadMore} className="text-blue-500 underline mt-2">
        {isReadMore ? "Read More" : "Show Less"}
      </button>
    </div>
  );
};

export default Details;

