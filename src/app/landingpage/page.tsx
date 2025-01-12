import { DealCard } from '../ui/landingpage/cards';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-md-4">
          <DealCard 
            businessName="Local Restaurant"
            dealTitle="2-Course Dinner Special"
            address="123 Main St, City"
            distance="1.2 miles away"
            originalPrice={49.99}
            timedPrice={39.99}
            timedPriceEndTime={new Date(Date.now() + 24 * 60 * 60 * 1000)}
            discountPrice={34.99}
            discountCode="DINNER10"
            mainImage="/deals/beauty-t440x266.webp"
            hoverImage="/deals/woman-t440x266.webp"
            isPopular={true}
          />
        </div>

        <div className="col-md-4">
          <DealCard 
            businessName="Spa & Wellness"
            dealTitle="Luxury Massage Package"
            address="456 Elm St, City"
            distance="0.8 miles away"
            originalPrice={129.99}
            timedPrice={99.99}
            timedPriceEndTime={new Date(Date.now() + 48 * 60 * 60 * 1000)}
            discountPrice={89.99}
            discountCode="RELAX20"
            mainImage="/deals/woman-t440x266.webp"
            hoverImage="/deals/beauty-t440x266.webp"
            isPopular={false}
          />
        </div>

        <div className="col-md-4">
          <DealCard 
            businessName="Adventure Park"
            dealTitle="Family Fun Package"
            address="789 Oak St, City"
            distance="3.5 miles away"
            originalPrice={79.99}
            timedPrice={59.99}
            timedPriceEndTime={new Date(Date.now() + 12 * 60 * 60 * 1000)}
            discountPrice={49.99}
            discountCode="FUN25"
            mainImage="/deals/beauty-t440x266.webp"
            hoverImage="/deals/woman-t440x266.webp"
            isPopular={true}
          />
        </div>
      </div>
    </div>
  );
}
