import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";
import { PiPawPrintFill } from "react-icons/pi";
import OuterLayout from "../components/common/OuterLayout";
import Nav from "../components/common/Nav";
import { Carousel } from "flowbite-react";
import PageTitle from "../components/common/PageTitle";
import { Link } from "react-router-dom";
import MyPageMainBtn from "../components/mypage/MyPageMainBtn";
import MyPagePetInfo from "../components/mypage/MyPagePetInfo";
import MyPagePetAdd from "../components/mypage/MyPagePetAdd";

const MyPage: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title="마이페이지" />
      <div className="mt-5 mb-24 mx-5">
        <div className="flex justify-between items-center">
          <div className="font-black text-2xl">이효경 집사님</div>
          <Link
            to="/editprofile"
            className="p-1 border-2 border-solid border-MAIN_COLOR rounded text-MAIN_COLOR"
          >
            프로필 수정
          </Link>
        </div>
        <button className="flex justify-between items-center bg-MAIN_COLOR rounded-xl px-5 py-3 mt-5 w-full">
          <div className="flex justify-between items-center text-MAIN_GRAY gap-1">
            <div>내 포인트</div>
            <BiDollarCircle size="20px" />
          </div>
          <div>
            <div className="flex justify-between items-center text-MAIN_GRAY gap-2">
              <div>2000원</div>
              <SlArrowRight />
            </div>
          </div>
        </button>
        <div>
          <div className="flex justify-start items-center gap-1 mt-7">
            <div className="font-semibold text-2xl">내 꼬순내</div>
            <PiPawPrintFill color="#492D28" size="25px" />
          </div>
          {/* TO-DO: 펫프렌즈 Slider와 동일하게 변경하기 */}
          <div className="flex justify-center items-center mt-3 h-36 gap-7">
            <Carousel
              slide={false}
              indicators={false}
              leftControl=" "
              rightControl=" "
            >
              <MyPagePetInfo
                img="https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=128"
                name="샤샤"
                type="샴"
                age="18년 1개월"
              />
              <MyPagePetAdd />
            </Carousel>
          </div>
          {/* TODO: slider 로 변경 */}
        </div>
        <div className="flex flex-col justify-center items-start mt-7 gap-5">
          <div className="flex justify-center items-center gap-5 w-full">
            <MyPageMainBtn title="예약내역" />
            <MyPageMainBtn title="내가 쓴 리뷰" />
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <MyPageMainBtn title="관심매장" />
            <MyPageMainBtn title="문의하기" />
          </div>
        </div>
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default MyPage;