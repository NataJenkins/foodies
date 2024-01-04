import { getMeal } from "../../../../lib/meals";
import classes from "./page.module.css";
import Image from "next/image";

export default function MealsDetailPage({ params }) {
    const meal = getMeal(params.mealsSlug);
    meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by{" "}
                        <a href={`mailto:${meal.creator_email}`}>
                            {meal.creator}
                        </a>
                    </p>
                    <div className={classes.summary}>{meal.summary}</div>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{ __html: meal.instructions }}
                ></p>
            </main>
        </>
    );
}
