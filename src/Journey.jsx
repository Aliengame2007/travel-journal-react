import React from 'react'
import maps from '../public/images/maps.png'

function Journey(props) {
    return(
        <section>
            <div>
                <img className="journey--img" src={props.journey.imageUrl} />
            </div>
            <div>
                <div className="journey--info">
                    <img className="journey--maps-img" src={maps} />
                    <p className="journey--maps-text">{props.journey.location}</p>
                    <p><a href={props.journey.googleMapsUrl} target="_blank">View on Google Maps</a></p>
                </div>
                <div className="journey--main">
                    <h1 className="journey--heading">{props.journey.title}</h1>
                    <p className="journey--date">{props.journey.startDate} - {props.journey.endDate}</p>
                    <p className="journey--description">{props.journey.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Journey