import React from "react"
import PropTypes from "prop-types"
import { SharingBar, Tooltip } from 'chayns-components'
import { FRONTEND_URLS } from "constants/config"
import { FooterProps } from "constants/types"
import styles from "./Footer.module.scss"

require('../../../../../../constants/chayns.d')
require('../../../../../../constants/chayns-components.d')

const Footer = ({ date, dateAbsolute, id } : FooterProps) =>
    <div className = {styles.newsFooter}>
        <SharingBar 
            link = {`${FRONTEND_URLS[0]}?M=${id}`} 
        />
        <Tooltip
            content = {{
                text : `${new Date(dateAbsolute).toLocaleDateString("de-DE", {
                            weekday: "long", 
                            day: "numeric", 
                            month: "long", 
                            year: "numeric"
                        })}, ${new Date(dateAbsolute).toLocaleTimeString("de-DE")} Uhr`
            }}
            minWidth = {200}
            bindListeners
        >
            <div
                className = {styles.timeDisplay}
            >
                {date}
            </div>
        </Tooltip>
    </div>
   
Footer.propTypes = {
    date: PropTypes.string.isRequired,
    dateAbsolute: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

Footer.DisplayName = "Footer"

export default Footer