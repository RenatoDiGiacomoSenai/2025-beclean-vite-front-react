import { TextInputProps } from '@istic-ui/react'

// type CharInputProps = TextInputProps

function CharInput ({value}:TextInputProps)  {
  // const [verificationCode, setVerificationCode] = React.useState(['', '', '', '']);

  // const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
  //   event.preventDefault();
 
  //   const pastedText = event.clipboardData.getData('text');
 
  //   const newVerificationCode = [...verificationCode];
  //   for (
  //     let i = 0;
  //     i < Math.min(pastedText.length, verificationCode.length);
  //     i++
  //   ) {
  //     newVerificationCode[i] = pastedText[i];
  //   }
 
  //   setVerificationCode(newVerificationCode);
  //   setValue('code', newVerificationCode.join(''));
  // };



  return <input
    type="text"
    maxLength={1}
    value={value} 
    className={`
      w-20
      aspect-square
      text-center
      border-2
      rounded
      focus:outline-none
      text-5xl
      text-neutral-900
      focus:border-neutral-500 ${value ? "border-brand-500" : "border-neutral-300"}`}
    />

}


export default CharInput