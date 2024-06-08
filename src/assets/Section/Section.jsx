import React, { useState, useEffect } from 'react';
import Faq from "react-faq-component";
import { Map, AdvancedMarker } from '@vis.gl/react-google-maps';

import data from './data.json';
import faq_data from './faq_data.json';
import './Section.css';
import './custom-styles.css';
import obj from '/obj.svg';
import euro from '/euro.svg';
import Button from '../../common/Button';


export function TitleSection() {
    return (
        <section className='slogan'>
          <div className='container-section'>
            <img className='object-svg' src={obj} alt="Object." />
            <div className='text'>
              <div>
                <p>Charge on the go!</p>
                <h1>Power bank rental service</h1>
              </div>
            </div>
          </div>
        </section>
    )
}

export function MissionSection() {
    return (
        <section>
          <div>
            <h3>Rent a power bank while you're shopping or at a business meeting.</h3>
          </div>
        </section>
    )
}


export function ExperianceSection() {
  const [selectedOption, setSelectedOption] = useState('Courier'); 

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  }

  const renderContent = () => {
    switch (selectedOption) {
      case 'Supervisor':
        return (
          <div className='info'>
            <h2>{data.supervisor.experiance}</h2>
            <span>{data.supervisor.name}</span>
            <b>{data.supervisor.position}</b>
          </div>
      );
      case 'Courier':
        return (
          <div className='info'>
            <h2>{data.courier.experiance}</h2>
            <span>{data.courier.name}</span>
            <b>{data.courier.position}</b>
          </div>
      );
      case 'Field manager':
        return (
          <div className='info'>
            <h2>{data.field_manager.experiance}</h2>
            <span>{data.field_manager.name}</span>
            <b>{data.field_manager.position}</b>
          </div>
      );
      default:
        return null;
    }
  }

    return (
        <section className='reviews'>
          <div className='experiance'>
            <div>
              <h4>For everyone on the move</h4>
              <div className='peoples'>
                <Button id={selectedOption == 'Supervisor' ? 'active' : ''} text={'Supervisor'} onClick={() => handleOptionChange('Supervisor')}/>
                <Button id={selectedOption == 'Courier' ? 'active' : ''} text={'Courier'} onClick={() => handleOptionChange('Courier')}/>
                <Button id={selectedOption == 'Field manager' ? 'active' : ''} text={'Field manager'} onClick={() => handleOptionChange('Field manager')}/>
              </div>
              {renderContent()}
            </div>
          </div>
        </section>
    )
}

export function PriceSection() {
    return (
        <section className='price-label'>
          <div className='price'>
            <div className='price-data'>
              <img src={euro} className='price-data-logo' alt="Euro."/>
              <div className='price-data-summary'>2 € / 24 hours</div>
              <div className='price-data-info'>Tariffs vary in different locations - see current prices on the website.</div>
              <Button id={'price-data-rent'} text='Rent' onClick={()=>{}}/>
            </div>
          </div>
        </section>
    )
}

export function ActionSection() {
    return (
        <section className='how-it-works'>
          <div className='block'>
          <div className='work'>
            <div className='actions'>
              <div className='numbering'>1</div>
              <div className='actions-thesis'>
                <h1><span className='first-word'>Take</span> a power bank in the nearest terminal</h1>
                <div className='description'>Find the terminal that is near you in the application. Scan the QR code or enter the terminal number.</div>
              </div>
            </div>
          </div>
        <div className='work'>
          <div className='actions'>
            <div className='numbering'>2</div>
            <div className='actions-thesis'>
              <h1><span className='first-word'>Charge</span> on the go and hand it over in a convenient place</h1>
              <div className='description'>Take the power bank with you and return it anywhere from the application.</div>
            </div>
          </div>
        </div>
        </div>
      </section>
    )
}


export function StationMap() {

  const coordinates = [
    { lat: 48.144463, lng: 17.104583 },
    { lat: 48.145770, lng: 17.124725 },
  ]

  return (
    <div id='map'>
      <Map
        mapId={'6f084d5a48de260b'}
        defaultZoom={16}
        center={{ lat: 48.141399, lng: 17.106052 }}
        gestureHandling={'greedy'}
        disableDefaultUI
      >
        {coordinates.map((coord, index) => (
          <AdvancedMarker
            key={index}
            position={coord}
            title={`Marker ${index + 1}`}
            onClick={() => {}}
          >
            <div className='marker-style'></div>
          </AdvancedMarker>
        ))}
      </Map>
    </div>
  )
}


export function QASection() {
  const [rows, setRowsOption] = useState(null);

  useEffect(() => {
      if (rows) {
          setTimeout(() => {
              rows[0].expand();
          }, 2500);

          setTimeout(() => {
              rows[0].close();
          }, 5000);

          setTimeout(() => {
              rows[0].scrollIntoView();
          }, 10000);
      }
  }, [rows]);

  return (
    <section>
      <div className="faq-style-wrapper">
        <Faq data={faq_data} getRowOptions={setRowsOption} />
      </div>
    </section>
  )
}