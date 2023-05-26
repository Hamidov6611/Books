<div className="hidden w-full md:flex justify-around items-center py-[16px] md:flex-row sticky top-0 h-[70px] mx-auto">
      <div className="md:w-[10%] flex items-center mr-1">
        <button className="text-limeGreen underline text-[10px] md:text-[16px] flex">
          <p className="mr-1">Подать</p>
          <p>объявление</p>
        </button>
      </div>
      <div className="flex flex-row justify-around items-center w-[50%]">
        <a className="text-[16px] md:mr-4 cursor-pointer">
          <p className="font-roboto text-lightGreey">ГЛАВНАЯ</p>
        </a>
        <a className="">
          <div className="flex flex-row md:mr-4 items-center cursor-pointer">
            <p className="font-roboto text-lightGreey">РАБОТА</p>
            <div onClick={() => setDrop1((prev) => !prev)}>
              {drop1 ? (
                <ArrowDropUpOutlinedIcon className="text-limeGreen" />
              ) : (
                <ArrowDropDownIcon className="text-limeGreen" />
              )}
            </div>
          </div>
          <div className="absolute left-[25%] top-[-130px]">
          {drop1 && (
            <div className="top-[200px] relative flex flex-col">
              РАБОТА В НЬЮ ЙОРКЕ
              <a className="cursor-pointer font-roboto text-[14px] py-[2px]">
                РАБОТА В США
              </a>
              <a className="cursor-pointer font-roboto text-[14px] py-[2px]">
                РАБОТА В США
              </a>
              <a className="cursor-pointer font-roboto text-[14px] py-[2px]">
                РАБОТА В США
              </a>
              <a className="cursor-pointer font-roboto text-[14px] py-[2px]">
                РАБОТА В США
              </a>
              <a className="cursor-pointer font-roboto text-[14px] py-[2px]">
                РАБОТА В США
              </a>
              <a className="cursor-pointer font-roboto text-[14px] py-[2px]">
                РАБОТА В США
              </a>
              <a className="cursor-pointer font-roboto text-[14px] py-[2px]">
                РАБОТА В США
              </a>
              <a className="cursor-pointer font-roboto text-[14px] py-[2px]">
                РАБОТА В США
              </a>
              <a className="cursor-pointer font-roboto text-[14px] py-[2px]">
                РАБОТА В США
              </a>
              <a className="cursor-pointer font-roboto text-[14px] py-[2px]">
                РАБОТА В США
              </a>
            </div>
          )}
          </div>
        </a>
        <a className="flex flex-row md:mr-4 items-center cursor-pointer">
          <p className="font-roboto text-lightGreey">ТРАКДРАЙВЕРЫ</p>
          <div onClick={() => setDrop2((prev) => !prev)}>
            {drop2 ? (
              <ArrowDropUpOutlinedIcon className="text-limeGreen" />
            ) : (
              <ArrowDropDownIcon className="text-limeGreen" />
            )}
          </div>
        </a>
        <a className="flex flex-col items-center md:mr-4 cursor-pointer">
          <p className="text-limeGreen font-semibold text-[24px] mb-0">BAZAR</p>
          <p className="text-lightGreey text-[7px] top-[-6px] relative">
            IMMIGRANT GUIDE
          </p>
        </a>
        <a className="flex flex-row md:mr-4 items-center cursor-pointer">
          <p className="font-roboto text-lightGreey">ЖИЛЬЕ</p>
          <div onClick={() => setDrop3((prev) => !prev)}>
            {drop3 ? (
              <ArrowDropUpOutlinedIcon className="text-limeGreen" />
            ) : (
              <ArrowDropDownIcon className="text-limeGreen" />
            )}
          </div>
        </a>
        <a className="md:mr-4 cursor-pointer">
          <p className="font-roboto text-lightGreey flex">
            <p className="mr-1">КАТАЛОГ</p>
            <p>БИЗНЕСОВ</p>
          </p>
        </a>
        <a className="flex flex-row items-center cursor-pointer">
          <p className="font-roboto text-lightGreey">БОЛЬШЕ</p>
          <div onClick={() => setDrop4((prev) => !prev)}>
            {drop4 ? (
              <ArrowDropUpOutlinedIcon className="text-limeGreen" />
            ) : (
              <ArrowDropDownIcon className="text-limeGreen" />
            )}
          </div>
        </a>
      </div>
      <div className="flex flex-row justify-around items-center md:w-[10%]">
        <a className="cursor-pointer">
          <FmdGoodIcon className="text-limeGreen text-[111px]" />
          {/* <svg width={8} height={10}>
            <use xlinkHref="/images/header.svg#loc-marker" />
          </svg> */}
        </a>
        <a className="cursor-pointer">
          <p className="font-roboto text-lightGreey">Город</p>
        </a>
        <a className="font-roboto bg-darkGreey p-1 w-[30px] rounded-lg text-[white] text-center cursor-pointer">
          Ru
        </a>
        <a className="cursor-pointer">
          <Person2OutlinedIcon />
        </a>
      </div>
    </div>