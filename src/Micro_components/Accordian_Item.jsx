import React from "react";
import styled, { useTheme } from "styled-components";

function Accordian_Item({ svg_icon, text = "Article", time = "10:00" }) {
    const theme=useTheme();
  return (
    <Container>
      <Main>
        <div>
          <Content>
            {svg_icon}
            <Text weight={700}>{text}</Text>
          </Content>
        </div>
        <div>
          <Content>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill={theme.IconBg}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 12V18L22.5 22.5M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
                stroke="#17384D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Text weight={400}>{time}</Text>
          </Content>
        </div>
      </Main>
      <BBorder></BBorder>
    </Container>
  );
}

export default Accordian_Item;

const Container = styled.div`
    padding-inline: 40px;
`;
const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 30px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Text = styled.div`
    font-family: DM Sans;
    font-weight: ${props=>props.weight};
    font-size: 24px;
    line-height: 44px;
    letter-spacing: -0.03em;
    text-align: justified;

`;

const BBorder = styled.div`
  height: 1px;
  width: 100%;
  background-image: ${props=>props.theme.BorderC};
`;

