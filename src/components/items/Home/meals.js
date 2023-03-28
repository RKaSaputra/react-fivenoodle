import React from "react";
import { Link } from "react-router-dom";

import meal1 from "./../../../assets/img/meal/vegetable-noodle.webp";
import meal2 from "./../../../assets/img/meal/spaghetti-vegan.webp";
import meal3 from "./../../../assets/img/meal/green-udon.webp";
import { IonIcon } from "react-ion-icon";
import { flameOutline } from "ionicons/icons";
import { restaurantOutline } from "ionicons/icons";
import { starOutline } from "ionicons/icons";

const meals = () => {
  return (
    <div>
      <section className="section-meals">
        <div className="container center-text">
          <span className="subheading">Noodles</span>
          <h2 className="heading-secondary">
            Get your noodle with healthy and delicious recipes
          </h2>
        </div>

        <div className="container grid grid--3-cols margin-bottom-md">
          <div className="meal meal-home">
            <img className="meal-img" src={meal1} alt="Vegetable Noodle" />
            <div className="meal-content">
              <p className="meal-title">Vegetable Noodle</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <IonIcon className="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>650</strong> Calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <IonIcon
                    className="meal-icon"
                    icon={restaurantOutline}
                  ></IonIcon>
                  <span>
                    NutriScore &reg; <strong>83</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <IonIcon className="meal-icon" icon={starOutline}></IonIcon>
                  <span>
                    <strong>4.9</strong> Rating (1.685)
                  </span>
                </li>
              </ul>
              <div className="details">
                <a href="#" className="link">
                  More details &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="meal meal-home">
            <img className="meal-img" src={meal2} alt="Spaghetti Vegan" />
            <div className="meal-content">
              <p className="meal-title">Spaghetti Vegan</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <IonIcon className="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>600</strong> Calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <IonIcon
                    className="meal-icon"
                    icon={restaurantOutline}
                  ></IonIcon>
                  <span>
                    NutriScore &reg; <strong>79</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <IonIcon className="meal-icon" icon={starOutline}></IonIcon>
                  <span>
                    <strong>4.9</strong> Rating (872)
                  </span>
                </li>
              </ul>
              <div className="details">
                <a href="#" className="link">
                  More details &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="meal meal-home">
            <img className="meal-img" src={meal3} alt="Spaghetti Vegan" />
            <div className="meal-content">
              <p className="meal-title">Green Udon</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <IonIcon className="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>700</strong> Calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <IonIcon
                    className="meal-icon"
                    icon={restaurantOutline}
                  ></IonIcon>
                  <span>
                    NutriScore &reg; <strong>88</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <IonIcon className="meal-icon" icon={starOutline}></IonIcon>
                  <span>
                    <strong>4.9</strong> Rating (2.261)
                  </span>
                </li>
              </ul>
              <div className="details">
                <a href="#" className="link">
                  More details &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container our-menu">
          <Link className="link" to={"/menu"}>
            See all our menu &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default meals;
