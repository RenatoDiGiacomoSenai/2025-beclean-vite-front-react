import { TextInput, TextInputProps } from '@istic-ui/react'

// type CharInputProps = TextInputProps

function CharInput ({value}:TextInputProps)  {



  return <TextInput id="char-input" type="text" size="lg" maxLength={1} value={value} />
}


export default CharInput