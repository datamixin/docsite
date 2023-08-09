import React from "react";
import Translate from "@docusaurus/Translate";
import locale from "@site/src/components/i18n";

export default function Modeling(): JSX.Element {
    return (
        <section className="tw-py-24 lg:tw-px-8">
            <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-3 lg:tw-gap-10 lg:tw-items-center">
                <div className="tw-p-4 tw-col-span-2">
                    <img src={locale() + "/img/home-modeling.png"} className="tw-block" />
                </div>
                <div className="tw-p-4 tw-col-span-1">
                    <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold tw-text-gray-600">
                        <Translate id="modeling.title">Predictive Modeling</Translate>
                    </h2>
                    <p className="tw-text-4xs tw-text-gray-500">
                        <Translate id="modeling.explanation">
                            Building Predictive Machine Learning Model is the paramount in data science task.
                            From created model user may predict the unseen data.
                            With Data Modeler, user can build machine learning model by just drag and drop, all
                            commons evaluation metric already in place together with related dataset and
                            visualization.
                        </Translate>
                    </p>
                </div>
            </div>
        </section>
    );
}