import { ForgetFormType } from '@shared/authentication/components/ForgetForm';
import { useRef, ClipboardEvent } from 'react';



type CharInputProps = {
  setValue: (field: keyof ForgetFormType, value: string) => void;
  fieldName: keyof ForgetFormType;
};

function CharInput({ setValue, fieldName }: CharInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const verificationCode = ['', '', '', '']; // Estado inicial fixo

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text').slice(0, 4);
    const newCode = pastedText.split('').concat(Array(4).fill('')).slice(0, 4);

    setValue(fieldName, newCode.join('')); // Atualiza o useForm

    newCode.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]!.value = char;

        if (char && inputRefs.current[index + 1]) {
          inputRefs.current[index + 1]!.focus();
        }
      }
    });
  };

  const handleChange = (index: number, value: string) => {
    verificationCode[index] = value.slice(-1);
    setValue(fieldName, verificationCode.join('')); // Atualiza o useForm

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]!.focus();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {verificationCode.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => (inputRefs.current[index] = el)}
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
  );
}

export default CharInput;
