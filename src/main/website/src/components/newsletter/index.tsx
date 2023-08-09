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