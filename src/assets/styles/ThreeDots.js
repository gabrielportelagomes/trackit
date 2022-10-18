import { ThreeDots } from "react-loader-spinner";

function Loading() {
  return (
    <ThreeDots
      height="50"
      width="50"
      radius="9"
      color="#FFFFFF"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}

export default Loading;
