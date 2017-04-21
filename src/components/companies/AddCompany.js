import React from 'react';

class AddCompany extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <main>
            <h2>Add a company that does front-end in NYC</h2>

            <div className="field-container">
              <label htmlFor="companyName">Company name</label>
              <input type="text" id="companyName"/>
            </div>

            <div className="field-container">
              <label htmlFor="website">Website</label>
              <input type="text" id="website"/>
            </div>

            <div className="field-container">
              <label htmlFor="description">Description</label>
              <textarea id="description"/>
            </div>

            <div className="field-container">
              <label htmlFor="address">Address in NYC <span className="optional">(optional)</span></label>
              <input type="text" id="address"/>
            </div>

            <div className="field-container">
              <label htmlFor="size">How many employees <span className="optional">(optional)</span></label>

              <label className="inline"><input type="radio"/> 1-10</label>
              <label className="inline"><input type="radio"/> 11-20</label>
              <label className="inline"><input type="radio"/> 21-50</label>
              <label className="inline"><input type="radio"/> 51-250</label>
              <label className="inline"><input type="radio"/> 250+</label>
            </div>

            <div className="field-container">
              <label htmlFor="technologies">Technologies</label>

              <label className="inline"><input type="checkbox"/> Angular</label>
              <label className="inline"><input type="checkbox"/> React</label>
              <label className="inline"><input type="checkbox"/> React Native</label>
              <label className="inline"><input type="checkbox"/> Node</label>
            </div>

            <button className="submit">Submit for review</button>
          </main>

          <aside>
            Hello there!
          </aside>
        </div>

      </div>
    );
  }
}

export default AddCompany;
