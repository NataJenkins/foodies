import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "../../components/meals/meals-grid";
import { getMeals } from "../../../lib/meals";

export default async function MealsPage() {
    const meals = await getMeals();

    return (
        <>
            {console.log(meals)}
            <header className={classes.header}>
                <h1>
                    Delicious meals, created
                    <span className={classes.highlight}> by you</span>
                </h1>
                <p>
                    Choose yout favorite reciepie and cook it yourself. it is
                    easy and fun!{" "}
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipie</Link>
                </p>
            </header>
            <main>
                <MealsGrid meals={meals} />
            </main>
        </>
    );
}
