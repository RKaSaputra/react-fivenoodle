import React, { useEffect } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import { IonIcon } from "react-ion-icon";
import { flameOutline, restaurantOutline, starOutline } from "ionicons/icons";
// import "../../../assets/css/home.css";
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

const Index = () => {
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
  }, []);
  return (
    <>
      <Navbar nav="menu" />
      <section class="section-meals">
        <div class="container center-text">
          <span class="subheading">Noodles</span>
          <h2 class="heading-secondary">
            Get your noodle with healthy and delicious recipes
          </h2>
        </div>

        <div class="nav-margin">
          <ul class="nav-menu">
            <li>
              <a class="nav-link-menu main-color" id="all" href="#all">
                All
              </a>
            </li>
            <li>
              <a class="nav-link-menu" id="noodle" href="#noodle">
                Noodle
              </a>
            </li>
            <li>
              <a class="nav-link-menu" id="sphagetti" href="#spaghetti">
                Spaghetti
              </a>
            </li>
            <li>
              <a class="nav-link-menu" id="desert" href="#desert">
                desert
              </a>
            </li>
          </ul>
        </div>

        <div class="container grid grid--3-cols margin-bottom-md">
          <div class="meal noodle all">
            <img
              class="meal-img"
              src={vegetableNoodle}
              alt="Vegetable Noodle"
            />
            <div class="meal-content">
              <p class="meal-title">Vegetable Noodle</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>650</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={restaurantOutline}></IonIcon>
                  <span>
                    NutriScore &reg; <strong>83</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={starOutline}></IonIcon>
                  <span>
                    <strong>4.9</strong> Rating (1.685)
                  </span>
                </li>
              </ul>
              <div class="order">
                <a href="#" class="btn--order">
                  Order
                </a>
                <p class="price">
                  <span>IDR</span> <strong>60.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="meal sphagetti all">
            <img class="meal-img" src={spaghettiVegan} alt="Spaghetti Vegan" />
            <div class="meal-content">
              <p class="meal-title">Spaghetti Vegan</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>600</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={restaurantOutline}></IonIcon>
                  <span>
                    NutriScore &reg; <strong>79</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={starOutline}></IonIcon>
                  <span>
                    <strong>4.9</strong> Rating (872)
                  </span>
                </li>
              </ul>
              <div class="order">
                <a href="#" class="btn--order">
                  Order
                </a>
                <p class="price">
                  <span>IDR</span> <strong>45.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="meal noodle all">
            <img class="meal-img" src={greenUdonImg} alt="Spaghetti Vegan" />
            <div class="meal-content">
              <p class="meal-title">Green Udon</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>700</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={restaurantOutline}></IonIcon>
                  <span>
                    NutriScore &reg; <strong>88</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={starOutline}></IonIcon>
                  <span>
                    <strong>4.9</strong> Rating (2.261)
                  </span>
                </li>
              </ul>
              <div class="order">
                <a href="#" class="btn--order">
                  Order
                </a>
                <p class="price">
                  <span>IDR</span> <strong>70.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="meal desert all">
            <img class="meal-img" src={img1} alt="Kelengkeng Kiamboy" />
            <div class="meal-content">
              <p class="meal-title">Kelengkeng Kiamboy</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>600</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={restaurantOutline}></IonIcon>
                  <span>
                    NutriScore &reg; <strong>79</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={starOutline}></IonIcon>
                  <span>
                    <strong>4.9</strong> Rating (872)
                  </span>
                </li>
              </ul>
              <div class="order">
                <a href="#" class="btn--order">
                  Order
                </a>
                <p class="price">
                  <span>IDR</span> <strong>45.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="meal desert all">
            <img class="meal-img" src={img5} alt="Apple Tart" />
            <div class="meal-content">
              <p class="meal-title">Apple Tart</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>600</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={restaurantOutline}></IonIcon>
                  <span>
                    NutriScore &reg; <strong>79</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={starOutline}></IonIcon>
                  <span>
                    <strong>4.9</strong> Rating (872)
                  </span>
                </li>
              </ul>
              <div class="order">
                <a href="#" class="btn--order">
                  Order
                </a>
                <p class="price">
                  <span>IDR</span> <strong>45.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="meal desert all">
            <img class="meal-img" src={img3} alt="Ajitsuke Tamago" />
            <div class="meal-content">
              <p class="meal-title">Ajitsuke Tamago</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>1900</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={restaurantOutline}></IonIcon>
                  <span>
                    NutriScore &reg; <strong>80</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={starOutline}></IonIcon>
                  <span>
                    <strong>4.9</strong> Rating (1809)
                  </span>
                </li>
              </ul>
              <div class="order">
                <a href="#" class="btn--order">
                  Order
                </a>
                <p class="price">
                  <span>IDR</span> <strong>45.000</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
