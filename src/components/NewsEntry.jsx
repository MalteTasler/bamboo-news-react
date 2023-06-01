import React, { useState } from "react"
import PropTypes from "prop-types"
import { Gallery } from 'chayns-components'
import Footer from './Footer'

const NewsEntry = ({title, message, imageList, publishTimestamp, now}) =>
{
    const maxLength = 220
    let messageIsLong = false
    let cutMessage

    const [messageIsExtended, setMessageIsExtended] = useState(false)
    
    if(message.length >= maxLength && !messageIsExtended)
    {
        messageIsLong = true
        const truncated = message.substr(0, maxLength)
        const lastSpaceIndex = truncated.lastIndexOf(" ")
        const substring = truncated.substr(0, lastSpaceIndex)
        cutMessage = <span>{substring} <a className="btLoadWholeMessage" onClick={displayWholeMessage}>Mehr</a></span>
    }
    function displayWholeMessage() {
        setMessageIsExtended(true)
    }
    const getTimeAgo = (timestamp) => {
        const diff = now.getTime() - timestamp

        // Eine Minute in Millisekunden
        const minute = 60 * 1000
        // Eine Stunde in Millisekunden
        const hour = 60 * minute
        // Ein Tag in Millisekunden
        const day = 24 * hour
        // Eine Woche in Millisekunden
        const week = 7 * day
        // Ein Monat in Millisekunden
        const month = 30 * day

        if (diff < minute) {
            return 'vor weniger als einer Minute'
        }
        if (diff < hour) {
            const minutesAgo = Math.floor(diff / minute)
            return `vor ${minutesAgo} Minute${minutesAgo > 1 ? 'n' : ''}`
        } if (diff < day) {
            const hoursAgo = Math.floor(diff / hour)
            return `vor ${hoursAgo} Stunde${hoursAgo > 1 ? 'n' : ''}`
        } if (diff < day * 2) {
            return 'gestern'
        } if (diff < week) {
            const daysAgo = Math.floor(diff / day)
            return `vor ${daysAgo} Tag${daysAgo > 1 ? 'en' : ''}`
        }
        if (diff < month) {
            const weeksAgo = Math.floor(diff / week)
            return `vor ${weeksAgo} Woche${weeksAgo > 1 ? 'n' : ''}`
        }
        const monthsAgo = Math.floor(diff / month)
        return `vor ${monthsAgo} Monat${monthsAgo > 1 ? 'en' : ''}`   
    } 
    return(
        <div className = "news content__card">
            <Gallery images={imageList} />
            <h2>{title}</h2>
            {messageIsLong ? cutMessage : message}
            <Footer date = {getTimeAgo(publishTimestamp)} />
        </div>
    )
}
NewsEntry.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
    imageList: PropTypes.arrayOf(PropTypes.string),
    publishTimestamp: PropTypes.number.isRequired,
    now: PropTypes.shape({
        getTime: PropTypes.func
    }).isRequired
}
NewsEntry.defaultProps = {
    title : "",
    imageList: []
}
export default NewsEntry