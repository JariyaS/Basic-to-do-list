import {useState, useEffect} from 'react'

function TextFilter({setSearchText}) {
  const [input, setInput] = useState ('');

  useEffect(() => {
    const timeoutID = setTimeout (() => {
      setSearchText(input)
      console.log('Input changed')
    }, 1500);
    return () => {
      clearTimeout(timeoutID);
    }
  }, [input, setSearchText]);

  const handleChangeText = e => {
    setInput(e.target.value);
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control rounded-0"
        value={input}
        onChange={handleChangeText}
      />
      <button
        className="btn btn-secondary rounded-0"
        onClick={() => setSearchText('')}
      >
        <i className="fas fa-times" />
      </button>
    </div>
  );
}

export default TextFilter;