import Image from "next/image";
import food1 from "src/assets/images/food1.webp";
import food2 from "src/assets/images/food2.jpg";
import food4 from "src/assets/images/food4.webp";
import food5 from "src/assets/images/food5.jpg";
import food6 from "src/assets/images/food6.jpg";

const Info = () => {
  return (
    //full width tailwind css
    <div className="carousel-center carousel h-screen w-screen space-x-4 bg-slate-700 p-4">
      <div className="card-compact carousel-item card mb-20  w-11/12 max-w-md bg-base-100 shadow-xl">
        <figure className="h-1/2">
          <Image alt="meal-plan" src={food1} className="h-full object-cover " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card-compact carousel-item card mb-20 w-11/12 max-w-md bg-base-100 shadow-xl">
        <figure className="h-1/2">
          <Image alt="meal-plan" src={food2} className="h-full object-cover " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card-compact carousel-item card mb-20 w-11/12 max-w-md bg-base-100 shadow-xl">
        <figure className="h-1/2">
          <Image alt="meal-plan" src={food4} className="h-full object-cover " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card-compact carousel-item card mb-20 w-11/12 max-w-md bg-base-100 shadow-xl">
        <figure className="h-1/2">
          <Image alt="meal-plan" src={food5} className="h-full object-cover " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card-compact carousel-item card mb-20 w-11/12 max-w-md bg-base-100 shadow-xl">
        <figure className="h-1/2">
          <Image alt="meal-plan" src={food6} className="h-full object-cover " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
