import React from "react";
import "./style.css";

export const Frequency = () => {
  return (
    <div className="frequency">
      <div className="frame">
        <div className="div">
          <div className="frame-2">
            <div className="div-wrapper">
              <div className="text-wrapper">Back</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-2">Frequency</div>
            </div>
            <div className="text-wrapper-3">Back</div>
          </div>
          <div className="frame-4">
            <div className="name-serial">
              <div className="frame-5">
                <div className="text-wrapper-4">At Reular Intervals</div>
                <img className="correct-signal" alt="Correct signal" src="/img/correct-signal-svgrepo-com.svg" />
              </div>
              <div className="frame-6">
                <p className="text-wrapper-5">On Specific Days of the Week</p>
                <div className="text-wrapper-6">1 Capsule</div>
              </div>
              <div className="frame-7">
                <div className="text-wrapper-5">As Needed</div>
                <div className="text-wrapper-6">1 Capsule</div>
              </div>
            </div>
            <div className="name-serial-2">
              <div className="frame-8">
                <div className="text-wrapper-4">Every</div>
                <div className="text-wrapper-7">Day</div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="rectangle" />
                  <div className="frame-9">
                    <div className="text-wrapper-8">Day</div>
                    <div className="text-wrapper-9">Other Day</div>
                    <div className="text-wrapper-10">3 Days</div>
                    <div className="text-wrapper-11">4 Days</div>
                    <div className="text-wrapper-12">5 Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="name-serial">
              <div className="frame-10">
                <div className="text-wrapper-4">Start Date</div>
                <div className="text-wrapper-13">18 Jul 2024</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-14">Done</div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-button" />
    </div>
  );
};
