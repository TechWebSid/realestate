import Image from 'next/image';
import Link from 'next/link';

export default function PropertyListing() {
  const properties = [
    {
      id: 1,
      title: "Swapnil Sangam Society",
      images: [
        {
          src: "/images/p1.jpg",
          alt: "Swapnil Sangam Exterior View"
        },
        {
          src: "/images/p2.jpg",
          alt: "Swapnil Sangam Living Space"
        },
        {
          src: "/images/p3.jpg",
          alt: "Swapnil Sangam Community Area"
        }
      ],
      configurations: [
        "2 BHK - 1150 sq.ft.",
        "3 BHK - 1450 sq.ft.",
        "4 BHK - 1800 sq.ft."
      ],
      amenities: {
        society: [
          "24x7 Security",
          "Swimming Pool",
          "Gym",
          "Community Hall",
          "Children's Play Area",
          "Landscaped Gardens"
        ],
        location: [
          "Metro Station - 1 km",
          "Shopping Mall - 2 km",
          "Hospital - 1.5 km",
          "School - 0.5 km"
        ]
      }
    },
    {
      id: 2,
      title: "Vision Vihar",
      images: [
        {
          src: "/images/v1.jpg",
          alt: "Vision Vihar Exterior View"
        },
        {
          src: "/images/v2.jpg",
          alt: "Vision Vihar Living Space"
        },
        {
          src: "/images/v3.jpg",
          alt: "Vision Vihar Community Area"
        }
      ],
      amenities: {
        society: [
          "24x7 Security",
          "Wide Roads",
          "Gated Society",
          "Club House",
          "Commercial Space",
          "24x7 Water Supply"
        ],
        location: [
          "Airport",
          "Medanta Hospital",
          "SGPGI",
          "Lulu Mall",
          "International Cricket Stadium"
        ]
      }
    },
    {
      id: 3,
      title: "Residential Plot - Mohanlalganj",
      location: "Near Mohanlalganj Tehsil, Lucknow",
      images: [
        {
          src: "/images/p4.jpg",
          alt: "Mohanlalganj Plot View"
        },
        {
          src: "/images/p5.jpg",
          alt: "Mohanlalganj Area View"
        },
        {
          src: "/images/p6.jpg",
          alt: "Mohanlalganj Location"
        }
      ],
      highlights: [
        {
          title: "Prime Location",
          points: [
            "300 meters from highway",
            "Near Mohanlalganj Tehsil",
            "Perfect for building dream home"
          ]
        },
        {
          title: "Budget-Friendly",
          points: ["Great residential plot within budget"]
        },
        {
          title: "Immediate Construction",
          points: ["Ready for immediate construction"]
        },
        {
          title: "Investment Opportunity",
          points: ["Upcoming SCR (Southern City Ring Road)"]
        }
      ],
      contact: {
        phone: "088876 76039",
        partnership: {
          available: true,
          details: "Join our team as a partner with attractive incentives"
        }
      }
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
        <div className="space-y-16">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {property.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative h-64 rounded-2xl overflow-hidden ${
                      index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                ))}
              </div>

              {/* Property Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">{property.title}</h3>
                
                {/* Configurations */}
                {property.configurations && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Configurations</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {property.configurations.map((config, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-700">
                          <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                          <span>{config}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Amenities */}
                {property.amenities && (
                  <div className="space-y-6">
                    {property.amenities.society && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Society Amenities</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {property.amenities.society.map((amenity, index) => (
                            <div key={index} className="flex items-center space-x-2 text-gray-700">
                              <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {property.amenities.location && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Location Amenities</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {property.amenities.location.map((amenity, index) => (
                            <div key={index} className="flex items-center space-x-2 text-gray-700">
                              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Highlights for Mohanlalganj Plot */}
                {property.highlights && (
                  <div className="space-y-6">
                    <p className="text-gray-600">{property.location}</p>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {property.highlights.map((highlight, index) => (
                        <div key={index} className="bg-rose-50/50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                          <ul className="space-y-2">
                            {highlight.points.map((point, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-gray-700">
                                <span className="text-rose-500">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {property.contact && (
                      <div className="bg-gradient-to-r from-rose-100 to-orange-100 rounded-xl p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                          <div>
                            <p className="font-medium text-gray-900">Contact us for details:</p>
                            <p className="text-lg font-semibold text-rose-600">{property.contact.phone}</p>
                          </div>
                          {property.contact.partnership.available && (
                            <div className="text-center sm:text-right">
                              <p className="font-medium text-gray-900">Partnership Opportunity</p>
                              <p className="text-gray-700">{property.contact.partnership.details}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 