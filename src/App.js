import './App.sass';
import StoryCard from './components/story-card/StoryCard';
import ThemeCard from './components/theme-card/ThemeCard';
import data from './assets/data.json'
import Header from './components/header/Header';
import Stars from './components/elemebts/Stars';
import Moon from './components/elemebts/Moon';

function App() {
  const themes = data.storys.map(story => {
    const {theme} = story
    return <ThemeCard theme={theme} key={theme} />
  })

  const storys = data.storys.map(story => <StoryCard story={story} key={story.theme} />)

  return (
    <div className="App">
      <Moon />
      <Stars />
      <Header />
      <div className="theme-card-container">
       {themes}
      </div>
      <div className="story-card-container">
       {storys}
      </div>
    </div>
  )
}

export default App;
