import React from "react";
import { ReactNode } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import context from '@docusaurus/useDocusaurusContext';
import Translate from "@docusaurus/Translate";
import { translate } from "@docusaurus/Translate";

export default function Page(): JSX.Element {
    return (
        <Layout
            title={`${translate({
                id: "pricing.title",
                message: "Pricing",
            })}`}
            description={`${translate({
                id: "pricing.description",
                message: "Datamixin comes in one editons: starter edition. There is 14 days trial to get started",
            })}`}>
            <Pricing />
            <FAQs />
        </Layout>
    );
}

const bullet = (
    <svg
        className="tw-w-5 tw-h-5 tw-text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
        />
    </svg>
);

const Feature = ({
    children,
    soon,
    underline,
}: {
    children: ReactNode;
    soon?: boolean;
    underline?: boolean;
}) => (
        <li className="tw-flex tw-items-center">
            {bullet}
            <span
                className={[
                    "tw-ml-2 tw-text-base tw-font-normal tw-text-gray-600",
                    underline &&
                    "tw-border-0 tw-border-b-2 tw-border-solid tw-border-emerald-700",
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                {children}{" "}
                {soon && <span className="tw-text-sm tw-text-gray-400">(soon)</span>}
            </span>
        </li>
    );

const Pricing = () => {

    const { siteConfig } = context();
    const customFields = siteConfig["customFields"];
    return (
        <section className="tw-py-12 tw-bg-white sm:tw-py-16 lg:tw-py-20 xl:tw-py-24">
            <div className="tw-px-4 tw-mx-auto tw-max-w-7xl">
                <div className="tw-max-w-3xl tw-mx-auto tw-text-center">
                    <h2 className="tw-text-4xl tw-font-semibold tw-text-sky-700 sm:tw-text-4xl lg:tw-text-5xl xl:tw-text-6xl">
                        Datamixin, <br className="sm:tw-hidden" />
                        <Translate id="pricing.motto">simple pricing</Translate>
                    </h2>
                    <p className="tw-mt-4 tw-text-xl tw-font-normal tw-text-gray-600">
                        <Translate id="pricing.explanation">Your time is expensive &ndash; be productive with Datamixin</Translate>
                    </p>
                </div>

                <div className="tw-grid tw-max-w-md tw-grid-cols-1 tw-gap-20 tw-mx-auto tw-mt-12 lg:tw-grid-cols-3 lg:tw-gap-4 sm:tw-mt-16 lg:tw-max-w-6xl">

                    <div className="tw-flex tw-flex-col tw-p-6 tw-rounded-md">
                        <div className="tw-flex-1">
                            <h3 className="tw-text-lg tw-font-bold tw-text-sky-900">
                                <Translate id="pricing.trial.title">Demo Cloud</Translate>
                            </h3>

                            <div className="tw-flex tw-items-end tw-mt-3">
                                <p className="tw-text-4xl tw-font-normal tw-text-gray">
                                    <Translate id="pricing.trial.period">14 Days</Translate>
                                </p>
                            </div>
                            <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-600">
                                <Translate id="pricing.trial.explanation">
                                    Get started with demo instalce &mdash; experience limited functionality
                                </Translate>
                            </p>

                            <hr className="tw-mt-8 tw-border-gray-900" />

                            <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
                                <Feature underline>
                                    <Translate id="pricing.nopayment">No payment required </Translate>
                                </Feature>
                                <Feature>
                                    <Translate id="pricing.unlimited.project">Unlimited projects</Translate>
                                </Feature>
                                <Feature>
                                    <Translate id="pricing.support.limited">Limited support</Translate>
                                </Feature>
                            </ul>
                        </div>

                        <Link href="mailto:info@datamixin.com">
                            <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-mt-8 tw-group">
                                <div className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-3 tw-text-base tw-font-semibold tw-text-white tw-bg-green-700 group-hover:tw-bg-green-800 tw-border tw-border-transparent tw-rounded-md"
                                    role="button" >
                                    <Translate id="pricing.request.demo">Request Demo</Translate>
                                </div>
                            </div>
                        </Link>

                    </div>

                    {/*
                    <div className="tw-flex tw-flex-col tw-p-6 tw-bg-gray-200 tw-rounded-md">
                        <div className="tw-flex-1">
                            <h3 className="tw-text-lg tw-font-bold tw-text-sky-900">
                                <Translate id="pricing.personal.title">Personal Cloud</Translate>
                            </h3>

                            <div className="tw-flex tw-items-end tw-mt-3">
                                <p className="tw-text-4xl tw-font-normal tw-text-gray-700">
                                    <Translate id="pricing.personal.monthly">% Revenue</Translate>
                                </p>
                                <p className="tw-ml-1 tw-text-base tw-font-normal tw-text-gray-700">
                                    / <Translate id="pricing.personal.period">month</Translate>
                                </p>
                            </div>
                            <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-600">
                                <Translate id="pricing.personal.explanation">
                                    Move to the personal edition with your one-person operation
                                </Translate>
                            </p>

                            <hr className="tw-mt-8 tw-border-gray-800" />

                            <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
                                <Feature underline>
                                    <Translate id="pricing.personal.licence">Personal licenses</Translate>
                                </Feature>
                                <Feature>
                                    <Translate id="pricing.unlimited.project">Unlimited projects</Translate>
                                </Feature>
                                <Feature>
                                    <Translate id="pricing.support.email">Email support</Translate>
                                </Feature>
                            </ul>
                        </div>

                        <Link href={typeof customFields.consoleUrl === "string" ? customFields.consoleUrl : ""}>
                            <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-mt-8 tw-group">
                                <div className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-3 tw-text-base tw-font-semibold tw-text-white tw-bg-sky-900 group-hover:tw-bg-sky-800 tw-border tw-border-transparent tw-rounded-md"
                                    role="button" >
                                    <Link
                                        href="mailto:info@datamixin.com"
                                        className="tw-font-semibold tw-text-white"
                                    ><Translate id="pricing.email.us">Email Us</Translate>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                    */}

                    <div className="tw-flex tw-flex-col tw-p-6 tw-bg-blue-200 tw-rounded-md">
                        <div className="tw-flex-1">
                            <h3 className="tw-text-lg tw-font-bold tw-text-sky-900">
                                <Translate id="pricing.managed.licence">Managed Service</Translate>
                            </h3>

                            <div className="tw-flex tw-items-end tw-mt-3">
                                <p className="tw-text-4xl tw-font-normal tw-text-gray-800">
                                    <Translate id="pricing.managed.monthly">Billed</Translate>
                                </p>
                                <p className="tw-ml-1 tw-text-base tw-font-normal tw-text-gray-700">
                                    <Translate id="pricing.managed.period">/ RAM / month</Translate>
                                </p>
                            </div>
                            <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-800">
                                <Translate id="pricing.managed.explanation">
                                    Installed on premise and get fully managed service for your amazing company
                                </Translate>
                            </p>

                            <hr className="tw-mt-8 tw-border-gray-800" />

                            <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
                                <Feature underline>
                                    <Translate id="pricing.unlimited.users">Unlimited users</Translate>
                                </Feature>
                                <Feature>
                                    <Translate id="pricing.unlimited.project">Unlimited projects</Translate>
                                </Feature>
                                <Feature>
                                    <Translate id="pricing.support.priority">Priority support</Translate>
                                </Feature>
                            </ul>
                        </div>

                        <Link href="mailto:info@datamixin.com">
                            <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-mt-8 tw-group">
                                <div className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-3 tw-text-base tw-font-semibold tw-text-white tw-bg-sky-900 group-hover:tw-bg-sky-800 tw-border tw-border-transparent tw-rounded-md"
                                    role="button" >
                                    <Translate id="pricing.email.us">Email Us</Translate>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="tw-flex tw-flex-col tw-p-6 tw-bg-orange-100 tw-rounded-md">
                        <div className="tw-flex-1">
                            <h3 className="tw-text-lg tw-font-bold tw-text-sky-900">
                                <Translate id="pricing.whitelabel.title">White Label</Translate>
                            </h3>

                            <div className="tw-flex tw-items-end tw-mt-3">
                                <p className="tw-text-4xl tw-font-normal tw-text-gray-700">
                                    <Translate id="pricing.whitelabel.monthly">% Revenue</Translate>
                                </p>
                                <p className="tw-ml-1 tw-text-base tw-font-normal tw-text-gray-700">
                                    / <Translate id="pricing.whitelabel.period">month</Translate>
                                </p>
                            </div>
                            <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-600">
                                <Translate id="pricing.whitelabel.explanation">
                                    Create your own branding within your own market fit and let we manage it
                                </Translate>
                            </p>

                            <hr className="tw-mt-8 tw-border-gray-800" />

                            <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
                                <Feature underline>
                                    <Translate id="pricing.noupfront">No upfront cost</Translate>
                                </Feature>
                                <Feature>
                                    <Translate id="pricing.comarketing">Co-Marketing</Translate>
                                </Feature>
                                <Feature>
                                    <Translate id="pricing.support.priority">Priority support</Translate>
                                </Feature>
                            </ul>
                        </div>

                        <Link href="mailto:info@datamixin.com">
                            <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-mt-8 tw-group">
                                <div className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-3 tw-text-base tw-font-semibold tw-text-white tw-bg-sky-900 group-hover:tw-bg-sky-800 tw-border tw-border-transparent tw-rounded-md"
                                    role="button" >
                                    <Translate id="pricing.email.us">Email Us</Translate>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

const faqItems = [
    /*
    {
        question: translate({ "id": "pricing.faq.license.q", "message": "What is a license?" }),
        answer: translate({
            "id": "pricing.faq.license.a", "message": "One license is a right to use Datamixin application on apps.datamixin.com"
        }),
    },
    {
        question: translate({ "id": "pricing.faq.refund.q", "message": "Do you have a refund policy?" }),
        answer: translate({
            "id": "pricing.faq.refund.a", "message": "Yes, we have a 30-day money-back guarantee. Send us an email at info@datamixin.com or chat us."
        }),
    },
    {
        question: translate({ "id": "pricing.faq.free.q", "message": "Do you offer a free tier?" }),
        answer: translate({
            "id": "pricing.faq.free.a", "message": "Unfortunately no. Our trial period should be enough for your and no payment commitment required, just sign-up and you have access to application features."
        }),

    },
    {
        question: translate({ "id": "pricing.faq.payment.q", "message": "What payment options do you have?" }),
        answer: translate({
            "id": "pricing.faq.payment.a", "message": "Our payments are processed by midtrans.com. They support commons online payment.",
        }),
    },
    {
        question: translate({ "id": "pricing.faq.cancel.q", "message": "What happens if I cancel my subscription?" }),
        answer: translate({
            "id": "pricing.faq.cancel.a", "message": "Don't worry, Datamixin will refund your money and your data will be keep for one month.",
        }),
    },
    */
    {
        question: translate({ "id": "pricing.faq.enterprise.q", "message": "I need enterprise license. What do I do?" }),
        answer: translate({
            "id": "pricing.faq.enterprise.a", "message": "Send us an email at info@datamixin.com and chat us and we'll create a plan for you.",
        }),
    },
];

export function FAQs() {
    return (
        <div className="tw-mx-auto tw-max-w-7xl tw-py-16 tw-px-6 sm:tw-py-24 lg:tw-px-8">
            <h2 className="tw-text-2xl tw-font-bold tw-leading-10 tw-tracking-tight tw-text-gray">
                <Translate id="pricing.faq.title">Frequently asked questions</Translate>
            </h2>
            <p className="tw-mt-6 tw-max-w-2xl tw-text-base tw-leading-7 tw-text-gray-800">
                <Translate id="pricing.faq.explanation.open">Have a different question and can’t find the answer you’re looking for?
                    Reach out to our support team by sending us an</Translate>{" "}
                <Link href="mailto:info@datamixin.com"
                    className="tw-font-semibold tw-text-sky-600 hover:tw-text-sky-500" >
                    Email
                </Link>{" "}
                <Translate id="pricing.faq.explanation.close">and we’ll get back to you as soon as we can.</Translate>
            </p>
            <div className="tw-mt-20">
                <dl className="tw-space-y-16 sm:tw-grid sm:tw-grid-cols-2 sm:tw-gap-x-6 sm:tw-gap-y-16 sm:tw-space-y-0 lg:tw-gap-x-10">
                    {faqItems.map((faq, index) => (
                        <div key={index}>
                            <dt className="tw-text-base tw-font-semibold tw-leading-7 tw-text-gray-800">
                                {faq.question}
                            </dt>
                            <dd className="tw-mt-2 tw-ml-0 tw-text-base tw-leading-7 tw-text-gray-600">
                                {faq.answer}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}