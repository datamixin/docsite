import React from "react";
import Footer from "@theme-original/Footer";
import Newsletter from "@site/src/components/newsletter";

export default function FooterWrapper(props: any) {
    return (
        <>
            <Newsletter />
            <Footer {...props} />
        </>
    );
}