import { DealCard } from '../ui/landingpage/cards';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
          <h1 className="text-4xl font-bold">
            Find the best deals in your area
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </div>
    </section>
  );
}
