import { useEffect, useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

function StarRating({ maxRating = 5, color = "#fcc419", size = 48 }) {
  const [rating, setRating] = useState(1);
  const [tempRating, setTempRating] = useState(rating);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    fontSize: `${size}px`,
    color,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            color={color}
            onRate={() => setRating(i + 1)}
            setTempRating={() => setTempRating(i + 1)}
            resetRating={() => setTempRating(rating)}
            full={tempRating > i}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating}</p>
    </div>
  );
}

export default StarRating;

function Star({ onRate, size, color, full, setTempRating, resetRating }) {
  const StarStyle = {
    width: `${size * 3}px`,
    height: `${size * 3}px`,
  };
  return (
    <span
      role="button"
      onMouseEnter={setTempRating}
      onClick={onRate}
      style={StarStyle}
      onMouseLeave={resetRating}
    >
      {" "}
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 24 24`}
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox={`0 0 24 24`}
          stroke="#000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
