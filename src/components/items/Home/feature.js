import React from "react";
import { IonIcon } from "@ionic/react";
import { nutritionOutline } from "ionicons/icons";
import { happyOutline } from "ionicons/icons";
import { earthOutline } from "ionicons/icons";
import { leafOutline } from "ionicons/icons";

const feature = () => {
  return (
    <div>
      <section className="section-feature">
        <div className="container">
          <span className="subheading">Delicious Healthy Noodle</span>
          <h2 className="heading-secondary head-how">
            Revolutionary noodle with gluten-free, vegan, and free of
            carcinogens
          </h2>
          <p className="how-description">
            Fivenoodle is made of 100% natural and organic ingredients. It
            contains no preservatives, artificial coloring, or MSG. Say goodbye
            to regular noodles! Introducing Fivenoodle, the healthy noodle that
            will bring a smile to your face and happiness to your heart. Forget
            about that long list of ingredients with Fivenoodle. It's super easy
            to cook, offers a variety of five flavors, and is available in a
            pack of two. Ideal for not just your family but also for
            entertaining guests and parties. Get your pack today and taste the
            difference! Explore the Fivenoodle a high-quality noodle that is
            perfect for today's healthy lifestyle. This product is made of five
            types of noodle - high protein and low fat, gluten-free and without
            artificial flavors, made from non-GMO soybeans and packed with
            vitamins, minerals and dietary fiber. Fivenoodle is the perfect
            choice for a healthy meal on-the-go.
          </p>
        </div>
        <div className="container grid grid--4-cols">
          <div className="feature">
            <IonIcon className="feature-icon" icon={nutritionOutline}></IonIcon>
            <p className="feature-title">Best Recipes</p>
            <p className="feature-text">
              Fivenoodle is a company that specializes in providing you the best
              noodle recipes to make the best noodles! We are committed to
              offering you the most delicious and unique noodle recipes on the
              market.
            </p>
          </div>
          <div className="feature">
            <IonIcon className="feature-icon" icon={leafOutline}></IonIcon>
            <p className="feature-title">Fresh & Organic</p>
            <p className="feature-text">
              Meet the new noodle that is so good for you, you'll wonder why you
              ever put anything else in your mouth! We use organic, fresh
              ingredients.
            </p>
          </div>
          <div className="feature">
            <IonIcon className="feature-icon" icon={happyOutline}></IonIcon>
            <p className="feature-title">Happy Tummy</p>
            <p className="feature-text">
              Our noodles are also gluten-free, vegan, and free of
              preservatives. We should have known, that our customers would want
              the best so we offer a wide variety of noodle shapes and sizes.
            </p>
          </div>
          <div className="feature">
            <IonIcon className="feature-icon" icon={earthOutline}></IonIcon>
            <p className="feature-title">Zero Waste</p>
            <p className="feature-text">
              Fivenoodle Feature is proud to be a company that is committed to
              zero waste. We only support plastic-free packaging, and our
              products are recyclable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default feature;
