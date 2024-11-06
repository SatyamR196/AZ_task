import React from "react";
import { useState } from "react";
import styled, { useTheme } from "styled-components";
import Accordian_Item from "./Accordian_Item";
// import { ProgressBar } from 'primereact/progressbar';

function Part({ progress = 40, Npart = 1, Open = false }) {
  const [show, setShow] = useState(Open);
  const theme = useTheme();
  return (
    <Container>
      <D1>
        <Content>
          <Left>
            <Text1>PART {Npart}</Text1>
            <Text2>Lorem Ipsum Dolor Sit Amet</Text2>
          </Left>
          <Right>
            <Top>
              <svg
                width="368"
                height="36"
                viewBox="0 0 368 36"
                fill={theme.IconBg}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 12V18L22.5 22.5M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
                  stroke="url(#paint0_linear_1_180)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M52.328 26.288C50.84 26.288 49.552 25.928 48.464 25.208C47.392 24.472 46.568 23.456 45.992 22.16C45.416 20.848 45.128 19.328 45.128 17.6C45.128 15.872 45.416 14.36 45.992 13.064C46.568 11.752 47.392 10.736 48.464 10.016C49.552 9.28 50.84 8.912 52.328 8.912C53.816 8.912 55.096 9.28 56.168 10.016C57.24 10.736 58.064 11.752 58.64 13.064C59.216 14.36 59.504 15.872 59.504 17.6C59.504 19.328 59.216 20.848 58.64 22.16C58.064 23.456 57.24 24.472 56.168 25.208C55.096 25.928 53.816 26.288 52.328 26.288ZM52.328 24.512C53.304 24.512 54.176 24.24 54.944 23.696C55.728 23.136 56.336 22.344 56.768 21.32C57.216 20.28 57.44 19.04 57.44 17.6C57.44 16.16 57.216 14.928 56.768 13.904C56.336 12.88 55.728 12.096 54.944 11.552C54.176 10.992 53.304 10.712 52.328 10.712C51.336 10.712 50.456 10.992 49.688 11.552C48.92 12.096 48.312 12.88 47.864 13.904C47.416 14.928 47.192 16.16 47.192 17.6C47.192 19.04 47.416 20.28 47.864 21.32C48.312 22.344 48.92 23.136 49.688 23.696C50.456 24.24 51.336 24.512 52.328 24.512ZM61.1982 26V24.584C62.3342 23.688 63.4062 22.784 64.4143 21.872C65.4382 20.944 66.3422 20.032 67.1262 19.136C67.9262 18.24 68.5503 17.36 68.9983 16.496C69.4623 15.632 69.6943 14.8 69.6943 14C69.6943 13.408 69.5903 12.856 69.3823 12.344C69.1903 11.832 68.8703 11.424 68.4223 11.12C67.9743 10.8 67.3663 10.64 66.5983 10.64C65.8623 10.64 65.2463 10.808 64.7502 11.144C64.2542 11.464 63.8782 11.896 63.6222 12.44C63.3822 12.984 63.2622 13.568 63.2622 14.192H61.3182C61.3182 13.088 61.5502 12.144 62.0142 11.36C62.4782 10.56 63.1102 9.952 63.9103 9.536C64.7103 9.12 65.6142 8.912 66.6222 8.912C68.1103 8.912 69.3263 9.336 70.2703 10.184C71.2303 11.016 71.7103 12.264 71.7103 13.928C71.7103 14.92 71.4623 15.904 70.9663 16.88C70.4703 17.84 69.8383 18.776 69.0703 19.688C68.3023 20.584 67.4783 21.424 66.5983 22.208C65.7343 22.992 64.9262 23.696 64.1742 24.32H72.2863V26H61.1982ZM75.0526 26.12C74.6526 26.12 74.3166 25.992 74.0446 25.736C73.7886 25.464 73.6606 25.136 73.6606 24.752C73.6606 24.368 73.7886 24.048 74.0446 23.792C74.3166 23.52 74.6526 23.384 75.0526 23.384C75.4366 23.384 75.7566 23.52 76.0126 23.792C76.2846 24.048 76.4206 24.368 76.4206 24.752C76.4206 25.136 76.2846 25.464 76.0126 25.736C75.7566 25.992 75.4366 26.12 75.0526 26.12ZM75.0526 16.544C74.6526 16.544 74.3166 16.416 74.0446 16.16C73.7886 15.888 73.6606 15.56 73.6606 15.176C73.6606 14.792 73.7886 14.472 74.0446 14.216C74.3166 13.944 74.6526 13.808 75.0526 13.808C75.4366 13.808 75.7566 13.944 76.0126 14.216C76.2846 14.472 76.4206 14.792 76.4206 15.176C76.4206 15.56 76.2846 15.888 76.0126 16.16C75.7566 16.416 75.4366 16.544 75.0526 16.544ZM85.0899 26.288C83.6019 26.288 82.3139 25.928 81.2259 25.208C80.1539 24.472 79.3299 23.456 78.7539 22.16C78.1779 20.848 77.8899 19.328 77.8899 17.6C77.8899 15.872 78.1779 14.36 78.7539 13.064C79.3299 11.752 80.1539 10.736 81.2259 10.016C82.3139 9.28 83.6019 8.912 85.0899 8.912C86.5779 8.912 87.8579 9.28 88.9299 10.016C90.0019 10.736 90.8259 11.752 91.4019 13.064C91.9779 14.36 92.2659 15.872 92.2659 17.6C92.2659 19.328 91.9779 20.848 91.4019 22.16C90.8259 23.456 90.0019 24.472 88.9299 25.208C87.8579 25.928 86.5779 26.288 85.0899 26.288ZM85.0899 24.512C86.0659 24.512 86.9379 24.24 87.7059 23.696C88.4899 23.136 89.0979 22.344 89.5299 21.32C89.9779 20.28 90.2019 19.04 90.2019 17.6C90.2019 16.16 89.9779 14.928 89.5299 13.904C89.0979 12.88 88.4899 12.096 87.7059 11.552C86.9379 10.992 86.0659 10.712 85.0899 10.712C84.0979 10.712 83.2179 10.992 82.4499 11.552C81.6819 12.096 81.0739 12.88 80.6259 13.904C80.1779 14.928 79.9539 16.16 79.9539 17.6C79.9539 19.04 80.1779 20.28 80.6259 21.32C81.0739 22.344 81.6819 23.136 82.4499 23.696C83.2179 24.24 84.0979 24.512 85.0899 24.512ZM101.01 26.288C99.5225 26.288 98.2345 25.928 97.1465 25.208C96.0745 24.472 95.2505 23.456 94.6745 22.16C94.0985 20.848 93.8105 19.328 93.8105 17.6C93.8105 15.872 94.0985 14.36 94.6745 13.064C95.2505 11.752 96.0745 10.736 97.1465 10.016C98.2345 9.28 99.5225 8.912 101.01 8.912C102.498 8.912 103.778 9.28 104.85 10.016C105.922 10.736 106.746 11.752 107.322 13.064C107.898 14.36 108.186 15.872 108.186 17.6C108.186 19.328 107.898 20.848 107.322 22.16C106.746 23.456 105.922 24.472 104.85 25.208C103.778 25.928 102.498 26.288 101.01 26.288ZM101.01 24.512C101.986 24.512 102.858 24.24 103.626 23.696C104.41 23.136 105.018 22.344 105.45 21.32C105.898 20.28 106.122 19.04 106.122 17.6C106.122 16.16 105.898 14.928 105.45 13.904C105.018 12.88 104.41 12.096 103.626 11.552C102.858 10.992 101.986 10.712 101.01 10.712C100.018 10.712 99.1385 10.992 98.3705 11.552C97.6025 12.096 96.9945 12.88 96.5465 13.904C96.0985 14.928 95.8745 16.16 95.8745 17.6C95.8745 19.04 96.0985 20.28 96.5465 21.32C96.9945 22.344 97.6025 23.136 98.3705 23.696C99.1385 24.24 100.018 24.512 101.01 24.512ZM110.955 26.12C110.555 26.12 110.219 25.992 109.947 25.736C109.691 25.464 109.563 25.136 109.563 24.752C109.563 24.368 109.691 24.048 109.947 23.792C110.219 23.52 110.555 23.384 110.955 23.384C111.339 23.384 111.659 23.52 111.915 23.792C112.187 24.048 112.323 24.368 112.323 24.752C112.323 25.136 112.187 25.464 111.915 25.736C111.659 25.992 111.339 26.12 110.955 26.12ZM110.955 16.544C110.555 16.544 110.219 16.416 109.947 16.16C109.691 15.888 109.563 15.56 109.563 15.176C109.563 14.792 109.691 14.472 109.947 14.216C110.219 13.944 110.555 13.808 110.955 13.808C111.339 13.808 111.659 13.944 111.915 14.216C112.187 14.472 112.323 14.792 112.323 15.176C112.323 15.56 112.187 15.888 111.915 16.16C111.659 16.416 111.339 16.544 110.955 16.544ZM120.992 26.288C119.504 26.288 118.216 25.928 117.128 25.208C116.056 24.472 115.232 23.456 114.656 22.16C114.08 20.848 113.792 19.328 113.792 17.6C113.792 15.872 114.08 14.36 114.656 13.064C115.232 11.752 116.056 10.736 117.128 10.016C118.216 9.28 119.504 8.912 120.992 8.912C122.48 8.912 123.76 9.28 124.832 10.016C125.904 10.736 126.728 11.752 127.304 13.064C127.88 14.36 128.168 15.872 128.168 17.6C128.168 19.328 127.88 20.848 127.304 22.16C126.728 23.456 125.904 24.472 124.832 25.208C123.76 25.928 122.48 26.288 120.992 26.288ZM120.992 24.512C121.968 24.512 122.84 24.24 123.608 23.696C124.392 23.136 125 22.344 125.432 21.32C125.88 20.28 126.104 19.04 126.104 17.6C126.104 16.16 125.88 14.928 125.432 13.904C125 12.88 124.392 12.096 123.608 11.552C122.84 10.992 121.968 10.712 120.992 10.712C120 10.712 119.12 10.992 118.352 11.552C117.584 12.096 116.976 12.88 116.528 13.904C116.08 14.928 115.856 16.16 115.856 17.6C115.856 19.04 116.08 20.28 116.528 21.32C116.976 22.344 117.584 23.136 118.352 23.696C119.12 24.24 120 24.512 120.992 24.512ZM136.913 26.288C135.425 26.288 134.137 25.928 133.049 25.208C131.977 24.472 131.153 23.456 130.577 22.16C130.001 20.848 129.713 19.328 129.713 17.6C129.713 15.872 130.001 14.36 130.577 13.064C131.153 11.752 131.977 10.736 133.049 10.016C134.137 9.28 135.425 8.912 136.913 8.912C138.401 8.912 139.681 9.28 140.753 10.016C141.825 10.736 142.649 11.752 143.225 13.064C143.801 14.36 144.089 15.872 144.089 17.6C144.089 19.328 143.801 20.848 143.225 22.16C142.649 23.456 141.825 24.472 140.753 25.208C139.681 25.928 138.401 26.288 136.913 26.288ZM136.913 24.512C137.889 24.512 138.761 24.24 139.529 23.696C140.313 23.136 140.921 22.344 141.353 21.32C141.801 20.28 142.025 19.04 142.025 17.6C142.025 16.16 141.801 14.928 141.353 13.904C140.921 12.88 140.313 12.096 139.529 11.552C138.761 10.992 137.889 10.712 136.913 10.712C135.921 10.712 135.041 10.992 134.273 11.552C133.505 12.096 132.897 12.88 132.449 13.904C132.001 14.928 131.777 16.16 131.777 17.6C131.777 19.04 132.001 20.28 132.449 21.32C132.897 22.344 133.505 23.136 134.273 23.696C135.041 24.24 135.921 24.512 136.913 24.512Z"
                  fill="#17384D"
                />
                <path
                  d="M321 10.5V22.5C321 23.2956 321.316 24.0587 321.879 24.6213C322.441 25.1839 323.204 25.5 324 25.5H333M321 10.5V7.5C321 6.70435 321.316 5.94129 321.879 5.37868C322.441 4.81607 323.204 4.5 324 4.5H330.879C331.277 4.50008 331.658 4.65818 331.94 4.9395L338.561 11.5605C338.842 11.8417 339 12.2232 339 12.621V22.5C339 23.2956 338.684 24.0587 338.121 24.6213C337.559 25.1839 336.796 25.5 336 25.5H333M321 10.5H318C317.204 10.5 316.441 10.8161 315.879 11.3787C315.316 11.9413 315 12.7044 315 13.5V28.5C315 29.2956 315.316 30.0587 315.879 30.6213C316.441 31.1839 317.204 31.5 318 31.5H330C330.796 31.5 331.559 31.1839 332.121 30.6213C332.684 30.0587 333 29.2956 333 28.5V25.5"
                  stroke="url(#paint1_linear_1_180)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M360.488 26.288C359.336 26.288 358.336 26.08 357.488 25.664C356.64 25.248 355.96 24.68 355.448 23.96C354.952 23.224 354.648 22.392 354.536 21.464H356.504C356.696 22.392 357.144 23.144 357.848 23.72C358.552 24.28 359.44 24.56 360.512 24.56C361.312 24.56 362 24.376 362.576 24.008C363.152 23.624 363.592 23.112 363.896 22.472C364.216 21.832 364.376 21.12 364.376 20.336C364.376 19.088 364.024 18.08 363.32 17.312C362.616 16.544 361.704 16.16 360.584 16.16C359.656 16.16 358.864 16.368 358.208 16.784C357.552 17.2 357.072 17.744 356.768 18.416H354.848L356.288 9.2H365.096V10.952H357.848L356.864 16.064C357.248 15.6 357.776 15.216 358.448 14.912C359.136 14.608 359.92 14.456 360.8 14.456C361.904 14.456 362.864 14.712 363.68 15.224C364.512 15.736 365.16 16.432 365.624 17.312C366.088 18.192 366.32 19.192 366.32 20.312C366.32 21.384 366.088 22.376 365.624 23.288C365.176 24.2 364.512 24.928 363.632 25.472C362.768 26.016 361.72 26.288 360.488 26.288Z"
                  fill="#17384D"
                />
                <path
                  d="M175.5 28.5V19.5C175.5 18.7044 175.184 17.9413 174.621 17.3787C174.059 16.8161 173.296 16.5 172.5 16.5H169.5C168.704 16.5 167.941 16.8161 167.379 17.3787C166.816 17.9413 166.5 18.7044 166.5 19.5V28.5C166.5 29.2956 166.816 30.0587 167.379 30.6213C167.941 31.1839 168.704 31.5 169.5 31.5H172.5C173.296 31.5 174.059 31.1839 174.621 30.6213C175.184 30.0587 175.5 29.2956 175.5 28.5ZM175.5 28.5V13.5C175.5 12.7044 175.816 11.9413 176.379 11.3787C176.941 10.8161 177.704 10.5 178.5 10.5H181.5C182.296 10.5 183.059 10.8161 183.621 11.3787C184.184 11.9413 184.5 12.7044 184.5 13.5V28.5M175.5 28.5C175.5 29.2956 175.816 30.0587 176.379 30.6213C176.941 31.1839 177.704 31.5 178.5 31.5H181.5C182.296 31.5 183.059 31.1839 183.621 30.6213C184.184 30.0587 184.5 29.2956 184.5 28.5M184.5 28.5V7.5C184.5 6.70435 184.816 5.94129 185.379 5.37868C185.941 4.81607 186.704 4.5 187.5 4.5H190.5C191.296 4.5 192.059 4.81607 192.621 5.37868C193.184 5.94129 193.5 6.70435 193.5 7.5V28.5C193.5 29.2956 193.184 30.0587 192.621 30.6213C192.059 31.1839 191.296 31.5 190.5 31.5H187.5C186.704 31.5 185.941 31.1839 185.379 30.6213C184.816 30.0587 184.5 29.2956 184.5 28.5Z"
                  stroke="url(#paint2_linear_1_180)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M207.776 26V9.2H210.128L216.176 20.912L222.176 9.2H224.552V26H222.536V12.8L216.92 23.6H215.408L209.792 12.824V26H207.776ZM232.608 26.288C231.472 26.288 230.464 26.032 229.584 25.52C228.704 24.992 228.008 24.264 227.496 23.336C227 22.408 226.752 21.312 226.752 20.048C226.752 18.8 227 17.712 227.496 16.784C227.992 15.84 228.68 15.112 229.56 14.6C230.456 14.072 231.488 13.808 232.656 13.808C233.808 13.808 234.8 14.072 235.632 14.6C236.48 15.112 237.128 15.792 237.576 16.64C238.024 17.488 238.248 18.4 238.248 19.376C238.248 19.552 238.24 19.728 238.224 19.904C238.224 20.08 238.224 20.28 238.224 20.504H228.744C228.792 21.416 229 22.176 229.368 22.784C229.752 23.376 230.224 23.824 230.784 24.128C231.36 24.432 231.968 24.584 232.608 24.584C233.44 24.584 234.136 24.392 234.696 24.008C235.256 23.624 235.664 23.104 235.92 22.448H237.912C237.592 23.552 236.976 24.472 236.064 25.208C235.168 25.928 234.016 26.288 232.608 26.288ZM232.608 15.512C231.648 15.512 230.792 15.808 230.04 16.4C229.304 16.976 228.88 17.824 228.768 18.944H236.256C236.208 17.872 235.84 17.032 235.152 16.424C234.464 15.816 233.616 15.512 232.608 15.512ZM245.6 26.288C244.416 26.288 243.376 26.016 242.48 25.472C241.6 24.928 240.912 24.184 240.416 23.24C239.936 22.296 239.696 21.224 239.696 20.024C239.696 18.824 239.944 17.76 240.44 16.832C240.936 15.888 241.624 15.152 242.504 14.624C243.384 14.08 244.424 13.808 245.624 13.808C246.6 13.808 247.464 14.008 248.216 14.408C248.968 14.808 249.552 15.368 249.968 16.088V8.72H251.984V26H250.16L249.968 24.032C249.584 24.608 249.032 25.128 248.312 25.592C247.592 26.056 246.688 26.288 245.6 26.288ZM245.816 24.536C246.616 24.536 247.32 24.352 247.928 23.984C248.552 23.6 249.032 23.072 249.368 22.4C249.72 21.728 249.896 20.944 249.896 20.048C249.896 19.152 249.72 18.368 249.368 17.696C249.032 17.024 248.552 16.504 247.928 16.136C247.32 15.752 246.616 15.56 245.816 15.56C245.032 15.56 244.328 15.752 243.704 16.136C243.096 16.504 242.616 17.024 242.264 17.696C241.928 18.368 241.76 19.152 241.76 20.048C241.76 20.944 241.928 21.728 242.264 22.4C242.616 23.072 243.096 23.6 243.704 23.984C244.328 24.352 245.032 24.536 245.816 24.536ZM255.775 11.456C255.375 11.456 255.039 11.328 254.767 11.072C254.511 10.8 254.383 10.464 254.383 10.064C254.383 9.68 254.511 9.36 254.767 9.104C255.039 8.848 255.375 8.72 255.775 8.72C256.159 8.72 256.487 8.848 256.759 9.104C257.031 9.36 257.167 9.68 257.167 10.064C257.167 10.464 257.031 10.8 256.759 11.072C256.487 11.328 256.159 11.456 255.775 11.456ZM254.767 26V14.096H256.783V26H254.767ZM263.917 26.288C262.509 26.288 261.389 25.864 260.557 25.016C259.725 24.152 259.309 22.832 259.309 21.056V14.096H261.325V20.84C261.325 23.32 262.341 24.56 264.373 24.56C265.413 24.56 266.269 24.192 266.941 23.456C267.629 22.704 267.973 21.64 267.973 20.264V14.096H269.989V26H268.165L268.021 23.864C267.653 24.616 267.101 25.208 266.365 25.64C265.645 26.072 264.829 26.288 263.917 26.288ZM272.587 26V14.096H274.411L274.555 15.824C274.939 15.184 275.451 14.688 276.091 14.336C276.731 13.984 277.451 13.808 278.251 13.808C279.195 13.808 280.003 14 280.675 14.384C281.363 14.768 281.891 15.352 282.259 16.136C282.675 15.416 283.243 14.848 283.963 14.432C284.699 14.016 285.491 13.808 286.339 13.808C287.763 13.808 288.899 14.24 289.747 15.104C290.595 15.952 291.019 17.264 291.019 19.04V26H289.027V19.256C289.027 18.024 288.779 17.096 288.283 16.472C287.787 15.848 287.075 15.536 286.147 15.536C285.187 15.536 284.387 15.912 283.747 16.664C283.123 17.4 282.811 18.456 282.811 19.832V26H280.795V19.256C280.795 18.024 280.547 17.096 280.051 16.472C279.555 15.848 278.843 15.536 277.915 15.536C276.971 15.536 276.179 15.912 275.539 16.664C274.915 17.4 274.603 18.456 274.603 19.832V26H272.587Z"
                  fill="#17384D"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_180"
                    x1="6.60936"
                    y1="4.5"
                    x2="28.7578"
                    y2="4.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_180"
                    x1="316.875"
                    y1="4.5"
                    x2="336.562"
                    y2="4.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1_180"
                    x1="168.609"
                    y1="4.5"
                    x2="190.758"
                    y2="4.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Toggle arrow -- show hide accordian details */}
              {show ? (
                <Svg
                  onClick={() => setShow(!show)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29 16"
                  height="16"
                  width="29"
                >
                  <g
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(-1 0 0 -1 29 16)"
                  >
                    <path
                      d="M2.79709 13.5774L2.79714 13.5775C3.47842 14.1368 4.10151 14.645 4.55643 15.0131C4.72889 15.1526 4.87666 15.2716 4.99402 15.3653C5.01797 15.3461 5.04328 15.3257 5.06991 15.3042C5.31345 15.1079 5.66391 14.8233 6.09558 14.4716C6.95873 13.7684 8.14458 12.7982 9.44475 11.7307L14.1736 7.84826L14.4909 7.58777L14.8082 7.84827L19.537 11.7309C20.8371 12.7984 22.023 13.7686 22.8862 14.4718C23.3179 14.8235 23.6683 15.108 23.9119 15.3044C23.9386 15.3259 23.9639 15.3463 23.9879 15.3655C24.1059 15.2713 24.2546 15.1515 24.4283 15.011C24.8849 14.6416 25.5102 14.1315 26.1939 13.57L26.1939 13.57L28.2121 11.9129L14.4907 0.646939L7.56262 6.33524L7.24534 5.94881L7.56261 6.33525C5.57019 7.97104 3.75903 9.45981 2.44604 10.5406C1.78951 11.0811 1.25771 11.5194 0.890121 11.823C0.851307 11.8551 0.814339 11.8856 0.77926 11.9146C0.859609 11.9813 0.949247 12.0555 1.04708 12.1364C1.49593 12.5077 2.1154 13.0179 2.79709 13.5774Z"
                      fill="#17384D"
                      stroke="white"
                    />
                  </g>
                </Svg>
              ) : (
                <Svg
                  onClick={() => setShow(!show)}
                  width="29"
                  height="16"
                  viewBox="0 0 29 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.79709 13.5774L2.79714 13.5775C3.47842 14.1368 4.10151 14.645 4.55643 15.0131C4.72889 15.1526 4.87666 15.2716 4.99402 15.3653C5.01797 15.3461 5.04328 15.3257 5.06991 15.3042C5.31345 15.1079 5.66391 14.8233 6.09558 14.4716C6.95873 13.7684 8.14458 12.7982 9.44475 11.7307L14.1736 7.84826L14.4909 7.58777L14.8082 7.84827L19.537 11.7309C20.8371 12.7984 22.023 13.7686 22.8862 14.4718C23.3179 14.8235 23.6683 15.108 23.9119 15.3044C23.9386 15.3259 23.9639 15.3463 23.9879 15.3655C24.1059 15.2713 24.2546 15.1515 24.4283 15.011C24.8849 14.6416 25.5102 14.1315 26.1939 13.57L26.1939 13.57L28.2121 11.9129L14.4907 0.646939L7.56262 6.33524L7.24534 5.94881L7.56261 6.33525C5.57019 7.97104 3.75903 9.45981 2.44604 10.5406C1.78951 11.0811 1.25771 11.5194 0.890121 11.823C0.851307 11.8551 0.814339 11.8856 0.77926 11.9146C0.859609 11.9813 0.949247 12.0555 1.04708 12.1364C1.49593 12.5077 2.1154 13.0179 2.79709 13.5774Z"
                    fill="#17384D"
                    stroke="white"
                  />
                </Svg>
              )}
            </Top>
            <Bottom>{progress}% Completed</Bottom>
          </Right>
        </Content>
        <Bar>
          <ProgressBar progress={progress}></ProgressBar>
        </Bar>
      </D1>

      {/* // Accordian Item  */}

      {show && (
        <D2>
          <Accordian_Item
            text="Video 1"
            svg_icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 12V18L22.5 22.5M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
                  stroke={theme.color}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <Accordian_Item
            text="Article 1"
            svg_icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9707 12C11.7027 10.4467 13.6773 9.33333 16 9.33333C18.9467 9.33333 21.3333 11.124 21.3333 13.3333C21.3333 15.2 19.6293 16.7667 17.3253 17.2093C16.6027 17.348 16 17.9293 16 18.6667M16 22.6667H16.0133M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z"
                  stroke={theme.color}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_150"
                    x1="5.87499"
                    y1="4"
                    x2="25.5625"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />

          <Accordian_Item
            text="Quiz 1"
            svg_icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 12V18L22.5 22.5M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
                  stroke={theme.color}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />

          <Accordian_Item
            text="Coding Exercise 1"
            svg_icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 26.6667L18.6667 5.33334M24 10.6667L29.3333 16L24 21.3333M8 21.3333L2.66666 16L8 10.6667"
                  stroke={theme.color}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_161"
                    x1="4.74998"
                    y1="5.33334"
                    x2="26.625"
                    y2="5.33334"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />

          <Accordian_Item
            text="Combined Resource 1"
            svg_icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 9.33333V20C10.6667 20.7072 10.9476 21.3855 11.4477 21.8856C11.9478 22.3857 12.6261 22.6667 13.3333 22.6667H21.3333M10.6667 9.33333V6.66667C10.6667 5.95942 10.9476 5.28115 11.4477 4.78105C11.9478 4.28095 12.6261 4 13.3333 4H19.448C19.8016 4.00008 20.1407 4.1406 20.3907 4.39067L26.276 10.276C26.5261 10.526 26.6666 10.8651 26.6667 11.2187V20C26.6667 20.7072 26.3857 21.3855 25.8856 21.8856C25.3855 22.3857 24.7072 22.6667 24 22.6667H21.3333M10.6667 9.33333H8C7.29276 9.33333 6.61448 9.61428 6.11438 10.1144C5.61429 10.6145 5.33334 11.2928 5.33334 12V25.3333C5.33334 26.0406 5.61429 26.7189 6.11438 27.219C6.61448 27.719 7.29276 28 8 28H18.6667C19.3739 28 20.0522 27.719 20.5523 27.219C21.0524 26.7189 21.3333 26.0406 21.3333 25.3333V22.6667"
                  stroke={theme.color}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_172"
                    x1="6.99999"
                    y1="4"
                    x2="24.5"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />
        </D2>
      )}
    </Container>
  );
}

export default Part;

const Container = styled.div``;
const D1 = styled.div`
  height: 160px;
  /* background-color: #2cbcf9; */
  width: 1001px;
  border-radius: 16px;
  border: 1px solid #a4e6ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
`;

const D2 = styled.div``;
const Bar = styled.div`
  width: 100%;
  border-radius: 0 0 10px 10px;
  background-color: #eff5ff;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.progress}%;
  height: 10px;
  background-color: ${(props) => props.theme.progress};
  border-radius: 0 0 10px 10px;
`;
const Left = styled.div`
  min-width: 358 px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 38px;
  left: 32px;
  /* background-color: yellow; */
  /* bottom: 69px; */
`;
const Right = styled.div`
  position: absolute;
  right: 31px;
  top: 46px;
`;
const Text1 = styled.div`
  font-family: DM Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: -0.03em;
  text-align: justified;
`;
const Text2 = styled(Text1)`
  font-size: 28px;
  font-weight: 700;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: white;
`;
const Bottom = styled.div`
  position: absolute;
  width: 162px;
  height: 34px;
  bottom: -58px;
  background-color: ${(props) => props.theme.hover};
  right: 0px;
  padding: 4px 10px 4px 10px;
  border-radius: 8px;
  border: 1px solid #99e4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: DM Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.04px;
  letter-spacing: -0.03em;
  text-align: right;
`;

const Svg = styled.svg`
  /* position: absolute;
    top: 56px;
    right: 31px; */
  &:hover {
    cursor: pointer;
  }
`;
