import { getMeal } from "../../../../lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const meal = getMeal(params.mealSlug);
    if (!meal) {
        notFound();
    }
    return {
        title: meal.title,
        description: meal.summary,
    };
}

export default function MealsDetailPage({ params }) {
    const meal = getMeal(params.mealsSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill alt="meal image" />
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
