import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  id: number;
  title: string;
  imageUrl: string;
  hour: number;
  airport: string;
  description: string;
  seats: number;
}

const CarCard = ({
  title,
  imageUrl,
  hour,
  airport,
  description,
  seats,
  id,
}: CarCardProps) => {
  // Check if airport transfer is available or N/A
  const showAirportPrice = airport !== "N/A (Hourly Only)";

  return (
    <div className="relative overflow-hidden p-6 bg-gradient-to-b from-gray-800 to-gray-900 border border-[#FFD700]/30 rounded-xl shadow-[0_0_15px_rgba(255,215,0,0.15)] text-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,215,0,0.25)]">
      {/* Price Tag */}
      <div className="absolute -right-10 top-6 transform rotate-45 bg-[#FFD700] text-black font-bold py-1 px-12 text-sm shadow-md z-10">
        ${hour}/hr
      </div>

      {/* Car Image */}
      <div className="relative w-full h-52 mb-5 rounded-lg overflow-hidden group">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className=""
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
      </div>

      {/* Car Title */}
      <h2 className="text-2xl font-bold text-[#FFD700] mb-3 drop-shadow-[0_0_2px_rgba(0,0,0,0.7)]">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-3 px-2 line-clamp-2 h-10">
        {description}
      </p>

      {/* Pricing Section */}
      <div className="flex justify-center gap-4 mb-4 px-2">
        <div className="flex items-center bg-[#FFD700]/10 rounded-lg px-3 py-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 h-4 mr-2 text-[#FFD700] fill-current"
          >
            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
          <span className="text-sm font-medium text-gray-200">
            ${hour}/hour
          </span>
        </div>
        {showAirportPrice && (
          <div className="flex items-center bg-[#FFD700]/10 rounded-lg px-3 py-1.5 justify-center">
            <svg
              height="200px"
              width="200px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 46.876 46.876"
              xmlSpace="preserve"
              fill="#FFD700"
              stroke="#FFD700"
              className="w-6 h-5 mr-2"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path
                    style={{ fill: "#FFD700" }}
                    d="M26.602,24.568l15.401,6.072l-0.389-4.902c-10.271-7.182-9.066-6.481-14.984-10.615V2.681 c0-1.809-1.604-2.701-3.191-2.681c-1.587-0.021-3.19,0.872-3.19,2.681v12.44c-5.918,4.134-4.714,3.434-14.985,10.615l-0.39,4.903 l15.401-6.072c0,0-0.042,15.343-0.006,15.581l-5.511,3.771v2.957l7.044-2.427h3.271l7.046,2.427V43.92l-5.513-3.771 C26.644,39.909,26.602,24.568,26.602,24.568z"
                  />{" "}
                </g>{" "}
              </g>
            </svg>

            <span className="text-sm font-medium text-gray-200">{airport}</span>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="flex justify-around items-center mb-6 bg-gray-800/50 rounded-lg py-3 px-2">
        <div className="text-center flex flex-col items-center gap-1">
          <div className="bg-[#FFD700]/10 p-2 rounded-full mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 text-[#FFD700] fill-current"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </div>
          <p className="text-gray-200 text-sm font-medium">{seats} seats</p>
        </div>
        <div className="text-center flex flex-col items-center gap-1">
          <div className="bg-[#FFD700]/10 p-2 rounded-full mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              id="heated-seat"
              className="w-6 h-6 text-[#FFD700] fill-current"
            >
              <g id="Layer_2">
                <path d="M20.6836 3.0513c-2.1934.7314-3.8252 2.5962-4.2598 4.8667l-.5264 2.7534c-.3662 1.9155.0049 3.8784 1.0679 5.563.2202.3496.5322.6323.9038.8184.3198.1597.6665.2393 1.0127.2393.3857 0 .7705-.0986 1.1172-.2949.6577-.3721 1.0845-1.0444 1.1426-1.7974l.8555-11.123c.0259-.334-.1177-.6587-.3818-.8647C21.3516 3.0063 21.0024 2.9468 20.6836 3.0513zM4.293 21.707C4.4805 21.8945 4.7349 22 5 22h13c.2651 0 .5195-.1055.707-.293l2-2c.2593-.2588.356-.6392.252-.9902-.1035-.3516-.3911-.6177-.7495-.6948l-9.8516-2.1104c-2.9297-.6284-5.9453.2612-8.0649 2.3813-.3906.3906-.3906 1.0234 0 1.4141L4.293 21.707zM7.5156 8.5c0-.8721-.4517-1.6646-1.1787-2.0684C6.2378 6.3765 6.1948 6.2466 6.1885 6.1431 6.1807 6.0308 6.2109 5.8823 6.3174 5.8032c.4438-.3286.5371-.9551.208-1.3984C6.1973 3.9604 5.5698 3.8667 5.127 4.1968 4.4878 4.6699 4.1387 5.4463 4.1924 6.2734c.0532.8149.4917 1.5273 1.1729 1.9063C5.4761 8.2412 5.5156 8.3857 5.5156 8.5S5.4761 8.7588 5.3652 8.8203c-.6812.3789-1.1196 1.0913-1.1729 1.9063-.0537.8271.2954 1.6035.9346 2.0767C5.3057 12.936 5.5146 13 5.7212 13c.3062 0 .6084-.1396.8042-.4048.3291-.4434.2358-1.0698-.208-1.3984-.1064-.0791-.1367-.2275-.1289-.3398.0063-.1035.0493-.2334.1484-.2886C7.064 10.1646 7.5156 9.3721 7.5156 8.5zM12.5156 8.5c0-.8721-.4517-1.6646-1.1787-2.0684-.0991-.0552-.1421-.1851-.1484-.2886-.0078-.1123.0225-.2607.1289-.3398.4438-.3286.5371-.9551.208-1.3984-.3286-.4443-.9561-.5381-1.3984-.208C9.4878 4.6699 9.1387 5.4463 9.1924 6.2734c.0532.8149.4917 1.5273 1.1729 1.9063.1108.0615.1504.2061.1504.3203s-.0396.2588-.1504.3203c-.6812.3789-1.1196 1.0913-1.1729 1.9063-.0537.8271.2954 1.6035.9346 2.0767C10.3057 12.936 10.5146 13 10.7212 13c.3062 0 .6084-.1396.8042-.4048.3291-.4434.2358-1.0698-.208-1.3984-.1064-.0791-.1367-.2275-.1289-.3398.0063-.1035.0493-.2334.1484-.2886C12.064 10.1646 12.5156 9.3721 12.5156 8.5z" />
              </g>
            </svg>
          </div>
          <p className="text-gray-200 text-sm font-medium">Heated Seats</p>
        </div>
        <div className="text-center flex flex-col items-center gap-1">
          <div className="bg-[#FFD700]/10 p-2 rounded-full mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 text-[#FFD700] fill-current"
            >
              <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
            </svg>
          </div>
          <p className="text-gray-200 text-sm font-medium">Premium</p>
        </div>
      </div>

      {/* Button */}
      <div>
        <Link
          className="px-8 py-3 min-w-[150px] inline-block text-black font-bold bg-gradient-to-r from-[#FFD700] to-[#FFC000] rounded-xl shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          href={`/cars/${id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
