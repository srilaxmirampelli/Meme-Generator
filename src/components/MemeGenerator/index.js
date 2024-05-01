import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  FormAndMemeContainer,
  AppHeading,
  MemeContainer,
  MemeText,
  MemeGeneratorForm,
  Label,
  InputField,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MeMeGenerator extends Component {
  state = {
    inputBgImageUrl: '',
    bgImageUrl: '',
    inputTopText: '',
    topText: '',
    inputBottomText: '',
    bottomText: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    activeFontSize: '',
  }

  onChangeBgInputImage = event => {
    this.setState({inputBgImageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({inputTopText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({inputBottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      inputBgImageUrl,
      inputBottomText,
      inputTopText,
      activeFontSizeOptionId,
    } = this.state
    this.setState({
      bgImageUrl: inputBgImageUrl,
      topText: inputTopText,
      bottomText: inputBottomText,
      activeFontSize: activeFontSizeOptionId,
      isMemeGenerated: true,
    })
  }

  renderMemeContainer = () => {
    const {bgImageUrl, topText, bottomText, activeFontSize} = this.state
    return (
      <MemeContainer bgImageUrl={bgImageUrl} data-testid="meme">
        <MemeText activeFontSize={activeFontSize}>{topText}</MemeText>
        <MemeText activeFontSize={activeFontSize}>{bottomText}</MemeText>
      </MemeContainer>
    )
  }

  renderInputForm = () => {
    const {
      inputBgImageUrl,
      inputTopText,
      inputBottomText,
      activeFontSizeOptionId,
    } = this.state
    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <Label htmlFor="bgImageUrl">Image URL</Label>
        <InputField
          type="text"
          placeholder="Enter the image URL"
          id="bgImageUrl"
          value={inputBgImageUrl}
          onChange={this.onChangeBgInputImage}
        />
        <Label htmlFor="topText">Top Text</Label>
        <InputField
          type="text"
          placeholder="Enter the image URL"
          id="topText"
          value={inputTopText}
          onChange={this.onChangeTopText}
        />
        <Label htmlFor="bottomText">Bottom Text</Label>
        <InputField
          type="text"
          placeholder="Enter the image URL"
          id="bottomText"
          value={inputBottomText}
          onChange={this.onChangeBottomText}
        />
        <Label htmlFor="select">Font Size</Label>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSize}
        >
          {fontSizesOptionsList.map(option => (
            <CustomOption value={option.optionId} key={option.optionId}>
              {option.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  render() {
    return (
      <AppContainer>
        <ResponsiveContainer>
          <AppHeading>Meme Generator</AppHeading>
          <FormAndMemeContainer>
            {this.renderMemeContainer()}
            {this.renderInputForm()}
          </FormAndMemeContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default MeMeGenerator
