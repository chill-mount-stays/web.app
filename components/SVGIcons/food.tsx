import { motion } from "motion/react";

export const FoodSvg = ({ height }: { height: string }) => {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      id="Layer_1"
      enableBackground="new 0 0 512 512"
      height={height}
      viewBox="0 0 512 512"
      width={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <circle cx="256" cy="256" fill="#555a6e" r="240" />
        </g>
        <g>
          <g>
            <circle cx="256" cy="256" fill="#463c4b" r="192" />
          </g>
        </g>
        <g>
          <path
            d="m240 448h48v-384h-48c-106.039 0-192 85.961-192 192 0 106.039 85.961 192 192 192z"
            fill="#a5c3dc"
          />
        </g>
        <g>
          <path
            d="m240 432h48v-352h-48c-97.202 0-176 78.798-176 176 0 97.202 78.798 176 176 176z"
            fill="#d7e6f0"
          />
        </g>
        <g>
          <circle cx="96" cy="256" fill="#ffd205" r="32" />
        </g>
        <g>
          <circle cx="112" cy="224" fill="#ffd205" r="32" />
        </g>
        <g>
          <circle cx="128" cy="192" fill="#faa019" r="32" />
        </g>
        <g>
          <circle cx="144" cy="160" fill="#ffd205" r="32" />
        </g>
        <g>
          <circle cx="112" cy="288" fill="#faa019" r="32" />
        </g>
        <g>
          <circle cx="128" cy="320" fill="#ffd205" r="32" />
        </g>
        <g>
          <circle cx="144" cy="352" fill="#faa019" r="32" />
        </g>
        <g>
          <path
            d="m288 448c8.837 0 16-7.163 16-16v-352c0-8.837-7.163-16-16-16-106.039 0-192 85.961-192 192 0 106.039 85.961 192 192 192z"
            fill="#f57828"
          />
        </g>
        <g>
          <g>
            <circle cx="263.711" cy="156.678" fill="#faa019" r="13.333" />
          </g>
          <g>
            <circle cx="249.044" cy="179.344" fill="#faa019" r="4" />
          </g>
          <g>
            <circle cx="238.667" cy="361.333" fill="#faa019" r="4" />
          </g>
          <g>
            <circle cx="166.667" cy="340" fill="#faa019" r="4" />
          </g>
          <g>
            <circle cx="270.667" cy="406.667" fill="#faa019" r="4" />
          </g>
          <g>
            <circle cx="241.333" cy="132" fill="#faa019" r="4" />
          </g>
          <g>
            <circle cx="170.667" cy="186.667" fill="#faa019" r="8" />
          </g>
          <g>
            <circle cx="269.044" cy="215.344" fill="#faa019" r="8" />
          </g>
          <g>
            <circle cx="170.667" cy="317.333" fill="#faa019" r="8" />
          </g>
        </g>
        <g>
          <g>
            <circle cx="384" cy="256" fill="#a5c3dc" r="80" />
          </g>
          <g>
            <circle cx="384" cy="256" fill="#f28a39" r="64" />
          </g>
          <g>
            <path
              d="m360 296c0-35.346 28.654-64 64-64 7.208 0 14.129 1.209 20.594 3.406-8.576-25.239-32.456-43.406-60.594-43.406-35.346 0-64 28.654-64 64 0 28.139 18.167 52.018 43.406 60.594-2.197-6.465-3.406-13.386-3.406-20.594z"
              fill="#d26e28"
            />
          </g>
          <g>
            <path
              d="m312 264c-4.418 0-8-3.582-8-8 0-44.112 35.888-80 80-80 4.418 0 8 3.582 8 8s-3.582 8-8 8c-35.29 0-64 28.71-64 64 0 4.418-3.582 8-8 8z"
              fill="#d7e6f0"
            />
          </g>
          <g>
            <g>
              <circle cx="420" cy="252" fill="#d26e28" r="12" />
            </g>
            <g>
              <circle cx="356" cy="244" fill="#a55023" r="12" />
            </g>
            <g>
              <circle cx="396" cy="300" fill="#d26e28" r="4" />
            </g>
            <g>
              <circle cx="396" cy="204" fill="#a55023" r="4" />
            </g>
          </g>
        </g>
        <g>
          <g>
            <circle cx="360" cy="392" fill="#a5c3dc" r="56" />
          </g>
          <g>
            <path
              d="m312 400c-4.418 0-8-3.582-8-8 0-30.879 25.121-56 56-56 4.418 0 8 3.582 8 8s-3.582 8-8 8c-22.056 0-40 17.944-40 40 0 4.418-3.582 8-8 8z"
              fill="#d7e6f0"
            />
          </g>
          <g>
            <circle cx="360" cy="392" fill="#ffd23c" r="40" />
          </g>
          <g>
            <path
              d="m344 416c0-22.092 17.909-40 40-40 4.782 0 9.367.842 13.618 2.382-5.571-15.387-20.309-26.382-37.618-26.382-22.091 0-40 17.908-40 40 0 17.309 10.996 32.047 26.382 37.618-1.54-4.251-2.382-8.836-2.382-13.618z"
              fill="#faa019"
            />
          </g>
        </g>
        <g>
          <g>
            <circle cx="360" cy="120" fill="#a5c3dc" r="56" />
          </g>
          <g>
            <path
              d="m312 128c-4.418 0-8-3.582-8-8 0-30.879 25.121-56 56-56 4.418 0 8 3.582 8 8s-3.582 8-8 8c-22.056 0-40 17.944-40 40 0 4.418-3.582 8-8 8z"
              fill="#d7e6f0"
            />
          </g>
          <g>
            <circle cx="360" cy="120" fill="#f04b37" r="40" />
          </g>
          <g>
            <path
              d="m344 144c0-22.092 17.909-40 40-40 4.782 0 9.367.842 13.618 2.382-5.571-15.387-20.309-26.382-37.618-26.382-22.091 0-40 17.908-40 40 0 17.309 10.996 32.047 26.382 37.618-1.54-4.251-2.382-8.836-2.382-13.618z"
              fill="#e1322d"
            />
          </g>
        </g>
      </g>
    </motion.svg>
  );
};