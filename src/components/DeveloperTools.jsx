import React, { useState } from "react"
import PropTypes from "prop-types"
import { Accordion, Checkbox } from 'chayns-components'
import styles from "./DeveloperTools.module.css"

const DeveloperTools = ({tappId, numberOfDisplayedNews, numberOfFetchedNews, numberOfDatabaseNews, showNews, cbShowNewsOnChange, useDevBackend, cbUseDevBackendOnChange}) => {
    const [copiedTappId, setCopiedTappId] = useState(false)
    const copyTappId = () => {
        navigator.clipboard.writeText(tappId)
        setCopiedTappId(true)
    }
    return(
        <Accordion head = "Developer Tools" open dafaultOpened>
            <div className = {styles.developerToolsFrame}>  
                <div className={styles.tappIdDisplay} onClick={copyTappId}>
                    <div className={styles.tappIdLabel}>    
                        tappId = {tappId}
                    </div>
                    <i className="fa fa-copy" />
                    {
                        copiedTappId &&
                        <div className={styles.tappIdCopiedLabel}>
                            ✅ Copied to clipboard.
                        </div>
                    }
                    <br />
                </div>
                Number of News in the databse = {numberOfDatabaseNews}<br />
                Number of fetched News = {numberOfFetchedNews}<br />
                Number of displayed News = {numberOfDisplayedNews}
                <Checkbox
                    checked = {useDevBackend}
                    onChange = {cbUseDevBackendOnChange}
                    className = {styles.cbShowMore}
                >
                    Use Dev Backend
                </Checkbox>
                <Checkbox
                    checked = {showNews}
                    onChange = {cbShowNewsOnChange}
                    className = {styles.cbShowMore}
                >
                    Show news
                </Checkbox>
                <br />
                <u>Sources: </u>
                <ul>
                    <li>
                        Frontend Code: <a href="https://github.com/MalteTasler/news" target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                    <li>
                        Backend Code: 
                        <ul>
                            <li>
                                <a href="https://schule.chayns.site/admin/code-editor?backendId=f11828e3" target="_blank" rel="noreferrer">chayns.Codes</a>
                            </li>
                            <li>
                                <a href="https://github.com/MalteTasler/news-backend" target="_blank" rel="noreferrer">GitHub (Private - ask for permissions)</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Accordion>
    )
}
DeveloperTools.propTypes = {
    tappId: PropTypes.number.isRequired,
    numberOfDatabaseNews: PropTypes.number.isRequired,
    numberOfFetchedNews: PropTypes.number.isRequired,
    numberOfDisplayedNews: PropTypes.number.isRequired,
    showNews: PropTypes.bool.isRequired,
    cbShowNewsOnChange: PropTypes.func.isRequired,
    useDevBackend: PropTypes.bool.isRequired,
    cbUseDevBackendOnChange: PropTypes.func.isRequired
}
export default DeveloperTools