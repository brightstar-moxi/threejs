

const CustomButon = ({ type, title, customStyle, handleCLick}) => {

const generateStyle = (type) => {
    if (type === "filled") {
        return {
            backgroundColor: '#000',
            color: '#fff'
        }
    }
}

  return (
   <button
   className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`} style={generateStyle(type)}>
    {title}
   </button>
  )
}

export default CustomButon