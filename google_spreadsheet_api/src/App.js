import React from 'react';
import './App.css';

function App() {
  
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    birthday: '',
  });

  const handleNameChange = (e) => {
    setValues((values)=> ({
      ...values,
      name: e.target.value,
    }));
  };

  const handleEmailChange = (e) => {
    setValues((values)=> ({
      ...values,
      email: e.target.value,
    }));
  };

  const handleBirthdayChange = (e) => {
    setValues((values)=> ({
      ...values,
      birthday: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    const url = 'https://sheet.best/api/sheets/d71e59ab-85e7-4eb7-b92c-6f54cfad4461';
    const postOptions = {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(values),
    };
    postData(url, postOptions);
  };
  

  const postData = async (path, options) => {
    try {
      const response = await fetch(path, options);
      if (response.status !== 200 || !response.ok) {
        console.warn(response);
        throw new Error('Something went wrong!');
      } else {
        console.log(response);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="App">
      <header>header</header>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <label>
            Name: 
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleNameChange}
          />
          </label>
          <label>
            Email: 
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleEmailChange}
            />
          </label>
          <label>
            Birthday:
            <input
              name="birthday"
              type="date"
              value={values.birthday}
              onChange={handleBirthdayChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default App;
