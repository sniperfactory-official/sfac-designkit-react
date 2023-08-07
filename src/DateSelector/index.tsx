"use client";

import Image from "next/image";
import { ko } from "date-fns/locale";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import selectDate from "../assets/selectDate.svg?url";
import "./style.css";

import Arrow from "../assets/selectArrow.svg?url";

export default function DateSelector() {
  const [dates, setDates] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const setChangeDate = (select: [Date | null, Date | null]) => {
    const [start, end] = select;
    setDates({
      startDate: start,
      endDate: end,
    });
  };

  return (
    <div className="flex w-[212px]">
      <DatePicker
        className="w-[212px] py-2 pl-3 rounded-[10px] border border-Grayscale-20 text-sm
        "
        selectsRange
        selected={dates.startDate}
        startDate={dates.startDate}
        endDate={dates.endDate}
        onChange={setChangeDate}
        dateFormat="yyyy. MM. dd"
        locale={ko}
        placeholderText="날짜를 선택해 주세요."
        disabledKeyboardNavigation
        renderCustomHeader={({
          date,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div className="flex justify-between items-center text-base font-bold w-[214px] m-auto">
            <button
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <Image src={Arrow} alt="이전 버튼" />
            </button>
            {getYear(date)}년 {[getMonth(date) + 1]}월
            <button
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <Image src={Arrow} alt="다음 버튼" className="rotate-180" />
            </button>
          </div>
        )}
      />
      <Image
        src={selectDate}
        alt="날짜 선택하기"
        className="relative right-6 cursor-pointer"
      />
    </div>
  );
}
