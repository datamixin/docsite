import React from "react";
import Translate from "@docusaurus/Translate";
import locale from "@site/src/components/i18n";

export default function Sources(): JSX.Element {
    return (
        <section className="tw-py-24 lg:tw-px-8">
            <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-5 lg:tw-gap-10 lg:tw-items-center">
                <div className="tw-p-4 tw-col-span-2">
                    <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold tw-text-gray-600">
                        <Translate id="global.data.source">Data Sources</Translate>
                    </h2>
                    <p className="tw-text-4xs tw-text-gray-500">
                        <Translate id="sources.explanation">
                            Import you data source from File base, On Premise Database, Cloud-based Storage,
                            API Invocation result or even you can create it's manually.
                            If your data source not supported, just submit feature request and
                            we will make it available for you.
                        </Translate>
                    </p>
                </div>
                <div className="tw-p-4 tw-col-span-3">
                    <img src={locale() + "/img/home-data-sources.png"} className="tw-block" />
                </div>
            </div>
        </section>
    );
}