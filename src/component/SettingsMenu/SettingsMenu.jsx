// src/component/SettingsMenu/SettingsMenu.jsx
import React from "react";

const SettingsMenu = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center mb-4">
          <img
            className="w-16 h-16 rounded-full mb-2"
            src="path_to_profile_image"
            alt="Profile"
          />
          <h2 className="text-xl font-bold">Maria Adams</h2>
        </div>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span>Change Password</span>
            <button className="text-green-500">&gt;</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Measurement system</span>
            <span className="text-gray-500">Metric</span>
            <button className="text-green-500">&gt;</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Edit shot schedule</span>
            <button className="text-green-500">&gt;</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Change weight goals</span>
            <button className="text-green-500">&gt;</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Health Connect</span>
            <button className="text-green-500">&gt;</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Notifications</span>
            <input type="checkbox" className="toggle-checkbox" />
          </li>
        </ul>
        <ul className="space-y-4 mt-4 border-t pt-4">
          <li className="flex justify-between items-center">
            <span>Contact us</span>
            <button className="text-green-500">&gt;</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Rate Us</span>
            <button className="text-green-500">&gt;</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Privacy policy</span>
            <button className="text-green-500">&gt;</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Terms of use</span>
            <button className="text-green-500">&gt;</button>
          </li>
        </ul>
        <div className="mt-4">
          <button className="w-full bg-red-500 text-white py-2 rounded-lg">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
