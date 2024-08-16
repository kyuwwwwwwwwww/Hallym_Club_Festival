import React, { useState } from "react";
import "./Roulette.css";

const Roulette = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const segments = [
    "$0",
    "$500",
    "$10",
    "$1,000",
    "$50",
    "$20",
    "$1,500",
    "$400",
  ];
  const segmentDegree = 360 / segments.length; // 각 섹션의 각도 크기

  const handleSpin = () => {
    if (spinning) return;

    setSpinning(true);

    // 랜덤으로 360도 이상의 회전 각도를 계산
    const randomSpin = Math.floor(Math.random() * 3600) + 360;
    setRotation((prevRotation) => prevRotation + randomSpin);

    // 4초 후에 스핀 완료
    setTimeout(() => {
      setSpinning(false);

      // 현재 회전 각도를 360으로 나눈 나머지 계산 (0 ~ 360 범위 내 각도)
      const normalizedRotation = (rotation + randomSpin) % 360;
      const selectedIndex = Math.floor(
        ((360 - normalizedRotation + segmentDegree / 2) % 360) / segmentDegree
      );
      const selectedValue = segments[selectedIndex];

      alert(`스핀 완료! 당첨: ${selectedValue}`);
    }, 4000);
  };

  return (
    <div className="roulette-container">
      <div
        className="roulette-wheel"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {segments.map((segment, index) => (
          <div
            key={index}
            className={`segment segment-${index + 1}`}
            style={{
              transform: `rotate(${
                index * segmentDegree
              }deg) translate(-100%, -100%)`,
            }}
          >
            {segment}
          </div>
        ))}
      </div>
      <div className="roulette-pointer"></div>
      <button className="spin-button" onClick={handleSpin} disabled={spinning}>
        Spin
      </button>
    </div>
  );
};

export default Roulette;
