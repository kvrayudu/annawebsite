import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <style>{".prefix__st0{fill:#f37321}"}</style>
      <g id="prefix__Layer_2">
        <g id="prefix__XMLID_1_">
          <path
            className="prefix__st0"
            d="M63.9 52.8c1.2 2.3 1.8 4.9 1.8 7.7C65.7 69.6 58.6 77 50 77s-15.7-7.4-15.7-16.5c0-2.8.6-5.4 1.8-7.7h27.8zM64 52.8H36.1c2.2-3.7 4.3-7.6 6.2-11.8 3.3-7 5.8-13.7 7.7-19.9 1.9 6.1 4.4 12.8 7.7 19.9 2 4.2 4.1 8.2 6.3 11.8z"
          />
        </g>
      </g>
      <ellipse
        transform="rotate(-78.135 39.15 57.409)"
        cx={39.1}
        cy={57.4}
        rx={5.3}
        ry={1.8}
        fill="#fff"
        id="prefix__Layer_3"
      />
    </svg>
  )
}

export default SvgComponent
