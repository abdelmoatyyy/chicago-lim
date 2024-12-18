import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  id: number;
  title: string;
  imageUrl: string;
  hour: number;
  day: number;
  airport: string;
  description: string;
  seats: number;
}

const CarCard = ({
  title,
  imageUrl,
  hour,
  day,
  airport,
  description,
  seats,
  id,
}: CarCardProps) => {
  return (
    <div className="max-w-sm p-4 border bg-[#FFFAF0] border-[#CD9900] rounded-lg shadow-lg text-center  transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Car Image */}
      <Image
        src={imageUrl} // Replace with your image path
        alt="Mercedes Benz E-Class"
        width={300}
        height={200}
        className="mx-auto mb-4"
      />

      {/* Car Title */}
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-black-500 text-sm mb-4">{description}</p>

      {/* Features */}
      <div className="flex justify-center gap-8 mb-4 items-center">
        <div className="text-center rounded-lg border p-2 flex flex-col justify-center items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6 h-6"
          >
            {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
          </svg>

          <p className="text-gray-700 text-sm font-bold">{seats} seats</p>
        </div>
        <div className="text-center  rounded-lg border p-2 flex flex-col justify-center items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            id="heated-seat"
            className="w-6 h-6"
          >
            <g id="Layer_2">
              <path d="M20.6836 3.0513c-2.1934.7314-3.8252 2.5962-4.2598 4.8667l-.5264 2.7534c-.3662 1.9155.0049 3.8784 1.0679 5.563.2202.3496.5322.6323.9038.8184.3198.1597.6665.2393 1.0127.2393.3857 0 .7705-.0986 1.1172-.2949.6577-.3721 1.0845-1.0444 1.1426-1.7974l.8555-11.123c.0259-.334-.1177-.6587-.3818-.8647C21.3516 3.0063 21.0024 2.9468 20.6836 3.0513zM4.293 21.707C4.4805 21.8945 4.7349 22 5 22h13c.2651 0 .5195-.1055.707-.293l2-2c.2593-.2588.356-.6392.252-.9902-.1035-.3516-.3911-.6177-.7495-.6948l-9.8516-2.1104c-2.9297-.6284-5.9453.2612-8.0649 2.3813-.3906.3906-.3906 1.0234 0 1.4141L4.293 21.707zM7.5156 8.5c0-.8721-.4517-1.6646-1.1787-2.0684C6.2378 6.3765 6.1948 6.2466 6.1885 6.1431 6.1807 6.0308 6.2109 5.8823 6.3174 5.8032c.4438-.3286.5371-.9551.208-1.3984C6.1973 3.9604 5.5698 3.8667 5.127 4.1968 4.4878 4.6699 4.1387 5.4463 4.1924 6.2734c.0532.8149.4917 1.5273 1.1729 1.9063C5.4761 8.2412 5.5156 8.3857 5.5156 8.5S5.4761 8.7588 5.3652 8.8203c-.6812.3789-1.1196 1.0913-1.1729 1.9063-.0537.8271.2954 1.6035.9346 2.0767C5.3057 12.936 5.5146 13 5.7212 13c.3062 0 .6084-.1396.8042-.4048.3291-.4434.2358-1.0698-.208-1.3984-.1064-.0791-.1367-.2275-.1289-.3398.0063-.1035.0493-.2334.1484-.2886C7.064 10.1646 7.5156 9.3721 7.5156 8.5zM12.5156 8.5c0-.8721-.4517-1.6646-1.1787-2.0684-.0991-.0552-.1421-.1851-.1484-.2886-.0078-.1123.0225-.2607.1289-.3398.4438-.3286.5371-.9551.208-1.3984-.3286-.4443-.9561-.5381-1.3984-.208C9.4878 4.6699 9.1387 5.4463 9.1924 6.2734c.0532.8149.4917 1.5273 1.1729 1.9063.1108.0615.1504.2061.1504.3203s-.0396.2588-.1504.3203c-.6812.3789-1.1196 1.0913-1.1729 1.9063-.0537.8271.2954 1.6035.9346 2.0767C10.3057 12.936 10.5146 13 10.7212 13c.3062 0 .6084-.1396.8042-.4048.3291-.4434.2358-1.0698-.208-1.3984-.1064-.0791-.1367-.2275-.1289-.3398.0063-.1035.0493-.2334.1484-.2886C12.064 10.1646 12.5156 9.3721 12.5156 8.5z" />
            </g>
          </svg>

          <p className="text-gray-700 text-xs font-bold">
            Heated
            <br />
            Seats
          </p>
        </div>
        <div className="text-center  rounded-lg border p-2 flex flex-col justify-center items-center gap-1">
          <>
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              className="w-6 h-6"
              viewBox="0 0 122.878 88.858"
              enableBackground="new 0 0 122.878 88.858"
              xmlSpace="preserve"
            >
              <g>
                <path d="M17.215,43.332l10.399,10.57c1.096-1.28,2.282-2.497,3.551-3.642c7.666-6.908,18.284-11.183,30.038-11.183v0.029h0.001h0 v-0.029c11.754,0,22.373,4.275,30.039,11.184c1.416,1.276,2.73,2.644,3.93,4.09l10.489-10.489 c-1.408-1.612-2.919-3.146-4.525-4.594c-10.243-9.233-24.363-14.944-39.932-14.944v-0.029h0h-0.001v0.029 c-15.567,0-29.688,5.711-39.931,14.944C19.843,40.555,18.489,41.913,17.215,43.332L17.215,43.332z M61.656,48.555L61.656,48.555 l0.001,0.028c10.656,0.001,20.332,3.913,27.358,10.237l0.003,0.002l-8.575,8.575l-1.977,1.848 c-4.388-3.666-10.294-5.908-16.81-5.908v0.029h-0.001h-0.001v-0.029c-6.846,0-13.019,2.476-17.464,6.477 c-0.111,0.1-0.221,0.2-0.33,0.302L33.86,59.221c0.145-0.135,0.29-0.268,0.438-0.4C41.324,52.496,51,48.584,61.655,48.583 L61.656,48.555L61.656,48.555L61.656,48.555z M61.933,71.679c4.264,0,8.143,1.648,11.036,4.341L60.5,88.858L49.909,77.021 C52.875,73.74,57.163,71.679,61.933,71.679L61.933,71.679z M10.005,34.716c0.629-0.616,1.272-1.22,1.929-1.813 c12.421-11.195,29.61-18.121,48.619-18.121v0.029h0.001l0,0v-0.029c19.01,0,36.198,6.926,48.619,18.122 c1.122,1.011,2.204,2.058,3.246,3.137l10.458-10.458c-1.226-1.262-2.496-2.487-3.811-3.672 C104.068,8.392,83.378,0.029,60.555,0.029V0l0,0h-0.001v0.029c-22.823,0-43.513,8.363-58.512,21.882 C1.348,22.535,0.668,23.171,0,23.818L10.005,34.716L10.005,34.716z" />
              </g>
            </svg>
          </>

          <p className="text-gray-700 text-xs font-bold">
            Free
            <br /> Wifi
          </p>
        </div>
      </div>

      {/* <div className="flex justify-around items-center ">
        <div className="flex justify-center px-5 my-5">
          
          <div className="text-[#CD9900] font-bold text-2xl mb-4">
            $ {hour} <br />
            <span className="text-gray-600 font-medium text-sm">
              / per hour
            </span>
          </div>
        </div>

        <div className="flex justify-center  my-5">
          <div className="text-[#CD9900] font-bold text-2xl mb-4">
            $ {airport} <br />
            <span className="text-gray-600 font-medium text-sm">
              / From Airport
            </span>
          </div>
        </div>
        
      </div> */}

      {/* Button */}
      <div className="my-8">
        <Link
          className="mb-5 px-8 py-3 min-w-[120px] text-center text-black font-bold bg-[#CD9900] rounded-xl hover:shadow-lg transition-shadow duration-300"
          href={`/cars/${id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
