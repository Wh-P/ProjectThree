import Main from "../page/Main";
import Salon from "../page/Salon";
import Reservation from "../page/Reservation";
import Signup from "../page/Signup";
import MyPage from "../page/MyPage";
import EditProfile from "../page/EditProfile";
import MyLocationStore from "../page/MyLocationStore";
import EditMyPet from "../page/EditMyPet";
import AddMyPet from "../page/AddMyPet";
import MyReservation from "../page/MyReservation";
import MyReview from "../page/MyReview";
import Notice from "../page/Notice";
import MyLikeStore from "../page/MyLikeStore";
import RegisterQnA from "../page/RegisterQnA";
import MyQnA from "../page/MyQnA";
import Login from "../page/Login";
import MyReservationDetail from "../components/myreservation/MyReservationDetail";

export const ROUTER_INFOS = [
  { path: "/", element: <Main /> },
  { path: "/salon/:storeNo", element: <Salon /> },
  { path: "/reservation/:storeNo", element: <Reservation /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/notice", element: <Notice /> },
  { path: "/mypage", element: <MyPage /> },
  { path: "/edit_profile", element: <EditProfile /> },
  { path: "/my_location_store", element: <MyLocationStore /> },
  { path: "/edit_mykkosoonae/:petNo", element: <EditMyPet /> },
  { path: "/add_mykkosoonae", element: <AddMyPet /> },
  { path: "/my_reservation", element: <MyReservation /> },
  {
    path: "/my_reservation/detail/:reservationNo",
    element: <MyReservationDetail />,
  },
  { path: "/my_review", element: <MyReview /> },
  { path: "/my_likestore", element: <MyLikeStore /> },
  { path: "/register_qna", element: <RegisterQnA /> },
  { path: "/my_qna", element: <MyQnA /> },
];

export const MYPET_FORM_LABEL = {
  name: "내 꼬순내 이름",
  type: "내 꼬순내 종",
  birthDt: "내 꼬순내 생년월일",
  gender: "내 꼬순내 성별",
  weight: "내 꼬순내 몸무게",
};

export const PRICE_COMMA = /\B(?=(\d{3})+(?!\d))/g;
