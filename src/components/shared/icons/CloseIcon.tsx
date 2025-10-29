const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white hover:text-white rounded-full cursor-pointer border border-red-500 p-1 mt-4 bg-red-500 hover:bg-red-600 transition-colors"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 9.293l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 111.414-1.414L10 8.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CloseIcon;
