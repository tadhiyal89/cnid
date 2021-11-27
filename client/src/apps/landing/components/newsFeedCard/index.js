import React from 'react';
import { formatDate } from '../../../common/utils/common';
import './style/index.css';

/**
 *
 * @function newsFeedCard
 * @export
 * @param {*} props
 * @returns it will html of the card
 */
export default function newsFeedCard(props) {
  const { title, description, urlToImage, publishedAt, author, content } = props;

  return (
    <div className="cards">
      <div className="card-item">
        <div className="card-image">
          <img className="image" src={urlToImage} />
        </div>
        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          <p className="card-intro">{description}</p>
          <div className="info-section">
            <span className="user-section">By {author}</span>,{' '}
            <span className="time-section">{publishedAt ? formatDate(new Date(publishedAt), 'dd-MM-yyyy ') : ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
