import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useWindowSize } from "hooks/useWindowSize";
import {
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInOutCubic,
  easeInCubic,
  easeOutCubic,
} from "utils/easing";

export const Users = (props) => {
  const { scrollY } = useViewportScroll();

  const windowSize = useWindowSize();
  const windowHeight = windowSize.height;

  // keyframe
  const keyframe = (value) => {
    return windowHeight * value;
  };

  // devtools
  const devtoolsX = useTransform(
    scrollY,
    [keyframe(0.5), keyframe(1.25), keyframe(2), keyframe(2.75)],
    ["72px", "36px", "0px", "0px"],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic],
    }
  );

  // avatar 1
  const avatar1X = useTransform(
    scrollY,
    [keyframe(0.5), keyframe(1.25), keyframe(2), keyframe(2.75)],
    ["72px", "36px", "0px", "0px"],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic],
    }
  );

  // avatar 2
  const avatar2X = useTransform(
    scrollY,
    [keyframe(1.25), keyframe(2), keyframe(2.75)],
    ["36px", "0px", "0px"],
    {
      ease: [easeInOutCubic, easeInOutCubic],
    }
  );

  const avatar2Scale = useTransform(
    scrollY,
    [keyframe(0.5), keyframe(1.25)],
    [0, 1],
    {
      ease: [easeInOutCubic],
    }
  );

  const avatar2CircleScale = useTransform(
    scrollY,
    [keyframe(0.5), keyframe(1.25)],
    [0, 1],
    {
      ease: [easeInOutCubic],
    }
  );

  const avatar2IconScale = useTransform(
    scrollY,
    [keyframe(0.75), keyframe(1.25)],
    [0, 1],
    {
      ease: [easeInOutCubic],
    }
  );

  // avatar 3
  const avatar3CircleScale = useTransform(
    scrollY,
    [keyframe(1.25), keyframe(2)],
    [0, 1],
    {
      ease: [easeOutCubic],
    }
  );

  const avatar3Scale = useTransform(
    scrollY,
    [keyframe(1.25), keyframe(2)],
    [0, 1],
    {
      ease: [easeInOutCubic],
    }
  );

  const avatar3IconScale = useTransform(
    scrollY,
    [keyframe(1.75), keyframe(2)],
    [0, 1],
    {
      ease: [easeInOutCubic],
    }
  );

  // CURSOR
  const cursorOpacity = useTransform(
    scrollY,
    [keyframe(6.5), keyframe(7.5), keyframe(8.7), keyframe(8.7) + 1],
    [0, 1, 1, 0],
    {
      ease: [easeInOutQuad, linear, linear],
    }
  );

  const cursorX = useTransform(
    scrollY,
    [keyframe(7), keyframe(8)],
    ["0px", "620px"],
    {
      ease: [easeInOutQuad],
    }
  );

  const cursorY = useTransform(
    scrollY,
    [keyframe(7), keyframe(8)],
    ["0px", "-178px"],
    {
      ease: [easeOutQuad],
    }
  );

  const cursorScale = useTransform(
    scrollY,
    [keyframe(7.9), keyframe(8.3), keyframe(8.5)],
    [1, 1.3, 0.8],
    {
      ease: [easeInQuad, easeOutQuad],
    }
  );

  // BUTTON 1

  const button1Opacity = useTransform(
    scrollY,
    [keyframe(7.75), keyframe(7.8), keyframe(7.9)],
    [0, 1, 0],
    {
      ease: [linear, linear],
    }
  );

  // BUTTON 2

  const button2Opacity = useTransform(
    scrollY,
    [keyframe(7.9), keyframe(8), keyframe(8.7), keyframe(8.7)],
    [0, 1, 1, 0],
    {
      ease: [linear, linear, linear],
    }
  );

  // BUTTON 2 ACTIVE
  const button3Opacity = useTransform(
    scrollY,
    [keyframe(8.3), keyframe(8.5), keyframe(8.7)],
    [0, 1, 0],
    {
      ease: [easeInQuad, easeOutQuad],
    }
  );

  return (
    <svg
      width={1440}
      height={810}
      viewBox="0 0 1440 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
      style={{
        position: "absolute",
        top: 0,
        left: 0,

        width: "100%",
        height: "auto",
      }}
    >
      <motion.rect
        x={1366}
        y={10}
        width={44}
        height={28}
        rx={2}
        fill="#fff"
        fillOpacity={0.09}
        style={{
          opacity: button2Opacity,
        }}
      />

      {/* CURRENT USER CURSOR */}
      <g>
        <rect
          id="highlight"
          x="276"
          y="649"
          width="550"
          height="24"
          fill="white"
          fill-opacity="0.03"
        />
        <rect id="Cursor" x="403" y="651" width="1" height="20" fill="#AEAFAD">
          <animate
            attributeName="fill-opacity"
            values="1;0;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      {/* BUTTON ACTIVE */}
      <motion.rect
        x={1366.5}
        y={10.5}
        width={43}
        height={27}
        rx={1.5}
        stroke="#fff"
        strokeOpacity={0.05}
        style={{ opacity: button3Opacity }}
      />

      {/* BUTTON 1 HOVER */}
      {/* BUTTON 1 */}
      <motion.rect
        x={1304}
        y={10}
        width={52}
        height={28}
        rx={2}
        fill="#fff"
        fillOpacity={0.09}
        style={{ willChange: "opacity", opacity: button1Opacity }}
      />

      {/* AVATAR 3 */}
      <motion.g
        style={{
          willChange: "opacity",
          opacity: avatar3CircleScale,
        }}
      >
        <motion.circle
          style={{
            willChange: "transform",
            scale: avatar3CircleScale,
          }}
          cx={1246.8}
          cy={23}
          r={12}
          fill="#F90"
        />
        <motion.circle
          style={{
            willChange: "transform",
            scale: avatar3Scale,
          }}
          cx={1246.8}
          cy={23}
          r={10.5}
          fill="url(#f)"
        />

        <motion.g style={{ willChange: "transform", scale: avatar3IconScale }}>
          <circle cx={1257.25} cy={31.5} r={7.5} fill="#0F0E0E" />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Union"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1254.25 28.125C1254.25 27.2966 1254.92 26.625 1255.75 26.625H1258.75C1259.58 26.625 1260.25 27.2966 1260.25 28.125V34.875C1260.25 35.7034 1259.58 36.375 1258.75 36.375H1255.75C1254.92 36.375 1254.25 35.7034 1254.25 34.875V28.125ZM1259.25 28.3125H1255.25V34.6875H1259.25V28.3125Z"
            fill="#999999"
          />
        </motion.g>
      </motion.g>

      {/* AVATAR 2 */}
      <motion.g
        style={{
          willChange: "transform, opacity",
          x: avatar2X,
          opacity: avatar2Scale,
          scale: avatar2CircleScale,
        }}
      >
        <circle cx={1210.5} cy={23} r={12} fill="#00B2FF" />
        <motion.circle
          style={{
            willChange: "transform",
            scale: avatar2Scale,
          }}
          cx={1210.5}
          cy={23}
          r={10.5}
          fill="url(#d)"
        />

        {/* VSCODE */}

        <motion.g style={{ willChange: "transform", scale: avatar2IconScale }}>
          <circle cx={1220.5} cy={31.5} r={7.5} fill="#0F0E0E" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1222.33 36.301c.16.064.35.06.51-.02l2.13-1.03a.643.643 0 0 0 .37-.585V27.68c0-.25-.14-.477-.37-.586l-2.13-1.03a.629.629 0 0 0-.65.06.363.363 0 0 0-.08.066l-4.07 3.74-1.78-1.356a.428.428 0 0 0-.55.025l-.57.52a.431.431 0 0 0 0 .641l1.54 1.413-1.54 1.412a.431.431 0 0 0 0 .641l.57.521c.15.14.38.15.55.025l1.78-1.355 4.07 3.739a.61.61 0 0 0 .22.145Zm.43-7.489-3.1 2.36 3.1 2.362v-4.722Z"
            fill="#209EF0"
          />
        </motion.g>
      </motion.g>

      {/* AVATAR 1 */}
      <motion.g
        style={{
          willChange: "transform",
          x: avatar1X,
        }}
      >
        <rect x={1163} y={11} width={24} height={24} rx={12} fill="url(#b)" />

        <rect
          x={1163.75}
          y={11.75}
          width={22.5}
          height={22.5}
          rx={11.25}
          stroke="#7B61FF"
          strokeWidth={1.5}
        />
      </motion.g>

      {/* DEVTOOLS BUTTON */}
      <motion.path
        style={{
          willChange: "transform",
          x: devtoolsX,
        }}
        d="M1104.5 24h14m-7-7v14"
        stroke="#999"
        strokeLinecap="round"
      />

      <path fill="#00A3FF" d="M555 458h2v20h-2z" />
      <rect x={214} y={459} width={18} height={18} rx={9} fill="url(#h)" />
      <rect
        x={214.562}
        y={459.562}
        width={16.875}
        height={16.875}
        rx={8.438}
        stroke="#00B2FF"
        strokeWidth={1.125}
      />
      <path fill="#F90" d="M402 290h2v20h-2z" />
      <rect x={214} y={291} width={18} height={18} rx={9} fill="url(#i)" />
      <rect
        x={214.562}
        y={291.562}
        width={16.875}
        height={16.875}
        rx={8.438}
        stroke="#F90"
        strokeWidth={1.125}
      />

      {/* CURSOR */}
      <motion.g
        style={{
          willChange: "transform, opacity",
          x: cursorX,
          y: cursorY,
          scale: cursorScale,
          opacity: cursorOpacity,
        }}
      >
        <path
          d="M767 206v16.015l3.225-3.131 2.254 5.34 3.605-1.535-2.1-5.07h4.607L767 206Z"
          fill="#fff"
        />
        <path
          d="M768 219.595v-11.188l8.165 8.183h-3.694l2.28 5.419-1.844.774-2.37-5.637-2.537 2.449Z"
          fill="#000"
        />
      </motion.g>

      <defs>
        <pattern
          id="b"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#k" transform="scale(.01042)" />
        </pattern>
        <pattern
          id="d"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#l" transform="scale(.01042)" />
        </pattern>
        <pattern
          id="f"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#m" transform="scale(.01042)" />
        </pattern>
        <pattern
          id="h"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#l" transform="scale(.01042)" />
        </pattern>
        <pattern
          id="i"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#m" transform="scale(.01042)" />
        </pattern>
        <clipPath id="a">
          <rect x={1165.5} y={11} width={26} height={26} rx={13} fill="#fff" />
        </clipPath>
        <clipPath id="c">
          <rect x={1198.5} y={11} width={24} height={24} rx={12} fill="#fff" />
        </clipPath>
        <clipPath id="e">
          <rect x={1234.75} y={11} width={24} height={24} rx={12} fill="#fff" />
        </clipPath>
        <clipPath id="g">
          <path
            fill="#fff"
            transform="translate(1248.75 23)"
            d="M0 0h16v16H0z"
          />
        </clipPath>
        <image
          id="k"
          width={96}
          height={96}
          xlinkHref="data:image/jpeg;base64,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"
        />
        <image
          id="l"
          width={96}
          height={96}
          xlinkHref="data:image/jpeg;base64,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"
        />
        <image
          id="m"
          width={96}
          height={96}
          xlinkHref="data:image/jpeg;base64,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"
        />
        <filter
          id="j"
          x={764.4}
          y={204.4}
          width={16.791}
          height={23.424}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_97_14101"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_97_14101"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
