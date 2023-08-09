import React from "react";
import Translate from "@docusaurus/Translate";
import locale from "@site/src/components/i18n";

export default function Visualization(): JSX.Element {
    return (
        <section className="tw-py-24 lg:tw-px-8">
            <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-5 lg:tw-gap-10 lg:tw-items-center">
                <div className="tw-p-4 tw-col-span-2">
                    <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold tw-text-gray-600">
                        <Translate id="visualization.title">Quick Visualization</Translate>
                    </h2>
                    <p className="tw-text-4xs tw-text-gray-500">
                        <Translate id="visualization.explanation">
                            Data visualization is the mandatory task in data analysis process.
                            We make it as a quick process without long journey of learning curve.
                            Datamixin can create from simple visualization to advance visualization such as
                            RadViz or Parallel Coordinate or even custom faceted layered visualization.
                        </Translate>
                    </p>
                </div>
                <div className="tw-p-4 tw-col-span-3">
                    <img src={locale() + "/img/home-visualization.png"} className="tw-block" />
                </div>
            </div>
        </section>
    );
}