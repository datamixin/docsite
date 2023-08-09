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
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    corePlugins: {
        preflight: false,
    },
    prefix: "tw-",
    important: true,
    theme: {
        extend: {
            screens: {
                docusaurus: "996px",
            },
            boxShadow: {
                highlight: "inset 0 1px 0 0 rgb(255 255 255 / 5%)",
            },
        },
    }
};