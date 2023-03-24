import Image from "next/image";
import food1 from "src/assets/images/food1.webp";
import food2 from "src/assets/images/food2.jpg";
import food4 from "src/assets/images/food4.webp";
import food5 from "src/assets/images/food5.jpg";
import food6 from "src/assets/images/food6.jpg";

const Info = () => {
  return (
    //full width tailwind css
    <div className="carousel-center carousel h-screen w-screen space-x-4 p-4 ">
      <div className="carousel-item w-11/12 max-w-md">
        <Image
          alt="meal-plan"
          src={food1}
          className="rounded-box object-cover "
        />
      </div>
      <div className="carousel-item w-11/12 max-w-md">
        <Image
          alt="meal-plan"
          src={food2}
          className="rounded-box object-cover"
        />
      </div>
      <div className="carousel-item w-11/12 max-w-md">
        <Image
          alt="meal-plan"
          src={food4}
          className="rounded-box object-cover"
        />
      </div>
      <div className="carousel-item w-11/12 max-w-md">
        <Image
          alt="meal-plan"
          src={food5}
          className="rounded-box object-cover"
        />
      </div>
      <div className="carousel-item w-11/12 max-w-md">
        <Image
          alt="meal-plan"
          src={food6}
          className="rounded-box object-cover"
        />
      </div>
    </div>
  );
};

export default Info;
