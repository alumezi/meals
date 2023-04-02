import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import food1 from "src/assets/images/food1.webp";
import food2 from "src/assets/images/food2.jpg";
import food4 from "src/assets/images/food4.webp";
import food5 from "src/assets/images/food5.jpg";
import food6 from "src/assets/images/food6.jpg";

enum Ingredients {
  meat = "meat",
  mayo = "mayo",
  salad = "salad",
  carrot = "carrot",
}

interface Food {
  title: string;
  description: string;
  ingredients: Ingredients[];
}

interface Plans {
  image: StaticImageData;
  title: string;
  description: string;
  foods: Food[];
  price: number;
}

const plans: Plans[] = [
  {
    image: food1,
    title: "Plani 1",
    description: "Nje dite ne jave!",
    foods: [
      {
        title: "Pleskavice",
        description: "Pleskavice shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Peshk",
        description: "Peshk shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Gjelle",
        description: "Gjelle shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Cheat day",
        description: "Double Hamburger",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
    ],
    price: 16,
  },
  {
    image: food2,
    title: "Plani 2",
    description: "Dy ditë në javë!",
    foods: [
      {
        title: "Pleskavice",
        description: "Pleskavice shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Peshk",
        description: "Peshk shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Gjelle",
        description: "Gjelle shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Cheat day",
        description: "Double Hamburger",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
    ],
    price: 16,
  },
  {
    image: food4,
    title: "Plani 3",
    description: "Tre ditë në javë!",
    foods: [
      {
        title: "Pleskavice",
        description: "Pleskavice shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Peshk",
        description: "Peshk shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Gjelle",
        description: "Gjelle shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Cheat day",
        description: "Double Hamburger",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
    ],
    price: 16,
  },
  {
    image: food5,
    title: "Plani 4",
    description: "Katër ditë në javë!",
    foods: [
      {
        title: "Pleskavice",
        description: "Pleskavice shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Peshk",
        description: "Peshk shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Gjelle",
        description: "Gjelle shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Cheat day",
        description: "Double Hamburger",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
    ],
    price: 16,
  },
  {
    image: food6,
    title: "Plani 5",
    description: "Pesë ditë në javë!",
    foods: [
      {
        title: "Pleskavice",
        description: "Pleskavice shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Peshk",
        description: "Peshk shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Gjelle",
        description: "Gjelle shtepie me sos the sallate",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
      {
        title: "Cheat day",
        description: "Double Hamburger",
        ingredients: [
          Ingredients.meat,
          Ingredients.mayo,
          Ingredients.salad,
          Ingredients.carrot,
        ],
      },
    ],
    price: 16,
  },
];

const Info = () => {
  return (
    <div className="carousel-center carousel h-screen w-screen space-x-4 bg-slate-700 p-4">
      {plans.map((item) => (
        <>
          <div className="card-compact carousel-item card mb-20  w-11/12 max-w-md bg-base-100 shadow-xl">
            <figure className="h-1/2">
              <Image
                alt="meal-plan"
                src={item.image}
                className="h-full object-cover "
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <Link href="/detail">
                  <button className="btn-primary btn">Zgjedh</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Info;
