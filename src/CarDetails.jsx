import React, { useRef, useEffect } from 'react';

const CarDetails = ({ initialData }) => {
  const modelInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const colorInputRef = useRef(null);

  useEffect(() => {
    if (initialData) {
      const { model, year, color } = initialData;
      modelInputRef.current.value = model || '';
      yearInputRef.current.value = year || '';
      colorInputRef.current.value = color || '';
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const model = modelInputRef.current.value;
    const year = yearInputRef.current.value;
    const color = colorInputRef.current.value;

    // Perform form submission logic with the car details
    console.log('Model:', model);
    console.log('Year:', year);
    console.log('Color:', color);

    // Reset the form
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" ref={modelInputRef} />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input type="text" id="year" ref={yearInputRef} />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" ref={colorInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarDetails;
