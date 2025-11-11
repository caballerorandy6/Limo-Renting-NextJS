"use client";

//Custom Components
import WeddingIcon from "@/components/shared/icons/WeddingIcon";
import CorporateTransferIcon from "@/components/shared/icons/CorporateTransferIcon";
import PartyIcon from "@/components/shared/icons/PartyIcon";
import WineGlassIcon from "@/components/shared/icons/WineGlassIcon";
import BuildingIcon from "@/components/shared/icons/BuildingIcon";
import PlaneIcon from "@/components/shared/icons/PlaneIcon";
import GlobeIcon from "@/components/shared/icons/GlobeIcon";
import PlanningIcon from "@/components/shared/icons/PlanningIcon";
import Planning2Icon from "@/components/shared/icons/Planning2Icon";
import SportsIcon from "@/components/shared/icons/SportsIcon";
import BinocularsIcon from "@/components/shared/icons/BinocularsIcon";
import Service from "@/components/features/services/Service";

//Interfaces
import { ServiceProps } from "@/types/services";

export const services: ServiceProps[] = [
  {
    id: "weddings",
    title: "Weddings",
    description: "Service - 01",
    content:
      "Leave the logistics to us and focus on what matters most—celebrating love and joy on your special day.",
    icon: <WeddingIcon />,
    buttonName: "Learn More",
    href: "/services",
    image: "/service/service1.webp",
    title2:
      "Luxury Wedding Limousines and Wedding Car Services in Miami-Dade County, FL",
    title3:
      "We Provide Quality Miami Wedding Day Limo and Shuttle Transportation",
    text1:
      "As any recently married couple can tell you, planning a wedding is both exciting and stressful. With so many tasks to attend to, booking wedding day limo services, a party bus or wedding transportation in Miami as early as possible takes one more thing off your plate for your special day. We even offerparty bus rentals and classic Rolls-Royce limo services in Miami! From wedding day transporting for the wedding party on the big day to a fun send-off at the airport for your honeymoon, you can trust American Transportation & Limo Services to provide all yourluxury chauffeured transportation needs during this special time in your life.",
    text2:
      "He bride has purchased a beautiful wedding dress costing hundreds (if not thousands) of dollars and gone through multiple fittings. The groom has rented a handsome tuxedo. The wedding party has invested in formal attire to help the two of you mark your lifelong commitment to one another. After all that, it would be a shame to walk out of the luxurious wedding venue and get into an old or unreliable car in order to transport the wedding party off to the reception. With our wedding day limo service in Miami, FL, you can relax knowing that an attractive, roomy luxury vehicle. Whether you go with our classic Rolls Royce rental, a limousine, or other luxury vehicle from our local fleet,  a professional chauffeur will be waiting for your wedding party at the end of the ceremony. You can even rent additional vehicles for wedding day shuttles in Miami to ensure that guests with a special place in your heart such as parents, grandparents, and siblings, get to the location of your reception without having to deal with driving, getting directions, traffic, or parking.",
    serviceAccordion: "",
  },
  {
    id: "corporate-services",
    title: "Corporate Services",
    description: "Service - 02",
    content:
      "Our professional chauffeurs are happy to pick you up and drop you off at the location of any corporate event, including one of the three local airports.",
    icon: <CorporateTransferIcon />,
    buttonName: "Learn More",
    href: "/services",
    image: "/service/service2.webp",
    title2:
      "Impress Business Guests with Their Own Personal Corporate Limo and Car Service in Miami, FL",
    title3: "Reliable Miami Corporate Limousine & Chauffeured Transportation",
    text1:
      "At American Transportation, we understand the importance of professionalism, efficiency, and reliability when it comes to corporate transportation. Whether you're hosting important clients, attending crucial meetings, or organizing corporate events, our comprehensive suite of services ensures that your business needs are met with the highest standards of excellence. Our corporate airport transportation services provide seamless transportation to and from private airports, ensuring executives and VIPs arrive at their destinations on time and in style. From arranging ground transportation to coordinating logistics, our experienced team handles every aspect of your corporate aviation needs with precision and professionalism.",
    text2:
      "For meetings and events, trust American Transportation to provide reliable transportation solutions tailored to your specific requirements. Whether you're hosting a conference, seminar, or corporate retreat, our fleet of premium vehicles and experienced chauffeurs ensure that your attendees arrive safely and comfortably, ready to make the most of the occasion.Looking to make a lasting impression on your clients or guests? Our meet and greet services offer a warm and welcoming experience, with professional greeters ensuring a smooth transition from airport arrival to ground transportation. Whether it's welcoming international delegates or providing VIP treatment to corporate guests, our meet and greet services set the tone for a successful and memorable experience. With American Transportation's Corporate Limo Services, you can trust us to handle all your transportation needs with professionalism, discretion, and attention to detail. Contact us today to experience the ultimate in Miami corporate transportation solutions.",
  },
  {
    id: "party-bus-rentals",
    title: "Party Bus Rentals",
    description: "Service - 03",
    content:
      "Our Miami party bus accommodates up to 30 passengers with side bench seating, offering music, movies, and beverages for a relaxing or lively experience.",
    icon: <PartyIcon />,
    buttonName: "Learn More",
    href: "/services",
    image: "/service/service3.webp",
    title2: "What to Expect When You Step Onboard Our Miami Party Bus",
    title3: "Enjoy All That Miami’s Bar and Nightclub Scene Has to Offer",
    text1:
      "Our Miami party bus has room for up to 30 passengers with bench seating on each side. You can request music to relax or party to, alcoholic beverages for those over age 21, movies, and much more. Each party bus provides you with relief from the South Florida heat, charging stations for all your electronics, Wi-Fi, and much more. Best of all, you and your friends won’t need to take several separate vehicles to get around Miami or require some members of the group to refrain from enjoying a few drinks because they need to drive. Keep in mind that our Miami party buses aren’t just for grown-ups. Maybe your child invited several friends, cousins, and classmates to a birthday party, and you don’t have enough space in your own vehicle to transport them all to the party destination. No worries, you can rent a party bus in Miami, FL for any occasion, including Miami wedding transportation or nights out on the town, and for guests of any age and we will ensure appropriate surroundings and offerings.",
    text2:
      "Going to one bar or nightclub with your friends is certainly fun but going to several in the same night is truly a memorable experience. Not sure which bars or clubs to visit? Our friendly, helpful, and certified party bus and limo company chauffeurs would be happy to make several suggestions. Once you finish at one location, get back on the party bus for more laughs and fun as our professional chauffeur delivers you to the next location. If you consume a little more than intended, you don’t have to deal with the hassle of leaving your car and arranging a sober ride home when you have already reserved a limo party bus in Miami, Florida.",
  },
  {
    id: "bachelorette-parties",
    title: "Bachelorette Parties",
    description: "Service - 04",
    content:
      "Bachelor and bachelorette parties are a cherished tradition, offering soon-to-be-married individuals a final night out with their wedding party and closest friends.",
    icon: <WineGlassIcon />,
    buttonName: "Learn More",
    href: "/services",
    image: "/service/service4.webp",
    title2: "A Large Fleet of Luxury Vehicles to Meet Every Need",
    title3:
      "Where to Go for Your Bachelor or Bachelorette Party in Miami, Florida",
    text1:
      "Bachelor and bachelorette parties have long been a tradition for people getting married soon to have one last night on the town as a single person with their wedding party and closest friends. Rather than drive yourself or assign someone else to do it, consider working with a luxury Miami limo company such as American Transportation & Limo Services to get around town in style. For some people, a bachelor or bachelorette party wouldn’t be complete without inviting 29 of their closest friends for a night of barhopping and visiting nightclubs in a Miami party bus. While not all limo companies can handle such a large request, it’s no problem for us. In fact, our 30-passenger party bus is perfect for such an occasion. You and your group can party all night long, including while en route from one destination to the next. We’re here to serve you, so don’t hesitate to ask for what you need to make the evening complete. Whether it’s certain music, alcoholic beverages, movies, or another reasonable request, we can make it happen. Maybe partying with 30 people isn’t quite your speed. If so, we have many other vehicle options available to you. Our Mercedes-Benz Sprinter Limo, for example, offers bench seating and holds up to 12 passengers. It’s also easy to hop on and off if you have several stops planned for the bachelor or bachelorette party bus or limo booking. If your group is as small as seven people, you can choose from our classic Chevrolet Suburban or Cadillac Escalade ESV. For truly intimate transportation for your bachelor or bachelorette party, you can even book a three-passenger Cadillac XTS or Lexus E350.",
    text2:
      "As the second largest city in Florida, Miami offers a rich bar and nightclub scene. Your professional chauffeur would be happy to recommend specific locations to stop at for your bachelor or bachelorette party in Miami. Of course, you’re not limited to visiting these types of establishments. The night is all about you or your friend or relative getting married and the people in the wedding party. Whatever is fun for your group is exactly where our chauffeur will take them. According to Wedding Wire, any place in the South Beach area is the place to be when celebrating with just the guys or just the girls before an upcoming wedding. Even if bars and nightclubs aren’t your preference, the area has plenty to offer with many authentic Cuban restaurants and endless opportunities to play water sports. Many limo companies can’t help you plan an itinerary for your bachelorette party or bachelor party in Miami, but the local chauffeurs American Transportation can. At American Transportation, we understand this is an exciting time in life for everyone in the wedding party. We would hate to see anyone disappointed by not getting the luxury vehicle they want for the date they have chosen for a bachelor or bachelorette party. We encourage you to reserve early for this reason. Miami-area residents can reach us at 305-885-5003 and those outside of the area may call toll-free at 877-377-0347. Our entire staff looks forward to serving your group, and don’t forget that we can help with your Miami wedding transportation as well!",
  },
  {
    id: "nights-on-the-town",
    title: "Nights on the Town",
    description: "Service - 05",
    content:
      "With our professional chauffeurs at the wheel, you can relax and focus on creating lasting memories.",
    icon: <BuildingIcon />,
    buttonName: "Learn More",
    href: "/services",
    image: "/service/service5.webp",
    title2: "",
    title3:
      "Professional Chauffeured Transportation For Your Fun Night Out on The Town in Miami",
    text1:
      "Welcome to our premier night on the town transportation service in Miami, Florida! When it’s time to let loose and enjoy an unforgettable evening with your friends or loved ones, our luxurious limo andchauffeured car service is here to elevate your experience. We understand that a night out is about more than just getting from point A to point B; it’s about indulging in style, comfort, and utmost convenience. With our professional chauffeurs at the wheel, you can relax and focus on creating lasting memories. Imagine stepping into one of our sleek and meticulously maintained vehicles, where you’ll be greeted with a warm smile and a refreshing beverage of your choice. Our fleet features a range of elegant options, from classic limousines to stylish sedans, ensuring that we have the perfect vehicle to suit your needs and preferences. Whether you’re celebrating a special occasion, attending a concert or sporting event, or simply want to explore the vibrant nightlife of our city, our Miami night on the town transportation service is designed to exceed your expectations. We take pride in our attention to detail and commitment to customer satisfaction, so you can trust us to handle every aspect of your transportation needs flawlessly.",
    text2:
      "With our local limo, party bus, and chauffeured car service, your safety and comfort are our top priorities. Our highly trained chauffeurs possess extensive knowledge of the local area and are dedicated to providing a smooth and secure ride. Sit back and enjoy the journey, knowing that we’ve got you covered from start to finish. When it’s time to paint the town red, make a statement with our night on the town transportation service in Miami, Florida. Contact us today to book your reservation and discover the epitome of luxury and style for your unforgettable night out. Let us handle the Miami night on the town transportation while you focus on creating memories that will last a lifetime.",
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description: "Service - 06",
    content:
      "Looking for the best Miami airport transportation? Our local and experienced limo and MIA car service chauffeurs can help!",
    buttonName: "Learn More",
    icon: <PlaneIcon />,
    href: "/services",
    image: "/service/service6.webp",
    title2:
      "What Awaits You Aboard Our Miami Airport Limousine and Chauffeured Transportation",
    title3: "Top-Rated MIA Airport Transportation Service",
    text1:
      "We are your premier solution for seamless and luxurious airport transportation services in Miami. Whether you're arriving at Miami International Airport (MIA) or need reliable transportation for a special event, business meeting, or leisure outing, our dedicated team is here to elevate your journey. With a fleet of top-of-the-line airport limousines and luxury vehicles, professional chauffeurs, and a commitment to unparalleled service, we ensure that every moment of your travel experience is comfortable and convenient. Discover the convenience and sophistication of our Miami Airport Transportation Services, where your satisfaction is our priority from touchdown to takeoff. We offer top quality limousine service while being swift and discreet. Our Chauffeurs are 100% certified and have years of experience in the field with an emphasis on hospitality and professionalism. Our professionally-trained Miami airport car service chauffeurs are reliable and ready to offer a VIP experience to our prestigious clients. Our vehicles offer an up most luxurious airport transportation experience that is tailored around the client’s needs. Our cars are fully equipped with water, chargers, mints, magazines, WiFi, newspaper, hand sanitizers, pen/paper and anything else the client might want if requested in advance.",
    text2:
      "As you explore all that Miami has to offer, let our 24/7 Miami Airport Transportation Services be your trusted partner in chauffeured transportation excellence. From prompt MIA airport pickups, sporting event shuttles, to corporate limo services, to stylish arrivals at your destination, our commitment to quality and professionalism shines through in every journey. Sit back, relax, and enjoy the sights and sounds of this vibrant city as you are driven to and from your destinations, knowing that you're in the capable hands of our experienced team. Book your next ride with us and experience the difference that our MIA airport limo and car services can make in your travel experience. Your local travel comfort, convenience, and satisfaction are our ultimate goals, and we look forward to exceeding your expectations time and time again.",
  },
  {
    id: "global-services",
    title: "Global Services",
    description: "Service - 07",
    content:
      "Travel the world effortlessly with American Transportation's global services, offering unmatched luxury, reliability, and convenience for every journey.",
    buttonName: "Learn More",
    icon: <GlobeIcon />,
    href: "/services",
    image: "/service/service7.webp",
    title2: "",
    title3: "",
    text1:
      "Experience luxury transportation wherever your journey takes you with American Transportation's global services. Whether you're traveling for business or leisure, our seamless and reliable transportation solutions ensure a stress-free travel experience. From airport pickups to city tours, our experienced chauffeurs will be there to greet you and ensure you reach your destination safely and comfortably. With our extensive network of partners around the world, you can trust us to provide the same level of excellence and professionalism wherever you go.",
    text2:
      "At American Transportation, we understand the importance of convenience and peace of mind when traveling internationally. That's why our global services go beyond just transportation – we also offer travel planning assistance to help you make the most of your trip. Whether you need assistance with itinerary management, accommodation bookings, or local recommendations, our dedicated team is here to ensure every aspect of your journey is taken care of. So sit back, relax, and let American Transportation take you wherever your wanderlust leads.",
  },
  {
    id: "travel-planning",
    title: "Travel Planning",
    description: "Service - 08",
    content:
      "Let our experts manage your travel plans with precision for a seamless, stress-free journey with American Transportation.",
    buttonName: "Learn More",
    icon: <PlanningIcon />,
    href: "/services",
    image: "/service/service8.webp",
    title2: "Welcome to American Transportation's Travel Planning Services!",
    title3: "",
    text1:
      "Planning a trip can be overwhelming, but with American Transportation by your side, you can leave the stress behind and focus on the excitement of your upcoming adventure. Our dedicated team of travel experts is here to assist you every step of the way, ensuring a seamless and unforgettable travel experience. From the moment you reach out to us, we'll work closely with you to understand your travel preferences, interests, and budget. Whether you're dreaming of a relaxing beach getaway, an adventurous mountain retreat, or a cultural exploration of a bustling city, we'll tailor your itinerary to match your desires perfectly. Our travel planning services go beyond just booking transportation. We'll take care of all the details, from arranging accommodations at luxurious hotels to coordinating activities and excursions that suit your interests. Need recommendations for the best restaurants, shopping spots, or hidden gems to explore? We've got you covered. With American Transportation handling your travel planning, you can rest assured that every aspect of your trip will be meticulously planned and executed with precision. So sit back, relax, and let us turn your travel dreams into reality. Contact us today to start planning your next unforgettable journey!",
    text2: "",
  },
  {
    id: "event-planning",
    title: "Event Planning",
    description: "Service - 09",
    content:
      "From weddings and corporate events to family reunions, American Transportation provides luxury transportation services to enhance any special occasion.",
    buttonName: "Learn More",
    icon: <Planning2Icon />,
    href: "/services",
    image: "/service/service9.webp",
    title2: "Welcome to American Transportation's Event Planning Services!",
    title3: "",
    text1:
      "Planning a special event can be a daunting task, but with American Transportation, it's an effortless and enjoyable experience. Whether you're organizing a corporate conference, a lavish wedding, or a milestone celebration, our expert event planners are here to bring your vision to life and ensure every detail is executed flawlessly. From the moment you reach out to us, we'll work closely with you to understand your unique preferences, requirements, and objectives for the event. Whether it's selecting the perfect venue, coordinating transportation for your guests, or arranging entertainment and decor, our team will handle every aspect of the planning process with professionalism and precision. With years of experience in the industry, we've built strong relationships with the best vendors and suppliers, ensuring you have access to top-notch services and amenities. From elegant limousines and luxurious party buses to personalized itineraries and VIP experiences, we'll tailor our offerings to exceed your expectations and create a truly unforgettable event. At American Transportation, we understand the importance of flawless execution when it comes to events. That's why our dedicated team is committed to providing unparalleled service, attention to detail, and flexibility to accommodate your needs. Whether you're planning a small intimate gathering or a large-scale affair, you can trust us to handle every aspect of your event with professionalism and care. Let us take the stress out of event planning so you can focus on enjoying the moment with your guests. Contact us today to start planning your next unforgettable event with American Transportation!",
    text2: "",
  },
  {
    id: "sporting-events",
    title: "Sporting Events",
    description: "Service - 10",
    content:
      "Cheer on Miami sports teams in style with American Transportation's luxury vehicles and expert chauffeurs for an unmatched game day experience.",
    buttonName: "Learn More",
    icon: <SportsIcon />,
    href: "/services",
    image: "/service/service10.webp",
    title2:
      "Top-Rated Miami Heat, Dolphins Game, and Sporting Event Limousine & Car Services",
    title3: "",
    text1:
      "Get ready to cheer on your favorite Miami sports teams in style with American Transportation. Whether you're heading to a Miami Heat basketball game, a Dolphins football match, or a Marlins baseball showdown, we've got you covered with our luxurious Miami transportation solutions. Imagine arriving at the stadium in a sleek and stylish limousine or a spacious party bus, equipped with all the amenities you need to kick off the pre-game festivities. With American Transportation, you'll not only arrive in comfort and style but also make a grand entrance that sets the tone for an unforgettable game day experience. Our experienced Miami event transportation chauffeurs are well-versed in navigating the bustling streets, ensuring you reach the stadium safely and on time. Forget about the hassle of parking or dealing with traffic, let us handle the logistics so you can focus on getting pumped up for the big game. Whether you're planning a trip to the Hard Rock Stadium, the American Airlines Arena, or Marlins Park, American Transportation is your go-to choice for sporting event transportation in Miami. So gather your friends, deck yourselves out in team colors, and let us take you to the game in true VIP fashion. Contact us today to book your ride and get ready to cheer on your Miami sports teams in style!",
    text2: "",
  },
  {
    id: "tours-sight-seeing",
    title: "Tours / Sight Seeing",
    description: "Service - 11",
    content:
      "Explore Miami's iconic landmarks and hidden gems in comfort and style with American Transportation's expertly curated tours.",
    buttonName: "Learn More",
    icon: <BinocularsIcon />,
    href: "/services",
    image: "/service/service11.webp",
    title2:
      "Check Out American Transportation's Miami Tours and Sightseeing Services!",
    title3: "",
    text1:
      "Discover the vibrant sights and sounds of Miami with American Transportation as your guide. Whether you're a local looking to explore hidden gems or a visitor eager to experience all that the Magic City has to offer, our expertly curated Miami tours and sightseeing experiences are designed to showcase the best of Miami's attractions and landmarks. From the iconic beaches of South Beach to the historic Art Deco district of Miami Beach, our knowledgeable chauffeurs will take you on a journey through the city's most famous landmarks and neighborhoods. Marvel at the stunning architecture, soak up the sun on pristine beaches, and immerse yourself in the rich cultural tapestry that makes Miami a truly unique destination. But our tours go beyond just the famous hotspots – we also offer off-the-beaten-path experiences that allow you to uncover the lesser-known treasures of Miami. Explore vibrant neighborhoods like Little Havana, Wynwood, and Coconut Grove, where you can sample delicious cuisine, browse local boutiques, and admire colorful street art. Whether you're interested in architecture, history, food, or art, our customizable Miami sightseeing tours cater to all interests and preferences. Sit back, relax, and let us handle the driving as you soak in the sights and sounds of Miami in comfort and style. Ready to embark on an unforgettable adventure? Contact us today to book your tour with American Transportation and experience the best of Miami like never before!",
    text2: "",
  },
];

const Services = () => {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((item) => (
            <Service
              key={item.title}
              id={item.id}
              title={item.title}
              description={item.description}
              content={item.content}
              icon={item.icon}
              buttonName={item.buttonName}
              href={item.href}
              image={item.image}
              title2={item.title2}
              title3={item.title3}
              text1={item.text1}
              text2={item.text2}
              serviceAccordion={item.serviceAccordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
