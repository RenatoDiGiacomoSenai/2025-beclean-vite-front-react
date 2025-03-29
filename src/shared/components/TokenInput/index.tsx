import { ForgetFormType } from '@shared/authentication/components/ForgetForm'
import { useState, useRef, ClipboardEvent } from 'react'

type CharInputProps = {
  setValue: (field: keyof ForgetFormType, value: string) => void
  fieldName: keyof ForgetFormType
}

function CharInput({ setValue, fieldName }: CharInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']) // Use state to persist values

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const pastedText = event.clipboardData.getData('text').slice(0, 4)
    const newCode = pastedText.split('').concat(Array(4).fill('')).slice(0, 4)

    setVerificationCode(newCode) // Update state
    setValue(fieldName, newCode.join('')) // Update useForm

    newCode.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]!.value = char

        if (char && inputRefs.current[index + 1]) {
          inputRefs.current[index + 1]!.focus()
        }
      }
    })
  }

  const handleChange = (index: number, value: string) => {
    const updatedCode = [...verificationCode]
    updatedCode[index] = value.slice(-1)
    setVerificationCode(updatedCode) // Update state
    setValue(fieldName, updatedCode.join('')) // Update useForm

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]!.focus()
    }
  }

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {verificationCode.map((char, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => (inputRefs.current[index] = el)}
          value={char} // Bind input value to state
          onChange={(e) => handleChange(index, e.target.value)}
          onPaste={handlePaste}
          style={{
            width: '50px',
            height: '50px',
            textAlign: 'center',
            fontSize: '24px',
            border: '2px solid #ccc',
            borderRadius: '5px',
          }}
        />
      ))}
    </div>
  )
}

export default CharInput
