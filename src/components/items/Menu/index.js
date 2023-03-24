import React, { useEffect } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import { IonIcon } from "react-ion-icon";
import "../../../assets/css/home.css";
import "../../../assets/css/menu.css";
import greenUdonImg from "../../../assets/img/meal/green-udon.webp";
import img1 from "../../../assets/img/meal/img1.jpg";
import img2 from "../../../assets/img/meal/img2.jpg";
import img3 from "../../../assets/img/meal/img3.jpg";
import img4 from "../../../assets/img/meal/img4.jpg";
import img5 from "../../../assets/img/meal/img5.jpg";
import spaghettiVegan from "../../../assets/img/meal/spaghetti-vegan.webp";
import vegetableNoodle from "../../../assets/img/meal/vegetable-noodle.webp";
import { flameOutline, restaurantOutline, starOutline } from "ionicons/icons";
import { useState } from "react";
import axios from "axios";
// import { toLower } from "ionicons/dist/types/components/icon/utils";

const Index = () => {
  const [categories, setCategories] = useState([]);
  const [menus, setMenus] = useState([]);

  const getCategory = async () => {
    const response = await axios.get("http://localhost:5000/category");
    setCategories(response.data);
    // console.log(response.data);
  };

  const getMenu = async () => {
    const response = await axios.get("http://localhost:5000/menu");
    setMenus(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    const menuNoodle = document.querySelectorAll(".nav-link-menu");
    const foodItems = document.querySelectorAll(".meal");

    let activeMenu = "all";

    showFoodMenu(activeMenu);

    menuNoodle.forEach((menu) => {
      menu.addEventListener("click", () => {
        resetActiveMenu();
        showFoodMenu(menu.id);
        menu.classList.add("main-color");
      });
    });

    function resetActiveMenu() {
      menuNoodle.forEach((menu) => {
        menu.classList.remove("main-color");
      });
    }

    function showFoodMenu(newMenu) {
      activeMenu = newMenu;
      foodItems.forEach((item) => {
        if (item.classList.contains(activeMenu)) {
          item.style.display = "grid";
        } else {
          item.style.display = "none";
        }
      });
    }
    getMenu();
    getCategory();
    console.log(menus);
  }, []);
  return (
    <>
      <Navbar activeBar="our-menu" />
      <section className="section-meals">
        <div className="container center-text">
          <span className="subheading">Noodles</span>
          <h2 className="heading-secondary">
            Get your noodle with healthy and delicious recipes
          </h2>
        </div>

        <div className="nav-margin">
          <ul className="nav-menu">
            <li>
              <a className="nav-link-menu main-color" id="all" href="#all">
                All
              </a>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  className="nav-link-menu"
                  id={category.name.toLowerCase()}
                  href={`#${category.name.toLowerCase()}`}
                >
                  {category.name}
                </a>
              </li>
            ))}
            {/* <li>
              <a className="nav-link-menu" id="noodle" href="#noodle">
                Noodle
              </a>
            </li>
            <li>
              <a className="nav-link-menu" id="sphagetti" href="#spaghetti">
                Spaghetti
              </a>
            </li>
            <li>
              <a className="nav-link-menu" id="desert" href="#desert">
                desert
              </a>
            </li> */}
          </ul>
        </div>

        <div className="container grid grid-menu grid--3-cols margin-bottom-md">
          {menus.map((menu, index) => (
            <div key={index} className="meal noodle all">
              <img className="meal-img" src={menu.url} alt={menu.name} />
              <div className="meal-content">
                <p className="meal-title">{menu.name}</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <IonIcon
                      className="meal-icon"
                      icon={flameOutline}
                    ></IonIcon>
                    <span>
                      <strong>{menu.calories}</strong> Calories
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <IonIcon
                      className="meal-icon"
                      icon={restaurantOutline}
                    ></IonIcon>
                    <span>
                      NutriScore &reg; <strong>{menu.nutriScore}</strong>
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <IonIcon className="meal-icon" icon={starOutline}></IonIcon>
                    <span>
                      <strong>{menu.rating}</strong> Rating
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
          <div className="meal noodle all">
            <img
              className="meal-img"
              src={vegetableNoodle}
              alt="Vegetable Noodle"
            />
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
                    <strong>4.9</strong> Rating
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal sphagetti all">
            <img
              className="meal-img"
              src={spaghettiVegan}
              alt="Spaghetti Vegan"
            />
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
                    <strong>4.9</strong> Rating
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal noodle all">
            <img
              className="meal-img"
              src={greenUdonImg}
              alt="Spaghetti Vegan"
            />
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
                    <strong>4.9</strong> Rating
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal desert all">
            <img className="meal-img" src={img1} alt="Kelengkeng Kiamboy" />
            <div className="meal-content">
              <p className="meal-title">Kelengkeng Kiamboy</p>
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
                    <strong>4.9</strong> Rating
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal desert all">
            <img className="meal-img" src={img5} alt="Apple Tart" />
            <div className="meal-content">
              <p className="meal-title">Apple Tart</p>
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
                    <strong>4.9</strong> Rating
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal desert all">
            <img className="meal-img" src={img3} alt="Ajitsuke Tamago" />
            <div className="meal-content">
              <p className="meal-title">Ajitsuke Tamago</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <IonIcon className="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>1900</strong> Calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <IonIcon
                    className="meal-icon"
                    icon={restaurantOutline}
                  ></IonIcon>
                  <span>
                    NutriScore &reg; <strong>80</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <IonIcon className="meal-icon" icon={starOutline}></IonIcon>
                  <span>
                    <strong>4.9</strong> Rating
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
