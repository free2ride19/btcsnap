import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  bottom: 40px;
  width: 280px;
  height: 48px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  :hover {
    background-color: #F58300;
    transition: 0.25s;
  }
  :not(:hover) {
    background: #111214;
    transition: 0.25s;
  }
  :disabled {
    background-color: #E1E6F0;
  }
`

export const FailedIconContainer = styled.div`
  width: 96px;
  height: 96px;
  margin-top: 40px;
`

export const FailedTitle = styled.p`
  color: #F54814;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  margin: 16px 0 24px 0;
  text-transform: capitalize;
`

export const FailedText = styled.p`
  color: #9095A3;
  line-height: 24px;
  margin: 0 0 50px 0;
`

export const ErrorMessage = styled.div`
  position: absolute;
  top: -122px;
  height: 40px;
  padding: 10px 14px;
  background: #FFFFFF;
  border-radius: 12px;
  border: 0.5px solid #E1E6F0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span:nth-child(2) {
    color: #F54814;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    margin-left: 4px;
  }
`
