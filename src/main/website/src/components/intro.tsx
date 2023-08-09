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
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import context from '@docusaurus/useDocusaurusContext';

export default function Intro(): JSX.Element {
    const { siteConfig, i18n } = context();
    const customFields = siteConfig["customFields"];
    return (
        <section className="tw-py-32 lg:tw-py-24 tw-text-center">
            <div className="tw-text-sm lg:tw-text-base tw-text-gray-400 tw-uppercase tw-font-bold tw-tracking-wider tw-mb-4">
                <Translate id="intro.powered.by">
                    Powered by Python
                </Translate>
            </div>
            <h1 className="tw-text-4xl lg:tw-text-7xl tw-tracking-tight tw-leading-none tw-font-extrabold tw-px-4  tw-text-gray-700">
                <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-sky-500 tw-to-sky-800">
                    <Translate id="intro.your.productive">
                        Your Predictive Apps
                    </Translate>
                </span>
                <br /> <Translate id="intro.data.science.apps">With Low Code Platform</Translate>
            </h1>
            <p className="tw-text-lg lg:tw-text-xl tw-font-normal tw-text-gray-500 tw-max-w-2xl tw-mx-auto tw-px-8">
                <Translate id="intro.explanation">
                    Use low code cloud platform to
                    transforms your valuable dataset into
                    predictive model that guide your decision.
                </Translate>
            </p>
            <div className="tw-mt-8 tw-flex tw-justify-center">
                <Link href={customFields.appsUrl}>
                    <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-mt-8 tw-group">
                        <div className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-3 tw-text-base tw-font-semibold tw-text-white tw-bg-sky-700 group-hover:tw-bg-sky-600 tw-border tw-border-transparent tw-rounded-md"
                            role="button" >
                            <Translate id="intro.request.demo">Request Demo</Translate>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}