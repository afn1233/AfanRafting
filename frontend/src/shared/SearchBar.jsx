import React, {useRef} from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap';


const SearchBar = () => {

    const locationRef=useRef('')
    const distanceRef=useRef(0)
    const maxGroupSizeRef=useRef(0)

    const searchHandler = () =>{
        const location=locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if (location==='' || distance==='' || maxGroupSize===''){
            return alert('Sva polja moraju biti ispunjena!');
        }
    }

  return <Col lg='12'>
    <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                    <h6>Ruta</h6>
                    <input type='text' placeholder='Gdje se ide? ' ref={locationRef}/>
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span><i class="ri-map-pin-time-line"></i></span>
                <div>
                    <h6>Udaljenost</h6>
                    <input type='number' placeholder='Udaljenost' ref={distanceRef} />
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-last">
                <span><i class="ri-group-line"></i></span>
                <div>
                    <h6>Maksimalan broj osoba</h6>
                    <input type='number' placeholder='0' ref={maxGroupSizeRef} />
                </div>
            </FormGroup>

            <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
            </span>
        </Form>
    </div>

  </Col>
}

export default SearchBar
