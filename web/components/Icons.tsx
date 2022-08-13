const ArrowIcon = ({ ...otherProps }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12H3M17 8L21 12L17 8ZM21 12L17 16L21 12Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const HeartIcon = ({ ...otherProps }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75794 7.758C5.88311 6.63317 7.40895 6.00128 8.99994 6.00128C10.5909 6.00128 12.1168 6.63317 13.2419 7.758L14.9999 9.5145L16.7579 7.758C17.3114 7.18494 17.9735 6.72784 18.7055 6.41339C19.4375 6.09894 20.2249 5.93342 21.0215 5.9265C21.8182 5.91957 22.6083 6.07138 23.3457 6.37307C24.083 6.67475 24.753 7.12027 25.3163 7.68363C25.8797 8.24698 26.3252 8.9169 26.6269 9.65427C26.9286 10.3917 27.0804 11.1817 27.0734 11.9784C27.0665 12.7751 26.901 13.5624 26.5865 14.2944C26.2721 15.0265 25.815 15.6885 25.2419 16.242L14.9999 26.4855L4.75794 16.242C3.63311 15.1168 3.00122 13.591 3.00122 12C3.00122 10.409 3.63311 8.88316 4.75794 7.758Z"
        fill="#A855F7"
      />
    </svg>
  );
};

export { ArrowIcon, HeartIcon };
