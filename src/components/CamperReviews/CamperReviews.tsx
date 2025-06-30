import css from './CamperReviews.module.css';
import sprite from '../../img/icons.svg';
import { CamperReview } from '../../types/camper';

interface CamperReviewsProps {
  reviews?: CamperReview[];
}

export default function CamperReviews({ reviews }: CamperReviewsProps) {
  const renderStars = (rating: any) => {
    const roundedRating = Math.round(rating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`${css.star} ${
            i <= roundedRating ? css.filled : css.empty
          }`}
        >
          <use href={`${sprite}#icon-star`} />
        </svg>
      );
    }
    return stars;
  };

  if (!reviews || reviews.length === 0) {
    return <p className={css.noReviews}>No reviews available</p>;
  }

  return (
    <div className={css.reviewBlock}>
      {reviews.map((review, index) => (
        <div key={index} className={css.reviewItem}>
          <div className={css.wrap}>
            <div className={css.ava}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className={css.reviewerName}>{review.reviewer_name}</h3>
              <div className={css.stars}>
                {' '}
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>
          <p className={css.reviewComment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
