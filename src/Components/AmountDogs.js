import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AmountDogs = ({number}) => {

    


    const handleClick = () => {
        let number = 6;
        number ++;
        // console.log("counter", number);
        alert(number)
    };

    const handleChange = (event) => {
    number(event.target.value);
    alert(event.target.value)
    }

    return (
        <div>
            <Button variant="secondary"  onClick={handleClick} className='dogDropDown'>Increment by 6</Button>
       
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
