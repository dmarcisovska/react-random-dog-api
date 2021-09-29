import React from 'react'
import Form from 'react-bootstrap/Form'

const AmountDogs = ({number}) => {

    const handleChange = (event) => {
    number(event.target.value);
    }

    return (
        <div>
            <Form.Select aria-label="Default select example" onChange={handleChange} className="dogDropDown btn-dark">
                <option>Chose amount of dogs</option>
                <option value={6}>Six</option>
                <option value={9}>Nine</option>
                <option value={12}>Twelve</option>
            </Form.Select>

        </div>
    )
}

export default AmountDogs
