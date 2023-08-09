/*
 * Copyright (c) 2020-2023 Datamixin.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
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