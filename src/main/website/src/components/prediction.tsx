import React from "react";
import Translate from "@docusaurus/Translate";
import locale from "@site/src/components/i18n";

export default function Prediction(): JSX.Element {
    return (
        <section className="tw-py-24 lg:tw-px-8">
            <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-5 lg:tw-gap-10 lg:tw-items-center">
                <div className="tw-p-4 tw-col-span-2">
                    <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold tw-text-gray-600">
                        <Translate id="prediction.title">Run Prediction</Translate>
                    </h2>
                    <p className="tw-text-4xs tw-text-gray-500">
                        <Translate id="prediction.explanation">
                            Once your machine learning model is created, you can execute prediction using new dataset.
                            Tryout Dialog is used for single record prediction at a time.
                            For dataset prediction user may implements prediction formula by providing new dataset.</Translate>
                    </p>
                </div>
                <div className="tw-p-4 tw-col-span-3">
                    <img src={locale() + "/img/home-prediction.png"} className="tw-block" />
                </div>
            </div>
        </section >
    );
}