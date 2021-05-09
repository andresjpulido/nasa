import './apod.scss'

export default function Apod(props) {

    const photoData = props.data;

    if (!photoData)
        return (
            <div></div>
        )

    return (
        <div className="apod">
            {photoData.media_type === "image" ? (
                <img
                    src={photoData.url}
                    alt={photoData.title}
                    className="photo"
                />
            ) : (
                <iframe
                    title="space-video"
                    src={photoData.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />
            )}
            <div className="apod-text">
                <div className="apod-title">{photoData.title}</div>
                <div className="apod-date">{photoData.date}</div>
                <p className="apod-explanation">{photoData.explanation}</p>
            </div>
        </div>
    )
}