import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

export default function Newsletter(): JSX.Element {
    return (
        <section className={styles.root}>
            <div className={clsx("container", styles.wrapper)}>
                <div>
                    <h2 className={styles.heading}><Translate id="newsletter.title">Subscribe for incoming updates</Translate></h2>
                </div>
                <form
                    action="https://news.datamixin.com/subscription/form"
                    method="post"
                    target="_blank"
                    className={styles.form}
                >
                    <input
                        placeholder={translate({ id: "newsletter.placeholder", message: "Email address" })}
                        type="email"
                        name="email"
                        className={clsx(styles.input, "button")}
                    />
                    <input
                        type="hidden"
                        name="l"
                        value="adbdd93a-f80a-4639-8e1e-1aa6cbfaa91f"
                    />
                    <input
                        type="submit"
                        value={translate({ id: "newsletter.button", message: "Subscribe" })}
                        className={clsx(styles.button, "button button--primary")}
                    />
                </form>
            </div>
        </section>
    );
}