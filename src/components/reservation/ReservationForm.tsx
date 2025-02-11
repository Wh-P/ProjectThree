import { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { reservationSchema } from "../../schema/formSchema";
import HttpClient from "../../utils/api/customAxios";

import ReservationFormGroup from "./ReservationFormGroup";
import ReservationTimeRadio from "./ReservationTimeRadio";
import ReservationDropDown from "./ReservationDropDown";
import ReservationDatepicker from "./ReservationDatepicker";
import ReservationTextArea from "./ReservationTextArea";

import MyKkosoonaeModal from "./MyKkosoonaeModal";
import ReservationCheckList from "../common/ReservationCheckList";
import ReservationOk from "../../components/reservation/ReservationOk";

interface ReservationFormProps {
  salonNamefix?: string;
  salonNumber: number;
  onPetSelect?: (petName: string, breed: string, weight: string) => void;
}

export interface reservationFormValues {
  storeNumber: number;
  storeName: string;
  reservationDate: string;
  reservationTime: string;
  cutStyle: string;
  petName: string;
  breed: string;
  weight: string;
  characteristics: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  salonNamefix,
  salonNumber,
  onPetSelect,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [reservationData, setReservationData] =
    useState<reservationFormValues | null>(null);

  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [weight, setWeight] = useState("");

  const handlePetSelect = (
    selectName: string,
    selectBreed: string,
    selectWeight: string
  ) => {
    setPetName(selectName);
    setBreed(selectBreed);
    setWeight(selectWeight);
    if (onPetSelect) {
      onPetSelect(selectName, selectBreed, selectWeight);
    }
  };

  const initialValues: reservationFormValues = {
    storeName: salonNamefix || "",
    storeNumber: salonNumber,
    reservationDate: "",
    reservationTime: "",
    cutStyle: "",
    petName,
    breed,
    weight,
    characteristics: "",
  };

  const reservationHandleSubmit = async (values: reservationFormValues) => {
    try {
      const payload = {
        storeNumber: values.storeNumber,
        storeName: values.storeName,
        reservationDate: values.reservationDate,
        reservationTime: values.reservationTime,
        cutStyle: values.cutStyle,
        petName: values.petName,
        breed: values.breed,
        weight: values.weight,
        characteristics: values.characteristics,
      };
      const response = await HttpClient.post(
        "/KkoSoonNae/reservation/make-reservation",
        payload
      );

      setReservationData(values);
      setStep(2);
    } catch (error) {
      console.error("예약 요청 실패:", error);
    }
  };

  const handleReservationComplete = () => {
    setStep(3);
  };

  return (
    <div>
      {step === 1 ? (
        <>
          <div className="flex justify-end my-3 px-4">
            <BtnMyPetInfo onClick={() => setIsModalOpen(true)}>
              <img src="/img/common/icon-dog_star.svg" alt="" /> 정보불러오기
            </BtnMyPetInfo>
          </div>

          <Formik
            initialValues={initialValues}
            // validationSchema={reservationSchema}
            onSubmit={(values) => reservationHandleSubmit(values)}
          >
            {({ setFieldValue }) => (
              <Form className="px-4 pt-4 pb-8">
                <div className="flex flex-col gap-y-5">
                  {/* 업체 번호  */}
                  <div className="hidden">
                    <ReservationFormGroup
                      label="업체번호"
                      name="storeNumber"
                      readOnly={false}
                    />
                  </div>

                  {/* 업체명 */}
                  <ReservationFormGroup
                    label="업체명"
                    name="storeName"
                    value={salonNamefix}
                    readOnly={true}
                  />
                  {/* 예약날짜 : Datepicker */}
                  <ReservationDatepicker
                    label="예약일자"
                    name="reservationDate"
                  />
                  {/* 예약시간 */}
                  <ReservationTimeRadio />
                  {/* 스타일 */}
                  <ReservationDropDown />
                  {/* 펫 이름 */}
                  <ReservationFormGroup
                    label="펫 이름"
                    name="petName"
                    value={petName}
                    readOnly={false}
                  />
                  {/* 견종/묘종 */}
                  <ReservationFormGroup
                    label="견종/묘종"
                    name="breed"
                    value={breed}
                    readOnly={false}
                  />
                  {/* 몸무게 */}
                  <ReservationFormGroup
                    label="몸무게"
                    name="weight"
                    value={weight}
                    readOnly={false}
                  />
                  {/* 특징 */}
                  <ReservationTextArea label="특징" name="characteristics" />
                </div>

                <BtnSubmit
                  type="submit"
                  className="my-4 rounded"
                  onClick={() => {
                    setFieldValue("petName", petName);
                    setFieldValue("breed", breed);
                    setFieldValue("weight", weight);
                  }}
                >
                  예약하기
                </BtnSubmit>
              </Form>
            )}
          </Formik>
          <MyKkosoonaeModal
            openModal={isModalOpen}
            setOpenModal={setIsModalOpen}
            onPetSelect={handlePetSelect}
          />
        </>
      ) : null}
      {step === 2 ? (
        <ReservationCheckList
          reservationData={reservationData}
          onReservationComplete={handleReservationComplete}
        />
      ) : null}
      {step === 3 ? <ReservationOk /> : null}
    </div>
  );
};

const BtnMyPetInfo = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #492d28;
  color: #492d28;
  img {
    width: 38px;
  }
`;

const BtnSubmit = styled.button`
  width: 100%;
  height: 44px;
  color: #fff;
  background: #492d28;
`;
export default ReservationForm;
