import React from 'react'

const AddBranch = () => {
  return (
    <div>
        <h1>AddBranch</h1>
        <form action="">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" /><br />
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" /><br />
            <label htmlFor="contact">contact</label>
            <input type="text" name="contact" id="contact" /><br />
            <label htmlFor="pincode">Pincode</label>
            <input type="text" name="pincode" id="pincode" /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddBranch