import React from "react";

import { Datenschutz } from "./Datenschutz/Datenschutz";
import { Impressum } from "./Impressum/Impressum";

import './legals.less';

export const Legals = () => {
    return (
        <div className="legals__container">
            <Impressum /> | <Datenschutz />
        </div>
    )
} 