import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom'
import'./Tweet.css';

interface TweetProps {
  content:string
}
export function Tweet(props: TweetProps){
  return(
    <Link to="/status" className="tweet">
      <img src="https://github.com/khnum782.png" alt="Gustavo"/>
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Gustavo de Souza</strong>
          <span>@GustavoSouza</span>
        </div>
        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle/>
            10
          </button>
          <button type="button">
            <ArrowsClockwise/>
            10
          </button>
          <button type="button">
            <Heart/>
            10
          </button>
        </div>

    </div>
    </Link>
  )
}