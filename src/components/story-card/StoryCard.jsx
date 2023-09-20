import './StoryCard.sass'
import Lantern from '../elemebts/Lantern'

const StoryCard = ({story}) => {
    const {theme, content} = story

    return (
        <div className="story-card">
            <Lantern />
            <span className='story-card-title'>{theme}</span>
            <p className='story-card-content'>{content}</p>
        </div>
    )
}

export default StoryCard;