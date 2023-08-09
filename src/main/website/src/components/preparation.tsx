import React from "react";
import Translate from "@docusaurus/Translate";
import locale from "@site/src/components/i18n";

export default function Preparation(): JSX.Element {
    return (
        <section className="tw-py-24 lg:tw-px-8">
            <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-3 lg:tw-gap-10 lg:tw-items-center">
                <div className="tw-p-4  tw-col-span-2">
                    <img src={locale() + "/img/home-preparation.png"} className="tw-block" />
                </div>
                <div className="tw-p-4 tw-col-span-1">
                    <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold tw-text-gray-600">
                        <Translate id="preparation.title">Easy Preparation</Translate>
                    </h2>
                    <p className="tw-text-4xs tw-text-gray-500">
                        <Translate id="preparation.explanation">
                            Dataset modification result is available instantly, never lose your context.
                            With intuitive user interface, user enable to streamline and transform their
                            dataset with easy. User can effortlessly cleanse, shape, and enrich their data
                            to ensure it's quality and readiness for analysis, model building and prediction.
                        </Translate>
                    </p>
                </div>
            </div>
        </section>
    );
}