import React from "react";
import Image from "next/image";
import { Button } from "@/app/MTailwind";
const AboutUs = () => {
  return (
    <>
      <div
        id="about-us"
        className="flex flex-row  gap-15 w-full my-24 justify-center h-full px-16"
      >
        <div>
          <div className="flex flex-col space-y-8 ">
            <h1 className="font-['Cinzel'] text-4xl md:text-6xl ">
              <span className="text-[#CD9900]">Luxury Cars</span> for Maximum
              Satisfaction
            </h1>
            <p>
              Nullam sed ultricies erat, nec euismod metus. Morbi porttitor
              sapien vitae leo scelerisque. Nullam sed ultricies erat.
            </p>
          </div>
          <div className="w-full mt-6">
            <Button
              variant="gradient"
              color="amber"
              size="lg"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Read More
            </Button>
          </div>
        </div>
        <div className=" md:block flex  ">
          <Image src="/about-limmo.png" alt="alo" width={972} height={41} />
        </div>
      </div>
      <section className=" hidden w-full md:flex justify-center items-center dark:bg-gray-900 p-8">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <div className="grid grid-cols-2 gap-8 text-[#CD9900] sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <div className="flex items-center lg:justify-center">
              <Image
                src="/mercedes-benz-svgrepo-com.svg"
                alt="cadilac"
                width={80}
                height={50}
              />
            </div>
            <div className="flex items-center lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={150}
                height={100}
                viewBox="0 0 36.003 7.949"
                className="text-[#CD9900]"
              >
                <path d="M20.322 2.998c-.18-.223-.083-.585.184-.796s.656-.183.82.017c.183.222.099.58-.167.791s-.657.21-.837-.012zM7.297.735a13.876 13.876 0 0 1 2.772-.7c.699-.096 1.486-.021 1.72.553.233.573-.129 1.607-2.176 2.519-1.992.888-4.53 1.317-6.113 1.351a5.861 5.861 0 0 0-.717 1.088c-.184.353-.269.706-.256.966.029.584.487.895 1.19.838.38-.031.821-.201 1.301-.454.954-.503 2.066-1.346 3.15-2.125.149-.107.474-.328.498-.344.632-.415 1.204-.681 1.875-.838.214-.05.582-.104.987-.091.596.018 1.17.129 1.478.317-.151.094-.293.221-.374.292-.819.716-1.485 1.555-1.82 2.079-.096.15-.159.357-.084.425.063.058.2.059.411-.075.405-.257 1.275-1.063 1.804-1.517.124-.106.864-.661 1.107-.806l.015-.01c.521-.31.997-.473 1.326-.562.745-.202 1.432-.168 1.547-.086a63 63 0 0 0 1.956-1.887c.311 0 .908-.001 1.237-.008a3.258 3.258 0 0 0-.313.239c-.321.309-1.388 1.334-2.249 2.206-.933.944-1.456 1.553-1.731 2.031-.14.242-.199.438-.115.507.091.076.277.014.49-.127.483-.32 1.826-1.535 2.294-2.002 0 0 .782-.779.957-.941.311.001.882-.001 1.21-.008-.089.06-.252.172-.32.237-.629.605-1.48 1.489-1.852 2.021-.293.42-.255.684-.154.79.193.202.804.085 1.696-.403-.074-.402.067-1.022.382-1.508.675-1.042 2.088-2.349 3.178-2.897.547-.275.898-.321 1.114-.148.26.208.181.688-.107 1.137-.874 1.358-1.832 2.175-3.693 3.375-.001.319.176.531.633.531.597 0 1.196-.209 1.824-.524-.06-.396.1-1.014.401-1.478.67-1.033 2.091-2.35 3.175-2.896.567-.285.898-.313 1.112-.146.272.212.181.701-.126 1.176-.847 1.312-1.8 2.125-3.693 3.346-.03.345.149.515.421.507.433-.012.974-.38 1.775-1.106.262-.237 1.137-1.02 1.346-1.156.64-.42 1.207-.681 1.874-.84a4.19 4.19 0 0 1 1.256-.075c.473.037.918.134 1.21.3-.161.101-.315.238-.385.299a10.541 10.541 0 0 0-1.812 2.076c-.106.167-.154.359-.085.423.074.067.218.043.405-.075.405-.257 1.979-1.693 1.995-1.709.64-.626 1.356-1.082 2.107-1.313.681-.209 1.37-.174 1.578.289.298.663-.354 1.488-1.353 1.672l-.096-.35c.491-.321.937-.943.709-1.188-.166-.179-.521-.089-.813.079-.506.291-1.218.957-1.629 1.653-.268.452-.302.913-.048 1.145.25.228.617.241.971.155.783-.19 1.446-.705 1.99-1.289l.158.452c-.601.625-1.303 1.063-2.03 1.249-.819.21-1.422.118-1.813-.287-.267-.276-.371-.727-.294-1.19-.472.439-.837.769-1.129.971-.363.251-.829.433-1.164.207-.339-.228-.281-.812-.146-1.074a7.85 7.85 0 0 1-1.194.902c-.564.343-1.118.361-1.374.048-.162-.199-.223-.523-.099-.927-.451.401-.896.758-1.318.966a1.651 1.651 0 0 1-.818.186c-.497-.023-.775-.27-.933-.597-.858.451-1.468.599-2.096.599-.601 0-.999-.251-1.209-.58a4.7 4.7 0 0 1-1.103.494c-.541.149-1.073.144-1.335-.124-.194-.198-.335-.575-.133-1.117-.501.47-.864.802-1.169 1.016-.352.246-.89.456-1.209.201-.367-.294-.234-.852-.102-1.075-.11.103-.214.19-.317.278a7.766 7.766 0 0 1-.899.66c-.53.338-.964.308-1.218.148-.322-.201-.339-.682-.206-1.112-.443.407-.799.716-1.076.908-.373.259-.828.43-1.168.201-.373-.251-.235-.895-.149-1.061-.164.15-.344.292-.527.432a7.85 7.85 0 0 1-.657.457c-.534.324-1.101.384-1.368.058-.209-.256-.266-.692.025-1.26-1.702 1.335-3.107 2.245-4.399 2.245-1.365 0-2.101-1.258-1.69-2.54a4.19 4.19 0 0 1 .515-1.071C.764 4.114.074 3.679.005 2.908c-.065-.729.524-1.244.964-1.534A6.437 6.437 0 0 1 2.047.798C3.056.38 4.555.106 5.717.145l.201.444C5.866.58 5.809.575 5.747.569c-.44-.035-1.226.028-2.031.228-.72.178-1.514.495-2.003.913-.69.59-.665 1.185-.428 1.537.214.317.521.503 1.095.612.212-.247.457-.487.736-.733C4.312 2.077 5.81 1.272 7.297.735zM3.963 3.963c2.165-.074 4.09-.981 5.662-1.746 1.108-.539 1.847-1.126 1.68-1.513-.053-.123-.215-.189-.414-.208a2.998 2.998 0 0 0-.747.035c-.691.102-1.481.339-2.394.79-.328.162-.671.351-1.032.572-.68.416-1.399.927-2.161 1.547a9.749 9.749 0 0 0-.594.523zM24.356 2.28c.234-.336.065-.456-.258-.242-.733.485-1.412 1.137-1.956 1.755-.558.634-1.04 1.37-1.16 1.836.61-.41 1.211-.949 1.73-1.467.711-.713 1.345-1.452 1.644-1.882zm3.348 0c.233-.334.07-.459-.26-.242-1.229.809-2.813 2.525-3.12 3.603.605-.395 1.339-1.063 1.979-1.725.62-.641 1.145-1.269 1.401-1.636zm2.956 1.75c-.054-.042-.237-.096-.449-.098-.23-.002-.507.077-.766.217-.917.499-1.602 1.163-2.076 1.915-.155.247-.143.447-.076.508.093.085.273.063.591-.093.68-.333 1.765-1.39 2.776-2.449zm-14.136.012a.62.62 0 0 0-.286-.096 1.338 1.338 0 0 0-.746.134c-.771.37-1.532.972-2.162 1.896-.176.258-.232.528-.137.617.102.095.326.062.594-.092.887-.511 1.845-1.539 2.737-2.459zM10.402 5.18c.374-.358.763-.75 1.141-1.147-.06-.044-.258-.095-.454-.096-.222-.002-.526.087-.766.217a5.526 5.526 0 0 0-2.07 1.913c-.156.25-.148.441-.073.51.095.087.271.064.585-.09.424-.209 1.009-.706 1.637-1.307zm25.123 2.283a.367.367 0 1 1 0-.734.367.367 0 0 1 0 .734zm0-.043a.324.324 0 1 0 0-.648.324.324 0 0 0 0 .648zm-.136-.116v-.412h.18c.035 0 .069.002.1.021.031.017.046.054.046.088 0 .081-.057.111-.13.113l.125.19h-.06l-.118-.19h-.093v.19h-.05zm.05-.375v.146h.077c.058 0 .147.01.147-.074 0-.063-.056-.071-.107-.071h-.117z" />
              </svg>
            </div>
            <div className="flex items-center lg:justify-center">
              <svg
                fill="#000000"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M12 8.236C5.872 8.236.905 9.93.905 12.002S5.872 15.767 12 15.767c6.127 0 11.094-1.693 11.094-3.765 0-2.073-4.967-3.766-11.094-3.766zm-5.698 6.24c-.656.005-1.233-.4-1.3-1.101a1.415 1.415 0 0 1 .294-1.02c.195-.254.525-.465.804-.517.09-.017.213-.006.264.054.079.093.056.194-.023.234-.213.109-.47.295-.597.55a.675.675 0 0 0 .034.696c.263.397.997.408 1.679-.225.169-.156.32-.304.473-.48.3-.344.4-.47.8-1.024.005-.006.006-.014.004-.018-.003-.007-.009-.01-.02-.01-.267.007-.5.087-.725.255-.065.048-.159.041-.2-.021-.046-.07-.013-.163.062-.215.363-.253.76-.298 1.166-.367 0 0 .028.002.051-.03.167-.213.292-.405.47-.621.178-.22.41-.42.586-.572.246-.212.404-.283.564-.37.043-.022-.005-.049-.018-.049-.896-.168-1.827-.386-2.717-.056-.616.23-.887.718-.757 1.045.093.231.397.27.683.13a1.55 1.55 0 0 0 .611-.544c.087-.134.27-.038.171.195-.26.611-.757 1.097-1.363 1.118-.516.016-.849-.363-.848-.831.002-.924 1.03-1.532 2.11-1.622 1.301-.108 2.533.239 3.825.395.989.12 1.938.123 2.932-.106.118-.025.2.05.193.168-.01.172-.143.337-.47.516-.373.204-.763.266-1.17.27-.984.008-1.901-.376-2.85-.582.002.041.012.091-.023.117-.525.388-1 .782-1.318 1.334-.011.013-.005.025.013.024.277-.015.525-.022.783-.042.045-.004.047-.015.043-.048a.64.64 0 0 1 .2-.558c.172-.153.387-.17.53-.06.16.126.147.353.058.523a.63.63 0 0 1-.382.31s-.03.006-.026.034c.006.043.2.151.217.18.017.027.008.07-.021.102a.123.123 0 0 1-.095.045c-.033 0-.053-.012-.096-.035a.92.92 0 0 1-.27-.217c-.024-.031-.037-.032-.099-.029-.279.017-.714.059-1.009.096-.071.008-.082.022-.096.047-.47.775-.972 1.61-1.523 2.17-.592.6-1.083.758-1.604.762zM19.05 10.71c-.091.158-1.849 2.834-1.96 3.11-.035.088-.04.155-.004.204.092.124.297.051.425-.038.381-.262.645-.58.937-.858.017-.013.046-.018.065 0 .043.04.106.091.15.137a.04.04 0 0 1 .002.057 5.873 5.873 0 0 1-.904.911c-.47.364-.939.457-1.172.224a.508.508 0 0 1-.14-.316c-.002-.057-.031-.06-.058-.034-.278.275-.76.579-1.198.362-.366-.18-.451-.618-.383-.986.001-.008-.006-.06-.051-.03a1.28 1.28 0 0 1-.3.162.853.853 0 0 1-.366.077.518.518 0 0 1-.451-.253.759.759 0 0 1-.095-.347c-.001-.011-.017-.032-.033-.005-.3.457-.579.899-.875 1.363-.016.022-.03.036-.06.037l-.587.001c-.036 0-.053-.028-.034-.063.104-.2.674-1.03 1.06-1.736.107-.194.085-.294.019-.337-.083-.054-.248.027-.387.133-.379.287-.697.735-.859.935-.095.117-.185.291-.433.56-.391.425-.91.669-1.408.5a.848.848 0 0 1-.546-.58c-.015-.052-.044-.066-.073-.032-.08.1-.245.249-.383.342-.015.011-.052.033-.084.017a.851.851 0 0 1-.152-.199.07.07 0 0 1 .016-.08c.197-.173.305-.271.391-.38.064-.08.113-.17.17-.315.12-.302.393-.866.938-1.158a1.81 1.81 0 0 1 .652-.219c.1-.01.183.002.213.08.011.033.039.105.056.158.011.032.003.057-.035.071-.32.122-.643.311-.865.61-.253.338-.321.746-.152.98.123.17.322.2.514.139.29-.092.538-.363.666-.663.138-.329.16-.717.058-1.059-.016-.059-.001-.104.037-.136.077-.063.184-.112.215-.128a.14.14 0 0 1 .182.045c.106.157.163.378.17.607.006.049.026.05.05.025.19-.202.366-.418.568-.58.185-.147.422-.267.643-.262.286.006.428.2.419.546-.001.044.03.04.051.011a1.19 1.19 0 0 1 .24-.264c.198-.163.4-.236.611-.222.26.02.468.257.425.527a.53.53 0 0 1-.281.406.362.362 0 0 1-.405-.044.336.336 0 0 1-.096-.322c.005-.025-.027-.048-.054-.02-.254.264-.273.606-.107.76.183.17.458.056.658-.075.366-.239.65-.563.979-.813.218-.166.467-.314.746-.351a.87.87 0 0 1 .454.052c.2.081.326.25.342.396.004.043.036.048.063.01.158-.246 1.005-1.517 1.075-1.65.02-.041.044-.047.089-.047h.606c.035 0 .051.02.036.047zm-2.32 2.204a.053.053 0 0 0-.003.04c.003.02.03.04.056.05.01.003.015.01.004.032-.075.16-.143.252-.237.391a1.472 1.472 0 0 1-.3.325c-.178.147-.424.307-.628.2-.09-.047-.13-.174-.127-.276.004-.288.132-.584.369-.875.288-.355.607-.539.816-.438.216.103.148.354.05.55zm-5.949-1.881a.398.398 0 0 1 .132-.345c.057-.05.133-.062.18-.022.052.045.027.157-.026.234a.43.43 0 0 1-.245.177c-.018.004-.034-.004-.041-.044zM12 7.5C5.34 7.5 0 9.497 0 12c0 2.488 5.383 4.5 12 4.5s12-2.02 12-4.5-5.383-4.5-12-4.5zm0 8.608C5.649 16.108.5 14.27.5 12.002.5 9.733 5.65 7.895 12 7.895s11.498 1.838 11.498 4.107c0 2.268-5.148 4.106-11.498 4.106z"></path>
                </g>
              </svg>
            </div>
            <div className="flex items-center lg:justify-center">
              <Image
                src="/chevrolet-svgrepo-com.svg"
                alt="cadilac"
                width={80}
                height={50}
              />
            </div>
            <div className="flex items-center lg:justify-center">
              <Image
                src="/Lincoln_logo.svg"
                alt="cadilac"
                width={120}
                height={50}
              />
            </div>
            <div className="flex items-center lg:justify-center">
              <Image
                src="/lexus-svgrepo-com.svg"
                alt="cadilac"
                width={120}
                height={50}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
