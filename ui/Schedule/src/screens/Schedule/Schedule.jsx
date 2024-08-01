import React from "react";
import { NameSerial } from "../../components/NameSerial";
import "./style.css";

export const Schedule = () => {
  return (
    <div className="schedule">
      <div className="frame-2">
        <div className="frame-3">
          <div className="text-wrapper-2">Cancel</div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Med Name</div>
          </div>
          <div className="text-wrapper-4">Cancel</div>
        </div>
        <div className="frame-4">
          <img className="calendar-svgrepo-com" alt="Calendar svgrepo com" src="/img/calendar-svgrepo-com.svg" />
          <p className="p">When will you take this?</p>
        </div>
        <div className="frame-5">
          <div className="frame-6">
            <NameSerial className="name-serial-instance" />
            <div className="name-serial-2">
              <div className="text-wrapper-5">Dosage</div>
              <div className="frame-7">
                <div className="text-wrapper-6">50</div>
                <div className="text-wrapper-7">mg</div>
              </div>
            </div>
          </div>
          <div className="frame-8">
            <div className="frame-wrapper">
              <div className="frame-9">
                <div className="text-wrapper-8">Frequency</div>
                <div className="frame-10">
                  <div className="text-wrapper-9">Everyday</div>
                  <img className="img" alt="Down arrow svgrepo" src="/img/down-arrow-5-svgrepo-com-2.svg" />
                </div>
              </div>
            </div>
            <div className="name-serial-3">
              <div className="frame-11">
                <div className="frame-12">
                  <img className="img" alt="Minus circle svgrepo" src="/img/minus-circle-svgrepo-com.svg" />
                  <div className="text-wrapper-8">1:35PM</div>
                </div>
                <div className="text-wrapper-10">1 Capsule</div>
              </div>
              <div className="frame-13">
                <div className="frame-12">
                  <img className="img" alt="Minus circle svgrepo" src="/img/minus-circle-svgrepo-com-1.svg" />
                  <div className="text-wrapper-8">Add a time</div>
                </div>
                <div className="text-wrapper-10">1 Capsule</div>
              </div>
            </div>
          </div>
          <div className="frame-14">
            <div className="frame-15">
              <div className="text-wrapper-11">Confirm</div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-button" />
    </div>
  );
};
