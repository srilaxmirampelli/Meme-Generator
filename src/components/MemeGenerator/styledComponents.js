import styled from 'styled-components'

export const CustomLabel = styled.label`
  color: #7e858e;
`

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 80px;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding: 32px, 24px, 32px, 24px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
    
  }
`

export const AppHeading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  background-image: url(${props => props.bgImageUrl});
  background-size: cover;
  height: 300px;
  width: 100%;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
    width: 43%;
    max-height: 300px;
    margint-bottom: 0;
  }
`

export const MemeText = styled.h1`
  color: #ffffff;
  font-size: ${props => props.activeFontSize}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const Label = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 0px;
`
export const InputField = styled.input`
  color: #5a7184;
  font-weight: 500;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 2px solid #d7dfe9;
  border-radius: 6px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`
export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`
export const CustomOption = styled.option`
  font-size: 16px;
  font-weght: 500;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
